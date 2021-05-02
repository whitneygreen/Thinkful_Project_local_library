function findAuthorById(authors, id) {
let find = authors.find((authorObj)=> authorObj.id === id);
    return find;
}


function findBookById(books, id) {
  let find = books.find((bookObj)=> bookObj.id === id);
    return find;
}



function partitionBooksByBorrowedStatus(books) {
   const checkedOut = books.filter((book) => book.borrows[0].returned);
  const checkedIn = books.filter((book) => !book.borrows[0].returned);

return [checkedIn, checkedOut];
 

}

               


function getBorrowersForBook(book, accounts) {
  const { borrows } = book;
  const borrowers = borrows.map(({ id, returned })=> {
    const account = accounts.find(account => account.id === id);
    return {
      ...account,
      returned,
    };
  });
  return borrowers.slice(0, 10);
}



module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
