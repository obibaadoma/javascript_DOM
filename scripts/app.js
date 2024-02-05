const search = document.getElementById('search-books');
const bookList = document.getElementById('book-list');

console.log(search, bookList);

var titles = document.getElementsByClassName('title');

titles.forEach(function(item){
console.log(item);
})