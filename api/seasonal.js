export const config = {
    runtime: "nodejs"
};

export default async function handler(req, res) {
    try {
        const url = "https://snaped.fns.usda.gov/data/seasonal-produce.json";
        const response = await fetch(url);
        const data = await response.json();

        res.setHeader("Access-Control-Allow-Origin", "*");
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({
            error: "Seasonal produce fetch failed",
            details: err.message
        });
    }
}
