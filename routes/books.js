const express = require('express');
const Book = require('../models/book');

const router = express.Router();

// GET all books
router.get('/', async (req, res) => {
    const books = await Book.find();
    res.json(books);
});

// POST a new book
router.post('/', async (req, res) => {
    const newBook = new Book(req.body);
    const savedBook = await newBook.save();
    res.json(savedBook);
});

// PUT update a book
router.put('/:id', async (req, res) => {
    const updatedBook = await Book.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    res.json(updatedBook);
});

module.exports = router;