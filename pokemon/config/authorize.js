module.exports = {
  clientID: process.env.CLIENT_ID,
  secret: process.env.CLIENT_SECRET,
  issuerBaseURL: process.env.AUTHORIZATION_HOST,
  baseURL: process.env.BASE_URL,
  authRequired: false,
  auth0Logout: true
};
