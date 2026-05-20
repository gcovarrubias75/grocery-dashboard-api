export const config = {
    runtime: "nodejs"
};

export default async function handler(req, res) {
    try {
        const url = "https://fenixservices.fao.org/faostat/api/v1/en/Trade_DetailedTradeMatrix/DF_TRADE_DTM?item_code=220&year=2022";
        const response = await fetch(url);
        const data = await response.json();

        res.setHeader("Access-Control-Allow-Origin", "*");
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({
            error: "FAOSTAT fetch failed",
            details: err.message
        });
    }
}
