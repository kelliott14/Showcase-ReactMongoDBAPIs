import React, { Component } from "react";
import Jumbo from "../components/Jumbotron";
import BookSearch from "../components/BookSearch";
import { List, ListItem } from "../components/Results";
import API from "../utils/API";

class Book extends Component {
    state = {
        books: [],
        title: "",
        author: "",
        synopsis: ""
    };

    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        API.getBooks()
        .then(res =>
            console.log(res.data)
                // this.setState({ books: res.data, title: "", author: "", synopsis: "" }
                // )
                )
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <Jumbo />
                <BookSearch />
                <List>
                    {this.state.books.map(book => (
                        <ListItem key={book._id}>
                                <strong>
                                    {book.title} by {book.author}
                                </strong>
                        </ListItem>
                    ))}
                </List>
            </div>
  );
}

}
export default Book;