const User = require('../models/User');

class UserController {
  getAllUsers(req, res) {
    User.getAll((err, users) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      res.json(users);
    });
  }

  getUserById(req, res) {
    const userId = req.params.id;
    User.getById(userId, (err, user) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(user);
    });
  }

  createUser(req, res) {
    const newUser = req.body;
    User.create(newUser, (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      res.status(201).json({ message: 'User created successfully', userId: result.insertId });
    });
  }

  updateUser(req, res) {
    const userId = req.params.id;
    const updatedUser = req.body;
    User.update(userId, updatedUser, (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json({ message: 'User updated successfully' });
    });
  }

  deleteUser(req, res) {
    const userId = req.params.id;
    User.delete(userId, (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json({ message: 'User deleted successfully' });
    });
  }
}

module.exports = new UserController();
