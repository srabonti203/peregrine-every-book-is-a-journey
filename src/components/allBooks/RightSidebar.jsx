import FeaturedBookCard from "../homepage/FeaturedBookCard";

const RightSidebar = ({ books, activeId }) => {
  const filteredBooks = books.filter((book) => book.category_id == activeId);
  // console.log(filteredBooks);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-3 mt-5">
      {filteredBooks.map((book) => (
        <FeaturedBookCard key={book.id} book={book}></FeaturedBookCard>
      ))}
    </div>
  );
};

export default RightSidebar;
