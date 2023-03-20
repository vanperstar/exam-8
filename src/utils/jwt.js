const jwt = require("jsonwebtoken");

module.exports = {
  SIGN: (payload) => {
    return jwt.sign(payload, process.env.SECRET, { expiresIn: "5h" });
  },
  VERIFY: (token) => {
    try {
      if (jwt.verify(token, process.env.SECRET) instanceof Error) return 0;
      else return jwt.verify(token, process.env.SECRET);
    } catch (error) {
      return 0;
    }
  },
};


//  token

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjc5MzAyOTQ1LCJleHAiOjE2NzkzNjI5NDV9.MsYxz9gZc9rmHz-kibiwN9nP6q8CDTc-1pE7aLsdekI
