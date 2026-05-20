export const config = {
    runtime: "nodejs"
};

export default async function handler(req, res) {
    try {
        const url = "https://droughtmonitor.unl.edu/Ajax.aspx?type=dmjson";
        const response = await fetch(url);
        const data = await response.json();

        res.setHeader("Access-Control-Allow-Origin", "*");
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({
            error: "NOAA fetch failed",
            details: err.message
        });
    }
}
