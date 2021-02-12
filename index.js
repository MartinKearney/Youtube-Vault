const express = require('express');

const connectDB = require('./config/db');

const app = express();

connectDB();

// app.use(express.json());

// Define API endpoints or import handler files
// app.use('/api/auth', require('./routes/auth'));

app.get('/', (req, res) => res.json({ msg: 'Hello!' }));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
