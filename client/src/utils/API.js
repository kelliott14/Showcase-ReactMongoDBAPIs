import axios from "axios";
// require("dotenv").config()


export default {
    // searchBook: function(inputBook, inputAuthor) {
    //     return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + inputBook + "+inauthor:" + inputAuthor + 
    //             "&key=" + process.env.API_key);
    // },
    getBooks: function() {
        return axios.get("/api/books")
    }
};