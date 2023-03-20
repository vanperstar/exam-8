module.exports = {
    VIDEOADD: "INSERT INTO videos (userId, title, catId, subId ) VALUES ($1,$2,$3, $4) RETURNING *",
    VIDEOALL: "SELECT * FROM videos",
    VIDEOID: "SELECT * FROM videos where id = $1",
    UPVIDEO: "UPDATE videos SET title = $1 WHERE id = $2 RETURNING *",
    DELVIDEO: "DELETE FROM videos WHERE  id = $1"
}