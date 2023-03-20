module.exports = {
    COMMENTALL: "SELECT * FROM comments",
    COMMENTID: "SELECT * FROM comments where id = $1",
    COMMENTADD: "INSERT INTO comments (userId, videoId, comment ) VALUES ($1,$2,$3) RETURNING *",
    UPCOMMENT: "UPDATE comments SET comment = $1 WHERE id = $2 RETURNING *",
    DELCOMMENT: "DELETE FROM comments WHERE id = $1"
}