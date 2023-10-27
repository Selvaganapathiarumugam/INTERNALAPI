const db = require('../db');

class User {
  getAll(callback) {
    var sql="SELECT U.Id,U.UserName,U.Password,D.Name,R.RoleName ";
    sql=sql+" FROM users as U ";
    sql=sql+" INNER JOIN roles as r on U.RoleId = R.Id ";
    sql=sql+" INNER JOIN departments as D on U.DepartmentId = D.Id ";
    sql=sql+" WHERE U.isActive = 1";
    db.query(sql, callback);
  }

  getById(id, callback) {
    var sql="SELECT U.Id,U.UserName,U.Password,D.Name,R.RoleName ";
    sql=sql+" FROM users as U ";
    sql=sql+" INNER JOIN roles as r on U.RoleId = R.Id ";
    sql=sql+" INNER JOIN departments as D on U.DepartmentId = D.Id ";
    sql=sql+" WHERE U.isActive = 1 AND U.Id = ?"; 
    db.query( sql, [id], callback);
  }

  create(user, callback) {
    db.query('INSERT INTO users SET ?', user, callback);
  }

  update(id, user, callback) {
    db.query('UPDATE users SET ? WHERE Id = ?', [user, id], callback);
  }

  delete(id, callback) {
    db.query('DELETE FROM users WHERE Id = ?', [id], callback);
  }
}

module.exports = new User();
