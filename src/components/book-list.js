import React ,{Component} from 'react';


class BookList  extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBooks: []
    }
  }

  renderList () {
 const booksList = this.props.books.Map (book => reurn { <li key={book.title} className="list-group-item"  > </li>})
  }
  render() {
    return (
      <ul className= "list-group col-sm-4">
         {this.renderList()}
    </ul>
    )
  }
}

export default BookList;
