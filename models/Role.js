const db = require('../db');

class Role {
  getAll(callback) {
    db.query('SELECT * FROM roles where isActive = 1 order by Id asc', callback);
  }

  getById(id, callback) {
    db.query('SELECT * FROM roles where isActive = 1 and Id = ?', [id], callback);
  }

  create(role, callback) {
    db.query('INSERT INTO roles SET ?', role, callback);
  }

  update(id, role, callback) {
    db.query('UPDATE roles SET ? WHERE Id = ?', [role, id], callback);
  }

  delete(id, callback) {
    db.query('DELETE FROM roles WHERE Id = ?', [id], callback);
  }
}

module.exports = new Role();