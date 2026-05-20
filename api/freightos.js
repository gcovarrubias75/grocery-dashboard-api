export default async function handler(req, res) {
    try {
        const url = "https://fbx.freightos.com/api/fbx?format=json";
        const response = await fetch(url);
        const data = await response.json();

        res.setHeader("Access-Control-Allow-Origin", "*");
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({
            error: "Freightos fetch failed",
            details: err.message
        });
    }
}
