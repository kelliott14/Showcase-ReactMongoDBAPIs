import axios from "axios";
require("dotenv").config()


export default {
    searchBook: function(inputBook) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + inputBook + 
                "&key=AIzaSyAzZgRkQPCC7s-2LJhwMEiV14lyWBQtxYs");
    },
    getBooks: function() {
        return axios.get("/api/books")
    },

    deleteBook: function(id) {
        return axios.delete("/api/books/" + id)
    },

    saveBook: function(bookData) {
        return axios.post("/api/books", bookData)
    }
};