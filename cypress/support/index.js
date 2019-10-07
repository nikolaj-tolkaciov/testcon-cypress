import './commands'

const credentials = require("../helpers/credentials")
Cypress.config('baseUrl', `https://${credentials.user}:${credentials.password}@d1uemyzvpgpuwg.cloudfront.net`)