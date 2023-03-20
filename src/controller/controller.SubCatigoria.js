const { fetch, fetchAll } = require("../database/pg");
const { ALLSUBCATEGORIES, SUBCATEGORIESID, ADDSUBCATEGORIES, UPSUBCATEGORIES, DELSUBCATIGORIES } = require("../models/subCatigories.model");

module.exports = {
  GET: async (req, res) => {
    if (!isNaN(+req.params.id)) {
      res.send({
        data: await fetch(SUBCATEGORIESID, req.params.id),
      });
    } else {
      res.send({
        data: await fetchAll(ALLSUBCATEGORIES),
      });
    }
  },

  POST: async (req, res) => {
    try {
        let { sabName, catId } = req.body;
        if (!sabName, !catId) {
            throw new Error("Sub_catigories exsist!")
        }
        await fetch(ADDSUBCATEGORIES, sabName, catId)
        res.send({ status: 200, message: "Sub_catigories added!" });
    } catch (error) {
        res.send({ status: 404, message: error.message });
    }
  },

  PUT: async (req, res) => {
    try {
        const { id } = req.params;
        const { sabName, catId } = req.body;
        const oldSubCategories = await fetch(SUBCATEGORIESID, id)

        await fetch(UPSUBCATEGORIES, 
          sabName ? sabName : oldSubCategories.sabName, 
          catId ? catId : oldSubCategories.catId, 
          id )
        res.send({ status: 200, message: "Sub_catigories update!" });
    } catch (error) {
        res.send({ status: 404, message: error.message });
    }
  },

  DELETE: async (req, res) => {
    try {
        const { id } = req.params;

        await fetch(DELSUBCATIGORIES, id )
        res.send({ status: 200, message: "Sub_catigories delete!" });
    } catch (error) {
        res.send({ status: 404, message: error.message });
    }
  },
};
