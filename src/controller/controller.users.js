const { fetch, fetchAll } = require("../database/pg");
const { GETUSERS, GETUSERSID, REGIST, LOGIN } = require("../models/users.model");
const { SIGN, VERIFY } = require("../utils/jwt");
const sha256 = require("sha256");

module.exports = {

  GET: async (req, res) => {
    if (!isNaN(+req.params.id)) {
      res.send({
        data: await fetch(GETUSERSID, req.params.id),
      });
    } else {
      res.send({
        data: await fetchAll(GETUSERS),
      });
    }
  },

  REG: async (req, res) => {
    try {
      let { username, login, password } = req.body;
      if (!username || !login || !password) throw new Error("Wrong data!");
      let id = await fetch(REGIST, username, login, sha256(password));
      res.send({
        status: 200,
        message: "User added!",
        data: { token: SIGN(id) },
      });
    } catch (error) {
      res.send({ status: 404, message: error.message });
    }
  },

  LOG: async (req, res) => {
    try {
      let { login, password } = req.body;
      if (!login || !password) throw new Error("Wrong data!");
      let id = await fetch(LOGIN, login, sha256(password));
      if (!id) throw new Error("Not foun user!");
      res.send({
        status: 200,
        message: "Success!",
        data: { token: SIGN(id) },
      });
    } catch (error) {
      res.send({ status: 404, message: error.message });
    }
  },
  
  CHECK: (req, res, next) => {
    try {
      if (!VERIFY(req.headers.token)) throw new Error("Invalid token!");
      res.send({
        status: 200,
        message: "Success!",
      });
    } catch (error) {
      res.send({ status: 404, message: error.message });
    }
  },
};
