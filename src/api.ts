// use to add events that occur on the website

export function addEvent(event_name: string) {
    if (process.env.NODE_ENV === "production") {
        fetch(`https://api.syrusdark.cc/api/add-event?event_name=${event_name}`)
            .then(res => res.json())
            .then(json => {
                console.log(json);
            })
            .catch(e => {
                console.error(e);
            });
    }
}
