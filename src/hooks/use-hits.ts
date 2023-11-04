import React from "react";

export default function useHits(slug: string) {
    const [hits, setHits] = React.useState<number | null>(null);

    React.useEffect(() => {
        // Register the article as seen!
        if (process.env.NODE_ENV === "production") {
            // Fetch the # of hits
            fetch(`http://127.0.0.1:8787//api/get-article-hits?slug=${slug}`)
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
