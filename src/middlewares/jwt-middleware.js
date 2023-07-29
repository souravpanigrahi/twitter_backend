const JWT = require("passport-jwt");
const JwtStrategy = JWT.Strategy;
const ExtractJwt = JWT.ExtractJwt;

const User = require("../models/user.js");
const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "twitter_secret",
};

const passportAuth = (passport) => {
  passport.use(
    new JwtStrategy(opts, async (jwt_payload, done) => {
      const user = await User.findById(jwt_payload.id);
      if (!user) {
        done(null, false);
      } else {
        done(null, user);
      }
    })
  );
};

module.exports = passportAuth;
