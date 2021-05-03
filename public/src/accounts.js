  function findAccountById(accounts, id) {
    //use find to search through the accounts array and match it to the ID we are looking for
    let find = accounts.find((account)=> account.id === id);
    //return that match
    return find;
  }
  

function sortAccountsByLastName(accounts) {
  //sorth through the accounts array. to confirm you get the right sort turn all items to lowercase
 return accounts.sort((lastA, lastB) => 
 (lastA.name.last.toLowerCase() > lastB.name.last.toLowerCase()
  ? 1 : -1));
  }


 function getTotalNumberOfBorrows(account, books) {
//establish count as 0
  let count = 0;
   // loop through books and then borrows. if the borrow ID matches the account ID, count that item
  books.forEach(book => book.borrows.forEach(borrow => borrow.id === account.id && count++));
  //return the number of times the borrowID matches the accountID to get how many times an account has borrowed
   return count;
}



  function getBooksPossessedByAccount(account, books, authors) {
   //create the empty checkedOut array
    let checkedOut = [];
    //loop through books array and then also through borrows array within that loop
    books.forEach(book=>{
      // if statement, if the id in book.borrows matches the id in the account object and that item has not been returned
      if (book.borrows.find(item=>item.id === account.id && !item.returned)) {
        //push that into the checkedOut array
        checkedOut.push(book);
      }
    })
 //loop through the new checkedOut array
    checkedOut.forEach(book=>{
      //find the id in the authors array that matches the authorID in the books array
      let findAuthor = authors.find(author => author.id === book.authorId);
      //add the author data to the book array that got pushed into checkedOut
      book['author'] = findAuthor;
    })
    
    return checkedOut;
  }
    


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
