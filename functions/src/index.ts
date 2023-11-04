import {Router} from "itty-router";

const router = Router();

const corsHeaders = {
    "Access-Control-Allow-Origin": "https://www.naveenmk.me",
    "Access-Control-Allow-Methods": "GET",
    "Access-Control-Max-Age": "86400"
};

router.get("/api/get-article-hits", async ({query, method, headers}, env) => {
    // handle CORS preflight request
    if (method === "OPTIONS") {
        return new Response(null, {headers: corsHeaders});
    }

    if (!query || !query.slug)
        return Response.json(
            {error: "slug is required"},
            {status: 400, headers: corsHeaders}
        );

    // get orgin from headers
    const origin: string | null = headers.get("origin");
    if (
        env.ENVIRONMENT === "production" &&
        (!origin || new URL(origin).hostname !== "www.naveenmk.me")
    ) {
        return Response.json(
            {error: "unauthorized"},
            {status: 401, headers: corsHeaders}
        );
    }

    // get the slug from the query string
    const slug = decodeURIComponent(query.slug);

    // first see if we can find the slug in the database
    const {results} = await env.DB.prepare(
        "SELECT * FROM Visits WHERE slug = ?"
    )
        .bind(slug)
        .all();
    if (results.length === 1) {
        await env.DB.prepare(
            "UPDATE Visits SET count = count + 1 WHERE slug = ?"
        )
            .bind(slug)
            .run();
        return Response.json(
            {hits: (results[0]["count"] as number) + 1},
            {headers: corsHeaders}
        );
    }

    // the slug is not in the database, add it
    const insertRes = await env.DB.prepare(
        "INSERT INTO Visits (slug) VALUES (?)"
    )
        .bind(slug)
        .run();
    if (insertRes.results.length === 1) {
        return Response.json({hits: 1}, {headers: corsHeaders});
    }
});

router.all("*", () => new Response("404, not found!", {status: 404}));

export interface Env {
    DB: D1Database;
}

export default {
    fetch: router.handle
};
