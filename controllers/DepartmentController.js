const Department = require('../models/Department');

class DepartmentController {
  getAllDepartments(req, res) {
    Department.getAll((err, departments) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      res.json(departments);
    });
  }

  getDepartmentById(req, res) {
    const departmentId = req.params.id;
    Department.getById(departmentId, (err, department) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      if (!department) {
        return res.status(404).json({ error: 'Department not found' });
      }
      res.json(department);
    });
  }

  createDepartment(req, res) {
    const newDepartment = req.body;
    Department.create(newDepartment, (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      res.status(201).json({ message: 'Department created successfully', departmentId: result.insertId });
    });
  }

  updateDepartment(req, res) {
    const departmentId = req.params.id;
    const updatedDepartment = req.body;
    Department.update(departmentId, updatedDepartment, (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: 'Department not found' });
      }
      res.json({ message: 'Department updated successfully' });
    });
  }

  deleteDepartment(req, res) {
    const departmentId = req.params.id;
    Department.delete(departmentId, (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: 'Department not found' });
      }
      res.json({ message: 'Department deleted successfully' });
    });
  }
}

module.exports = new DepartmentController();
