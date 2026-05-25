export default async function handler(req, res) {

    const response = await fetch(
        "https://raw.githubusercontent.com/Orionservice-hub/.gg-orionservice.ontop/refs/heads/main/Orionservice.loader"
    );

    const text = await response.text();

    res.setHeader("Content-Type", "text/plain");
    res.status(200).send(text);
}
