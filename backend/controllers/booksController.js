import Book from '../models/booksModel.js';

// Route for save a new book
export const createBook = async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({
        message: 'Send all required fields: title, author, publishYear',
      });
    }

    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };

    const book = await Book.create(newBook);
    return res.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

// Route for get all books from database
export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find({});
    return res.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

// Route for get a book by id from database
export const getABook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    return res.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

// Route for update a book from database
export const updateBook = async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({
        message: 'Send all required fields: title, author, publishYear',
      });
    }

    const result = await Book.findByIdAndUpdate(req.params.id, req.body);
    if (!result) {
      return res.status(404).send({ message: 'Book not found' });
    }
    return res.status(200).send({ message: 'Book updated successfully' });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

// Route for delete a book by id from database
export const deleteBook = async (req, res) => {
  try {
    const result = await Book.findByIdAndDelete(req.params.id);
    if (!result) {
      return res.status(404).send({ message: 'Book not found' });
    }
    return res.status(200).send({ message: 'Book deleted successfully' });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};