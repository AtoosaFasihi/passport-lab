const express = require("express");
const router = express.Router();
const { ensureAuthenticated, isAdmin } = require("../middleware/checkAuth");

router.get("/", (req, res) => {
  res.send("welcome");
});

router.get("/dashboard", ensureAuthenticated, (req, res) => {
  res.render("dashboard", {
    user: req.user,
  });
});

router.get("/admin", ensureAuthenticated, (req, res) => {
  if (req.user.role === "admin") {
    const sessions = {}
    for (id in req.sessionStore.sessions) {
      const cookie = JSON.parse(req.sessionStore.sessions[id])
      sessions[id] = cookie.passport.user
    }
    res.render("dashboard", {
      user: req.user,
      sessions: sessions
    });
  }

});

router.get("/revoke/:sessionId", (req, res) => {
  req.sessionStore.destroy(sessionId,function(x){});
  res.send(`${sessionId} is deleted.`);
});


module.exports = router;
