import React from "react";

export default function useHits(slug: string) {
    const [hits, setHits] = React.useState<number | null>(null);

    React.useEffect(() => {
        // Don't execute during unit tests (check for a special cookie)
        const isUnitTest = typeof document !== "undefined" && document.cookie.includes("unit_test=true");
        if (isUnitTest) {
            setHits(1337);
            return;
        }

        // Register the article as seen!
        if (process.env.NODE_ENV === "production") {
            // Fetch the # of hits
            fetch(`https://api.syrusdark.cc/api/get-article-hits?slug=${slug}`)
                .then(res => res.json())
                .then(json => {
                    if (typeof json.hits === "number") {
                        setHits(json.hits + 1);
                    }
                })
                .catch(e => {
                    console.error(e);
                    setHits(0);
                });
        } else {
            setHits(1337);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return hits;
}
