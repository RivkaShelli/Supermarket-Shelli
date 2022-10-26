import { createConnection } from 'mysql';
var con = createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'project_4'
});
con.connect(function (err) {
    if (err) throw err;
    console.log("SQL Connected!");
});
const runQuery = async (sql, variables, cb) => {
    return con.query(sql, variables, function (err, result) {
        if (err) {
            console.log(err);
            return cb ? cb(null) : null
        } else
            return cb ? cb(result) : null;
    })
}
export default runQuery;


