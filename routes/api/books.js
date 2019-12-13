const router = require("express").Router();
const booksController = require("../../controllers/booksController");

router.route("/")
    .post(booksController.create);

router.route("/:id")
    .delete(booksController.remove);

router.route("/myBooks")
    .get(booksController.findAll);


module.exports = router;