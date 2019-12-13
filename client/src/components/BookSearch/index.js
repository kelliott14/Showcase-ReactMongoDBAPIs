import React from "react";
import "./style.css";

function BookSearch() {
    return (
        <div className="jumbotron bookSearch">
        <h3 className="display-6">Book Search</h3>
        <form>
            <div className="form-group">
                <label className="SearchTitle">Search by book title</label>
                <input className="form-control" type="text"></input>
            </div>
            <button type="submit" className="btn btn-success">Search</button>
        </form>
        </div>
    )
}

export default BookSearch;