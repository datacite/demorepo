module.exports = function () {
    return {
        environment: process.env.ELEVENTY_ENV || "development",
        repo_id: process.env.DATA_DOMAIN || "demo-site",
        tracking_script_url: process.env.TRACKING_SCRIPT_LOC || "http://localhost:8000/js/custom_tracker/datacite-analytics.js",
        tracking_api_endpoint: process.env.TRACKING_API_ENDPOINT || "https://analytics.stage.datacite.org",
        dashboard_url: process.env.DASHBOARD_URL || "https://analytics.stage.datacite.org/demorepo.stage.datacite.org",
        dashboard_url_fabrica: process.env.DASHBOARD_URL_FABRICA || "https://doi.stage.datacite.org/repositories/datacite.demo/analytics"
    };
};