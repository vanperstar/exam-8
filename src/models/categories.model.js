module.exports = {
    ALLCATEGORIES: "SELECT * FROM categories",
    CATEGORIESID: "SELECT * FROM categories where id = $1",
    ADDCATEGORIES: "INSERT INTO categories (catName) values ($1) RETURNING"
}