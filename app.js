const express = require('express');
const app = express();
const cors = require('cors');
const roleRoutes = require('./routes/RoleRoutes');
const userRoutes = require('./routes/UserRoutes');
const departmentRoutes = require('./routes/DepartmentRoutes');

app.use(cors({ origin: '*' }));
// app.use(cors({
//     origin: ['https://example.com', 'https://anotherdomain.com'],
//   }));
app.use(express.json());

app.use('/api/roles', roleRoutes);
app.use('/api/users', userRoutes);
app.use('/api/department', departmentRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
