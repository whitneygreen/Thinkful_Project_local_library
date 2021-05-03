function getTotalBooksCount(books) {
  //count total books by returning the length of the array
  return books.length;
}

function getTotalAccountsCount(accounts) {
  //count total accounts by returning the length of the array
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  //establish count at 0
  let count = 0
  //loop through books and then borrows witihn that loop. check to see if the book has not been returned and count
 books.forEach(book => book.borrows.forEach(borrow => borrow.returned === false && count++))
  //return total books that have not been returned
  return count;
 
}





function getMostCommonGenres(books) {
  //establish new array that has only the genre data from the books array

const bookGenres = books.map((book) => book.genre);
  //create new empty array
  const commonGenres = [];
//map through the new bookGenres array 
   bookGenres.map((genre) => {
 //check to see if the genre has already been found
    const findGenre = commonGenres.findIndex((item) => item.name === genre);
 //if so, add that to the commonGenres array and increment the counter
    if (findGenre >= 0) {
      commonGenres[findGenre].count ++;
      //if not, push it into the array and make the count = 1
    } else {
      commonGenres.push({ name: genre, count: 1 });
    }
    
  });

  //referencing helper function to sort and limit to 5
const finalReturn = sortAndSlice(commonGenres)
  return finalReturn;

}




function getMostPopularBooks(books) {  
  // create new empty array 
    let commonTitles = [];
//use the reduce function to pull our just the book title and book.borrows
  const borrows = books.reduce((acc, book) => {
    //push that data into the commontitles array and count the number of borrows using .length
    commonTitles.push({ name: book.title, count: book.borrows.length });
  }, []);
  
//referencing helper function to sort and limit to 5
const finalReturn = sortAndSlice(commonTitles)
  return finalReturn;

}


function getMostPopularAuthors(books, authors) {
//establish empty array 
  const commonAuthors = [];
//using for of to look into the authors array
  for (let author of authors) {
    //establishing authorName as a new variable for use later in the function 
    const authorName = `${author.name.first} ${author.name.last}`;
    //establish count as 0
    let count = 0;
    //using for of to look into the books array
    for (let book of books) {
      //match authorID from authors and book.authorID from books
      if (author.id === book.authorId) {
        //if those match. count = 0 + book.borrows.length 
        count += book.borrows.length;
      }
    }
    //full the author info from the authors array using the variable authorName created earlier and use the count data from the book.borrows.length 
    const authorInfo = { name: authorName, count: count };
    // push that data into the commonAuthors array 
    commonAuthors.push(authorInfo);
  }
//referencing helper function 
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
