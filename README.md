# Brandon Sanderson Books


## Project Philosophy

This project I really wanted to focus on Client-Side Routing and create a project that could easily move from one page to another. When deciding what to do I was suggested by my Advisor to create my project based on one of my hobbies. 

My favorite past time is to read so my first thoughts were to do it on a ton of books and to try and shift things that way. I didn't want to make my json-server data too complicated though. So I narrowed it down to focus on my favorite author and the books that he has published. 

## Details

### React Hierarchy Diagram

```txt
├── public
└── src
     ├── Components
        ├── App.js
            ├── Navbar.js
            ├── Author.js
            ├── BookPage.js
                ├── Search.js
                ├── BooksContainer.js
                    ├── Books.js
                        ├── BookDetails.js
            ├── InputForm.js
└── App.css
├── db.json
├── README.md
```

This website is set up into three pages. The Author, Books, and add a book are the three pages and they are all children components of the App component. This program is set up using a db.json and it uses a useeffect to allow fetch get request to upload the data directly when the page loads. It then pases down this data through the BookPage.js component all the way down to the BookDetails. Each component in BookPage is able to map through the data, pull out specific info and apply it to the page. It does this by using state, allowing it to update the page directly without having to refresh.

The InputForm component takes in the same data but instead of pulling the data out it has a fetch post request set up. It has the capability of taking in a form of data and posting this into the db.json. The form is able to input a new book by taking in the title, picture, date published, and book details. It then uses state to upload the new book directly. 

The Navbar component is direct and organize the Client-side routing of this project. It holds the navlinks that allow us to go link the components to seperate pages. Putting the switch and route components over the other components allows it to search through the unique url to find which component page to show. 


## Features

This website has three pages. The first page Author gives the name, picture, and information about the author who is featured on this site. The second page lists a whole bunch of books that the author has written. It gives the title, year, picture, and book details of each book. It is able to delete a book from a sequence and can take you to new url directory when looking at the details of each book. The final page shows and input form. This allows you to add a new book to the list of books on page two. Once the form is submitted it will take you back to the list of books. 

## How to Use

You are able to change pages by clicking on the navlinks at the top of the page. When looking at the book list you can delete a book by clicking on the little garbage icon by the picture. It also can direct you to a unique url for that book and list the books details when you select the book details button. The input form on the last page is asking for info on a new book. When you type in the new books title, photo url, publication date, and some book details it will allow you to submit this new book. Once you submit a book it will take you back to the list of books. Your new book will be at the top of the page. 

## Installation Instructions

In order for this application to work you need to run the db.json file by putting in the terminal watch db.json. You will also need to open a new terminal to install npm and start npm. Starting npm will open up the page for you in a new tab. 

## Contributions
 
 If you would like to contribute to this project please email cosettetshibanda@gmail.com

## Blog
https://medium.com/@cosettetshibanda/client-side-routing-route-switch-and-navlink-components-f1fdfe88ebce
