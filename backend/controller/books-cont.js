const Book = require("../model/book"); // Use uppercase 'B' for the model

const getallbooks = async (req, res, next) => {
    let books;
    try {
        books = await Book.find();
    } catch (err) {
        console.log(err);
    }
    if (!books) {
        return res.status(404).json({ message: "No product found" });
    }
    return res.status(200).json({ books });
};

const getbyid = async (req, res, next) => {
    const id = req.params.id;
    let book;
    try {
        book = await Book.findById(id);
    } catch (err) {
        console.log(err);
    }
    if (!book) {
        return res.status(404).json({ message: "No book found" });
    }
    return res.status(200).json({ book });
};

const addbook = async (req, res, next) => {
    const { name, author, description, blink, available, image } = req.body;
    let newBook; // Use a different variable name
    try {
        newBook = new Book({
            name,
            author,
            description,
            blink,
            available,
            image,
        });
        await newBook.save();
    } catch (err) {
        console.log(err);
    }
    if (!newBook) {
        return res.status(500).json({ message: "Unable to add" });
    }
    return res.status(201).json({ book: newBook });
};

const updatebook = async (req, res, next) => {
    const id = req.params.id;
    const { name, author, description,blink, available, image } = req.body;
    let updatedBook;
    try {
        updatedBook = await Book.findByIdAndUpdate(
            id,
            {
                name,
                author,
                description,
                blink,
                available,
                image,
            },
            { new: true } // Return the updated document
        );
    } catch (err) {
        console.log(err);
    }
    if (!updatedBook) {
        return res.status(500).json({ message: "Unable to update by this id" });
    }
    return res.status(200).json({ book: updatedBook });
};

const deletebook = async (req, res, next) => {
    const id = req.params.id;
    let deletedBook;
    try {
        deletedBook = await Book.findByIdAndDelete(id);
    } catch (err) {
        console.log(err);
    }
    if (!deletedBook) {
        return res.status(404).json({ message: "Unable to delete by this id" });
    }
    return res.status(200).json({ message: "Product successfully deleted" });
};

exports.getbyid = getbyid;
exports.getallbooks = getallbooks;
exports.addbook = addbook;
exports.updatebook = updatebook;
exports.deletebook = deletebook;
