export default async function handler(req, res) {
    try {
        const url = "https://www.ers.usda.gov/webdocs/DataFiles/80526/Monthly_Retail_Meat_Prices.json";
        const response = await fetch(url);
        const data = await response.json();

        res.setHeader("Access-Control-Allow-Origin", "*");
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({
            error: "USDA ERS fetch failed",
            details: err.message
        });
    }
}
