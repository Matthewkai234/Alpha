// index.js

import express from 'express';
import initApp from './src/modules/index.router.js';
import dotenv from 'dotenv'; // Import dotenv directly
dotenv.config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

initApp(app, express);
