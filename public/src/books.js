function findAuthorById(authors, id) {
    //use find to compare the author id to the id we input. return that author object. 
let find = authors.find((authorObj)=> authorObj.id === id);
    return find;
}


function findBookById(books, id) {
       //use find to compare the book id to the id we input. return that book object.
  let find = books.find((bookObj)=> bookObj.id === id);
    return find;
}



function partitionBooksByBorrowedStatus(books) {
    //create a new filtered array containing only the books that have been returned
   const checkedOut = books.filter((book) => book.borrows[0].returned);
    //create a new array containing only the books that have not been returned
  const checkedIn = books.filter((book) => !book.borrows[0].returned);
//return both new arrays within one larger array
return [checkedIn, checkedOut];
 

}

               


function getBorrowersForBook(book, accounts) {
    //pull the borrows object out of the book
  const { borrows } = book;
    //map over borrows to find the id and the returned status
  const borrowers = borrows.map(({ id, returned })=> {
      //witin that loop, go over accounts to find the account id that matches the one from borrows
    const account = accounts.find(account => account.id === id);
   //return that account data with the returned data from borrows
      return {
      ...account,
      returned,
    };
  });
    //limit the list to 10 items
  return borrowers.slice(0, 10);
}



module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
