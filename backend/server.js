const express = require('express');
const port = 5000;
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');

connectDB();
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(errorHandler);
app.use('/api/todos', require('C:/Users/mahab/OneDrive/Desktop/ADPS_ICE_Task_2/backend/routes/todoRoutes.js'))
//app.use('/api/goals', require('./routes/goalRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

