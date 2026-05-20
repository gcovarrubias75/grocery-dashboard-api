export default async function handler(req, res) {
    try {
        const url = "https://mpr.datamart.ams.usda.gov/services/v1.1/reports";
        const response = await fetch(url);
        const json = await response.json();

        // Ensure results exist
        const results = json.results || [];

        // Filter livestock-related reports safely
        const livestockReports = results.filter(r => {
            const title = r.report_title || "";
            return (
                title.toLowerCase().includes("livestock") ||
                title.toLowerCase().includes("meat") ||
                title.toLowerCase().includes("poultry") ||
                title.toLowerCase().includes("cattle") ||
                title.toLowerCase().includes("hog")
            );
        });

        res.setHeader("Access-Control-Allow-Origin", "*");
        res.status(200).json({ livestockReports });

    } catch (err) {
        res.status(500).json({
            error: "USDA fetch failed",
            details: err.message
        });
    }
}
