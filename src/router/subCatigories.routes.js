
const { Router } = require("express");
const { GET, POST, PUT, DELETE } = require("../controller/controller.SubCatigoria")

const sub_catigories = Router()

sub_catigories.get("/sub_catigories", GET);
sub_catigories.get("/sub_catigories/:id", GET);
sub_catigories.post("/sub_catigories", POST);
sub_catigories.put("/sub_catigories/:id", PUT);
sub_catigories.delete("/sub_catigories/:id", DELETE);


module.exports = {sub_catigories}
