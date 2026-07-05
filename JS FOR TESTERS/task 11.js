const books = [
 {
   title:"JavaScript 101",
    description:"JavaScript Fundamentals",
    numberOfPages: 100,
    author:"Judith Dim",
    reading:true
 },
 {
   title: "Eze goes to school",
   description: "Story of a teenage boy.",
   numberOfPages: 328,
   authour: "onuorah & Micheal",
   reading: false
 },
 {
   title: "Things Fall Apart",
   description: "The disruption of netive culture by religion.",
   numberOfPages: 320,
   authour: "Chinue Achebe",
   reading: true
 },
];

for (let i = 0; i < books.length; i++) {
 if (books[i].reading === true) {
   console.log(books[i]);
 }
}