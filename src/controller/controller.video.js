const { fetch, fetchAll } = require("../database/pg");
const { VIDEOADD, VIDEOALL, VIDEOID, UPVIDEO, DELVIDEO } = require("../models/video.model");
const { SIGN, VERIFY } = require("../utils/jwt");
const path = require("path");


module.exports = {
  GET: async (req, res) => {
    if (!isNaN(+req.params.id)) {
      res.send({
        data: await fetch(VIDEOID, req.params.id),
      });
    } else {
      res.send({
        data: await fetchAll(VIDEOALL),
      });
    }
  },
  POST: async (req, res) => {
    try {
        if (!VERIFY(req.headers.token))
            return res.send({
            status: 401,
            message: "you token invalid",
        });
        let { file } = req.files;
        let { token } = req.headers;
        let { title, catId, subId } = req.body;
        const { userId } = VERIFY(token);
        if (VERIFY(!req.headers.token))
        return res.send({
          status: 401,
          message: 'you must send max 50 mb file',
        }) 
        if (file.truncated) throw new Error("you must send max 50 mb file");
        let types = file.name.split(".");
        let type = types[types.length - 1];
        if (type != "mp4") throw new Error("Video's type invalid!");
        const random = Math.floor(Math.random() * 9000 + 1000);
        await file.mv(
            path.join(
              process.cwd(),
              "uploads",
              "videos",
              title + random + "." + type
            )
        );
        await fetch(VIDEOADD, userId, title, catId, subId);
        res.send({ status: 200, message: "Video added!" });
    } catch (error) {
      res.send({ status: 404, message: error.message });
    }
  },

  PUT: async (req, res) => {
    try {
        const { id } = req.params;
        const { title } = req.body;
        const oldSubCategories = await fetch(VIDEOID, id)

        await fetch(UPVIDEO, title ? title : oldSubCategories.title, id )
        res.send({ status: 200, message: "video update!" });
    } catch (error) {
        res.send({ status: 404, message: error.message });
    }
  },

  DELETE: async (req, res) => {
    try {
        const { id } = req.params;
        if (!VERIFY(req.headers.token))
        return res.send({
          status: 401,
          message: 'you not token',
        }) 
        await fetch(DELVIDEO, id )
        res.send({ status: 200, message: "video delete!" });
    } catch (error) {
        res.send({ status: 404, message: error.message });
    }
  },
  
};
