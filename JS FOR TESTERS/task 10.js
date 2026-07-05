const books = {
    title:"JavaScript 101",
    description:"JavaScript Fundamentals",
    numberOfPages: 100,
    author:"Judith Dim",
    reading:true,
    toggleReadingStatus: function(){
   if (this.reading === true) {
     this.reading = false;
   } else {
     this.reading = true;
   }
   console.log(this.reading);
 }
};