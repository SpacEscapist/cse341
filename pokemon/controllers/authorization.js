// oidc stands for "openid connect"
// Provides user with status if they are logged in or logged out
const authorize = (req, res) => {
  // #swagger.tags = ["Authorization Requests"]
  // #swagger.description = "Inform user if they are logged in or not"
  try {
    res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get profile details about logged-in user
const profile = (req, res) => {
  // #swagger.tags = ["Authorization Requests"]
  // #swagger.description = "Get profile details about the user"
  try {
    res.json(req.oidc.user);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { authorize, profile };
