/*
 * Custom javascript here.
 */

const DASHBOARD_URL = 'https://analytics.stage.datacite.org/demorepo.stage.datacite.org';
const DASHBOARD_URL_FABRICA = 'https://doi.stage.datacite.org/repositories/datacite.demo/analytics';
const SPECIFICATION_URL = 'https://docs.google.com/document/d/18NAwd8zYXwQea48IKGGYiepdE9l03wPKJtbFDqKYr9U/edit?usp=sharing';

// This must be done manually, ex. see mdc.ufosightings.html.
// const ENV = "dev";
const ENV = "stage";

window.addEventListener('load', function() {
  var element;

  (element = document.getElementById("dashboard-link")) ? element.setAttribute("href",DASHBOARD_URL) : null;
  (element = document.getElementById("dashboard-link-fabrica")) ? element.setAttribute("href",DASHBOARD_URL_FABRICA) : null;
  (element = document.getElementById("specification-link")) ? element.setAttribute("href",SPECIFICATION_URL) : null;
});
