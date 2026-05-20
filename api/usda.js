export default async function handler(req, res) {
    try {
        const url = "https://www.ams.usda.gov/mnreports/lm_hmr.txt";
        const response = await fetch(url);
        const text = await response.text();

        res.setHeader("Access-Control-Allow-Origin", "*");
        res.status(200).json({ text });
    } catch (err) {
        res.status(500).json({ error: "USDA fetch failed" });
    }
}
