
const helpSidebarContents = require("./helpSidebarContents/helpSidebarContents.service.js");
const companyPositionMappings = require("./companyPositionMappings/companyPositionMappings.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
    
  app.configure(helpSidebarContents);
  app.configure(companyPositionMappings);
    // ~cb-add-configure-service-name~
};
