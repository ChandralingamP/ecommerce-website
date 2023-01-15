
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
        image : harryPotterImg,
		Name : "Electrical Engineering ",
		Publication: "Pearson",
		Author : "Allan R. Hambley",
		Price : "1500"
	},
	{
		id : "2",
        image : harryPotterImg,
		Name : "Design of Machine Elements",
		Publication: "Lakshmi",
		Author : "Vijayaragavan",
		Price : "500"
	},
	{
		id : "3",
		Name : "Engineering Mathematics",
        image : harryPotterImg,
		Publication: "Mc Graw Hill",
		Author : "Veerarajan",
		Price : "700"
	},
	{
		id : "4",
        image : harryPotterImg,
		Name : "Materials Science",
		Publication: "Mc Graw Hill",
		Author : "Rajendran",
		Price : "550"
	},
	{
		id : "5",
		Name : "Information Systems Security",
		Publication: "Wiley",
        image : harryPotterImg,
		Author : "Nina Godbole",
		Price : "1200"
	},
	{
		id : "6",
        image : harryPotterImg,
		Name : "Principles of Physics",
		Publication: "Wiley",
		Author : "Robert Resnick",
		Price : "1150"
	},
	{
		id : "7",
        image : harryPotterImg,
		Name : "Engineering Chemistry",
		Publication: "Dhanpat Rai",
		Author : "Jain",
		Price : "800"
	},
	{
		id : "8",
        image : harryPotterImg,
		Name : "Basic and Applied Soil Mechanics",
		Publication: "New Age",
		Author : "A S R Rao",
		Price : "650"
	},
	{
		id : "9",
        image : harryPotterImg,
		Name : "Advanced Accountancy",
		Publication: "Margham",
		Author : "T S Reddy & Murthy",
		Price : "500"
	},
	{
		id : "10",
        image : harryPotterImg,
		Name : "Cost Accounting",
		Publication: "Margham",
		Author : "T S Reddy & Murthy",
		Price : "450"
	},
	{
		id : "11",
        image : harryPotterImg,
		Name : "Corporate Accounting",
		Publication: "Margham",
		Author : "T S Reddy & Murthy",
		Price : "600"
	},
	{
		id : "12",
        image : harryPotterImg,
		Name : "Financial Accounting",
		Publication: "Margham",
		Author : "T S Reddy & Murthy",
		Price : "700"
	},	
]

module.exports = recentBooks;