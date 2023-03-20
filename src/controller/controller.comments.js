const { fetch, fetchAll } = require("../database/pg");
const { COMMENTALL, COMMENTID, COMMENTADD, UPCOMMENT, DELCOMMENT } = require("../models/comments.model");


module.exports = {
    GET: async (req, res) => {
        if (!isNaN(+req.params.id)) {
            res.send({
            data: await fetch(COMMENTID, req.params.id),
            });
        } else {
            res.send({
            data: await fetchAll(COMMENTALL),
            });
        }
    },

    POST: async (req, res) => {
        try {
            let { userId, videoId, comment } = req.body;
            if (!userId, !videoId, !comment) {
                throw new Error("wrong comment!")
            }
            await fetch(COMMENTADD, userId, videoId, comment)
            return res.send({ status: 200, message: "comment added!" });
        } catch (error) {
            res.send({ status: 404, message: error.message });
        }
    },

    PUT: async (req, res) => {
        try {
            const { id } = req.params;
            const { comment } = req.body;
            const oldSubCategories = await fetch(COMMENTID, id)
    
            await fetch(UPCOMMENT, comment ? comment : oldSubCategories.comment, id )
            res.send({ status: 200, message: "comment update!" });
        } catch (error) {
            res.send({ status: 404, message: error.message });
        }
      },
    
      DELETE: async (req, res) => {
        try {
            const { id } = req.params;
    
            await fetch(DELCOMMENT, id )
            res.send({ status: 200, message: "comment delete!" });
        } catch (error) {
            res.send({ status: 404, message: error.message });
        }
      },
}