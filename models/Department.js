const db = require('../db');

class Department {
  getAll(callback) {
    db.query('SELECT * FROM departments where isActive = 1', callback);
  }

  getById(id, callback) {
    db.query('SELECT * FROM departments WHERE isActive = 1 and Id = ?', [id], callback);
  }

  create(department, callback) {
    db.query('INSERT INTO departments SET ?', department, callback);
  }

  update(id, department, callback) {
    db.query('UPDATE departments SET ? WHERE Id = ?', [department, id], callback);
  }

  delete(id, callback) {
    db.query('DELETE FROM departments WHERE Id = ?', [id], callback);
  }
}

module.exports = new Department();