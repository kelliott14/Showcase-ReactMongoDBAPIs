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
        synopsis: "",
        url: ""
    };

    componentDidMount = () => {
        this.setState({
            books: [],
            title: "",
            author: {},
            synopsis: "",
            url: ""
        });
    }

    handleInputChange = event => {
        this.setState({ title: event.target.value })
    }
    
    searchResults = event => {
        event.preventDefault();
        API.searchBook(this.state.title)
        .then(res =>
                this.setState({ books: res.data.items, title: "" }
                )
                // console.log(res.data.items)
                )
            .catch(err => console.log(err));
    }

    saveBook = () => {
        console.log(this.state.title)
        API.saveBook({
            title: this.state.title,
            author: this.state.author,
            synopsis: this.state.synopsis,
            url: this.state.url
        })
        .then(res => window.location.replace("/saved"))
        .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <Jumbo />
                <BookSearch handleFormSubmit={this.searchResults} handleInputChange={this.handleInputChange}/>
                <List>
                    {this.state.books.map(book => (
                        <ListItem key={book.id}>
                                <h4>{book.volumeInfo.title} 
                                    <a className="btn btn-success deleteBtn" role="button" href={book.volumeInfo.infoLink} target="_blank">View Book</a>
                                    <button className="btn btn-success deleteBtn" role="button" onClick={() => 
                                           { this.setState({ 
                                                title: book.volumeInfo.title,
                                                author: book.volumeInfo.authors,
                                                synopsis: book.volumeInfo.description,
                                                url: book.volumeInfo.infoLink    
                                            }, 
                                              () => this.saveBook()
                                            
                                            // console.log(book.volumeInfo.title),
                                            // console.log(this.state.title)
                                            );
                                        }
                                    }
                                            >Save to your list</button>
                                    </h4>
                                <h5>by {book.volumeInfo.authors.map(author => (
                                    author + " "
                                ))}</h5>
                                <p>{book.volumeInfo.description}</p>
                        </ListItem>
                    ))}
                </List>
            </div>
  );
}

}
export default Book;