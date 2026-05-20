export default async function handler(req, res) {
    try {
        const url = "https://mpr.datamart.ams.usda.gov/services/v1.1/summary";
        const response = await fetch(url);
        const data = await response.json();

        res.setHeader("Access-Control-Allow-Origin", "*");
        res.status(200).json(data);

    } catch (err) {
        res.status(500).json({
            error: "USDA fetch failed",
            details: err.message
        });
    }
}
