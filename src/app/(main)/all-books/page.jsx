import { redirect } from "next/navigation";

const defaultCategory = "01";
const AllBooks = async () => {
  return redirect(`/all-books/${defaultCategory}`);
};

export default AllBooks;
