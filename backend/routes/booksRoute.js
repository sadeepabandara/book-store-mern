import express from 'express';
import {
  createBook,
  getAllBooks,
  getABook,
  updateBook,
  deleteBook,
} from '../controllers/booksController.js';

const router = express.Router();

// Route for save a new book
router.post('/', createBook);

// Route for get all books from database
router.get('/', getAllBooks);

// Route for get a book by id from database
router.get('/:id', getABook);

// Route for update a book from database
router.put('/:id', updateBook);

// Route for delete a book by id from database
router.delete('/:id', deleteBook);

export default router;
