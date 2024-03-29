const express=require('express');
const router=express.Router();
const book=require("../model/book");
const bookscontroller=require("../controller/books-cont");

router.get("/",bookscontroller.getallbooks);
router.post("/",bookscontroller.addbook);
router.get("/:id",bookscontroller.getbyid);
router.put("/:id",bookscontroller.updatebook);
router.delete("/:id",bookscontroller.deletebook);

module.exports=router;