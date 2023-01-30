var Module= require("module");
var fs= require("fs");

Module._extensions[".png"] = function (module, fn) {
    var base64 = fs.readFileSync(fn).toString("base64");  
    module._compile('module.exports = "data:image/jpg;base64,' + base64 + '"',fn);
};
const harryPotterImg = require('../../Front-End/src/assets/book.png');
const recentBooks = [
	{
		id : "1",
        bookImg : harryPotterImg,
		bookName : "Electrical Engineering ",
		Publication: "Pearson",
		author : "Allan R. Hambley",
		price : "1500"
	},
	{
		id : "2",
        bookImg : harryPotterImg,
		bookName : "Design of Machine Elements",
		Publication: "Lakshmi",
		author : "Vijayaragavan",
		price : "500"
	},
	{
		id : "3",
		bookName : "Engineering Mathematics",
        bookImg : harryPotterImg,
		Publication: "Mc Graw Hill",
		author : "Veerarajan",
		price : "700"
	},
	{
		id : "4",
        bookImg : harryPotterImg,
		bookName : "Materials Science",
		Publication: "Mc Graw Hill",
		author : "Rajendran",
		price : "550"
	},
	{
		id : "5",
		bookName : "Information Systems Security",
		Publication: "Wiley",
        bookImg : harryPotterImg,
		author : "Nina Godbole",
		price : "1200"
	},
	{
		id : "6",
        bookImg : harryPotterImg,
		bookName : "Principles of Physics",
		Publication: "Wiley",
		author : "Robert Resnick",
		price : "1150"
	},
	{
		id : "7",
        bookImg : harryPotterImg,
		bookName : "Engineering Chemistry",
		Publication: "Dhanpat Rai",
		author : "Jain",
		price : "800"
	},
	{
		id : "9",
        bookImg : harryPotterImg,
		bookName : "Advanced Accountancy",
		Publication: "Margham",
		author : "T S Reddy & Murthy",
		price : "500"
	},
	{
		id : "10",
        bookImg : harryPotterImg,
		bookName : "Cost Accounting",
		Publication: "Margham",
		author : "T S Reddy & Murthy",
		price : "450"
	},
	{
		id : "11",
        bookImg : harryPotterImg,
		bookName : "Corporate Accounting",
		Publication: "Margham",
		author : "T S Reddy & Murthy",
		price : "600"
	},
	{
		id : "12",
        bookImg : harryPotterImg,
		bookName : "Financial Accounting",
		Publication: "Margham",
		author : "T S Reddy & Murthy",
		price : "700"
	},	
	{
		id : "9",
        bookImg : harryPotterImg,
		bookName : "Advanced Accountancy",
		Publication: "Margham",
		author : "T S Reddy & Murthy",
		price : "500"
	},
	{
		id : "10",
        bookImg : harryPotterImg,
		bookName : "Cost Accounting",
		Publication: "Margham",
		author : "T S Reddy & Murthy",
		price : "450"
	},
	{
		id : "11",
        bookImg : harryPotterImg,
		bookName : "Corporate Accounting",
		Publication: "Margham",
		author : "T S Reddy & Murthy",
		price : "600"
	},
	{
		id : "12",
        bookImg : harryPotterImg,
		bookName : "Financial Accounting",
		Publication: "Margham",
		author : "T S Reddy & Murthy",
		price : "700"
	},	
]

module.exports = recentBooks;