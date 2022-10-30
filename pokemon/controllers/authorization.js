const appConfig = require("../config/config");

const authorizationController = {
  login: (req, res) => {
    const authorizationUrl = `${
      appConfig.authorizationHost
    }/authorize?response_type=code&client_id=${
      appConfig.clientID
    }&redirect_uri=${encodeURIComponent(
      appConfig.redirectUrl
    )}&state=1234&scope=openid%20profile%20email`;

    res.redirect(authorizationUrl);
  }
};

module.exports = authorizationController;
