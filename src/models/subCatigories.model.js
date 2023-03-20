module.exports = {
    SUBCATEGORIESID: "SELECT * FROM sub_catigories where id = $1",

    ALLSUBCATEGORIES: "SELECT * FROM sub_catigories",
    
    ADDSUBCATEGORIES: "INSERT INTO sub_catigories (sabName, catId) values ($1, $2) RETURNING *",

    UPSUBCATEGORIES: "UPDATE sub_catigories SET sabName = $1, catId = $2 WHERE id = $3 RETURNING *",

    DELSUBCATIGORIES: "DELETE FROM sub_catigories WHERE id = $1"
}