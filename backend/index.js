import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express();

// Middleware for parsing JSON body
app.use(express.json());

// Middleware for handling CORS issues
// Option 1: Allow all origins with deafult of CORS(*)
app.use(cors());
// Option 2: Allow custom origins
// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
//   })
// );

app.get('/', (req, res) => {
  console.log(req);
  return res.status(200).send('Welcome to Book Store');
});

app.use('/books', booksRoute);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log('App Connected to MongoDB');
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
