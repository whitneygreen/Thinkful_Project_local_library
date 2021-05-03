function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let count = 0
 books.forEach(book => book.borrows.forEach(borrow => borrow.returned === false && count++))
  return count;
 
}





function getMostCommonGenres(books) {

const bookGenres = books.map((book) => book.genre);
  
  const commonGenres = [];

   bookGenres.map((genre) => {
 
    const findGenre = commonGenres.findIndex((item) => item.name === genre);
 
    if (findGenre >= 0) {
      commonGenres[findGenre].count ++;
    } else {
      commonGenres.push({ name: genre, count: 1 });
    }
    
  });

const finalReturn = sortAndSlice(commonGenres)
  return finalReturn;

}




function getMostPopularBooks(books) {  
    let commonTitles = [];

  const borrows = books.reduce((acc, book) => {
    commonTitles.push({ name: book.title, count: book.borrows.length });
  }, []);
  

const finalReturn = sortAndSlice(commonTitles)
  return finalReturn;

}


function getMostPopularAuthors(books, authors) {

  const commonAuthors = [];

  for (let author of authors) {
    const authorName = `${author.name.first} ${author.name.last}`;
    let count = 0;
    for (let book of books) {
      if (author.id === book.authorId) {
        count += book.borrows.length;
      }
    }
    const authorInfo = { name: authorName, count: count };
    commonAuthors.push(authorInfo);
  }

const finalReturn = sortAndSlice(commonAuthors)
  return finalReturn;
}


// helper function

function sortAndSlice (variable){
 let finalResult = variable.sort((authorA, authorB) => authorA.count < authorB.count ? 1 : -1 );
  
  return finalResult.slice(0, 5);
}


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
