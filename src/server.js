const express = require('express');
require('dotenv').config();
const app = express();
app.use(express.json());
const fileUpload = require("express-fileupload");

const { categories } = require("./router/categories.routes")
const { sub_catigories } = require("./router/subCatigories.routes")
const { users } = require("./router/users.routes")
const { videos } = require("./router/video.routes")
const { comments } = require("./router/comments.routes")

const PORT = process.env.PORT || 3000

app.use(fileUpload({ limits: { fileSize: 50 * 1024 * 1024 } }));
app.use(express.json());
app.use(express.static("../uploads"));

app.use(categories);
app.use(sub_catigories);
app.use(users);
app.use(videos);
app.use(comments);







app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`)
})