const Role = require('../models/Role');

class RoleController {
  getAllRoles(req, res) 
  {
        Role.getAll((err, roles) => {
          if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal Server Error' });
          }
          res.json(roles);
        });
  }
  getRoleById(req, res) 
  {
        const roleId = req.params.id;
        Role.getById(roleId, (err, role) => {
          if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal Server Error' });
          }
          if (!role) {
            return res.status(404).json({ error: 'Role not found' });
          }
          res.json(role);
        });
  }

  createRole(req, res) 
  {
        const newRole = req.body;
        Role.create(newRole, (err, result) => {
          if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal Server Error' });
          }
          res.status(201).json({ message: 'Role created successfully', roleId: result.insertId });
        });
  }

  updateRole(req, res) 
  {
        const roleId = req.params.id;
        const updatedRole = req.body;
        Role.update(roleId, updatedRole, (err, result) => {
          if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal Server Error' });
          }
          if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Role not found' });
          }
          res.json({ message: 'Role updated successfully' });
        });
  }

  deleteRole(req, res) 
  {
        const roleId = req.params.id;
        Role.delete(roleId, (err, result) => {
          if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal Server Error' });
          }
          if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Role not found' });
          }
          res.json({ message: 'Role deleted successfully' });
        });
  }
}

module.exports = new RoleController();
