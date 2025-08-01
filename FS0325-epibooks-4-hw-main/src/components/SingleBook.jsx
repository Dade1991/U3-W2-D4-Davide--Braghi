import { Card } from "react-bootstrap"

const SingleBook = ({ book, changeSelectedBook, selectedBook }) => {
  return (
    <Card
      data-testid="card"
      onClick={() => changeSelectedBook(book.asin)}
      style={{
        border: selectedBook === book.asin ? "3px solid red" : "none",
      }}
    >
      <Card.Img variant="top" src={book.img} />
      <Card.Body>
        <Card.Title className="redcolor">{book.title}</Card.Title>
      </Card.Body>
    </Card>
  )
}

export default SingleBook
