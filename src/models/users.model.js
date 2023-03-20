module.exports = {
    GETUSERS: "SELECT * FROM users",
    GETUSERSID: "SELECT * FROM users where id = $1",
    REGIST:
      "INSERT INTO users (username, login, password) VALUES ($1,$2,$3) RETURNING id",
    LOGIN: "SELECT id FROM users WHERE login = $1 and password = $2",
  };