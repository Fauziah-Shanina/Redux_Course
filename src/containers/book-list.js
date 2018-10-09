import React, { Component } from "react";
import { connect } from "react-redux";
import {selectBook} from "../actions/index";
import {bindActionCreators} from "redux";


class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return <li key={book.title}
      onClick= {()=>this.props.selectBook(book)} className="list-group-item">
      {book.title}
      </li>
    });
  }
  render() {
    return <ul className="list-group col-sm-4">{this.renderList()}</ul>;
  }
}

function mapStateToProps(state) {
  return {
    books: state.books
  };
}

//Anything returned from this function will be assigned to container props
function mapDispatchToProps(dispatch)
{
  //whenever selectedBook is called, the result will be passed to all reducers.
  return bindActionCreators({selectBook : selectBook}, dispatch);
}

//Here we use connect function for mapping between a function and  a component and produce a container as result.
//We need this function for promote the component into a container 
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
