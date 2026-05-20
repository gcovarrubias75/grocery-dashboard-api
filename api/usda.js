export default async function handler(req, res) {
    try {
        // Fetch list of all USDA reports
        const listUrl = "https://mpr.datamart.ams.usda.gov/services/v1.1/reports";
        const listResponse = await fetch(listUrl);
        const listData = await listResponse.json();

        // Filter for livestock-related reports
        const livestockReports = listData.filter(r =>
            r.reportTitle.toLowerCase().includes("livestock") ||
            r.reportTitle.toLowerCase().includes("meat") ||
            r.reportTitle.toLowerCase().includes("poultry")
        );

        res.setHeader("Access-Control-Allow-Origin", "*");
        res.status(200).json({ livestockReports });

    } catch (err) {
        res.status(500).json({ error: "USDA fetch failed", details: err.message });
    }
}
