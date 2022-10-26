import  runQuery  from '../DAL.mjs';

export const IsUser = ({ email, password }, cb) => {
    return runQuery(
        `SELECT * FROM users WHERE email=? AND password=?;`, [email, password], cb);

}
export const newUser = ({ user_id, first_name, last_name, email, password, city, street }, cb) => {
    return runQuery('INSERT INTO `users`( `user_id` ,`first_name`, `last_name`,`email`, `password`,`city`,`street`) VALUES(?,?,?,?,?,?,?)',
        [user_id, first_name, last_name, email, password, city, street], cb);
}








