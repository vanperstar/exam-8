const { fetch, fetchAll } = require("../database/pg");
const { ALLCATEGORIES, CATEGORIESID } = require("../models/categories.model");

module.exports = {
  GET: async (req, res) => {
    if (!isNaN(+req.params.id)) {
      res.send({
        data: await fetch(CATEGORIESID, req.params.id),
      });
    } else {
      res.send({
        data: await fetchAll(ALLCATEGORIES),
      });
    }
  },
};
