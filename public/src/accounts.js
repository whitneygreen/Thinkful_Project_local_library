  function findAccountById(accounts, id) {
    let find = accounts.find((account)=> account.id === id);
    return find;
  }
  

function sortAccountsByLastName(accounts) {
 return accounts.sort((lastA, lastB) => 
 (lastA.name.last.toLowerCase() > lastB.name.last.toLowerCase()
  ? 1 : -1));
  }


 function getTotalNumberOfBorrows(account, books) {

  let count = 0;
  books.forEach(book => book.borrows.forEach(borrow => borrow.id === account.id && count++));
  return count;
}



  function getBooksPossessedByAccount(account, books, authors) {
    let checkedOut = [];
    books.forEach(book=>{
      if (book.borrows.find(item=>item.id === account.id && !item.returned)) {
        checkedOut.push(book);
      }
    })
 
    checkedOut.forEach(book=>{
      let findAuthor = authors.find(author => author.id === book.authorId);
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
