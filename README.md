This is my first test task.
The project is done using React.

The goal was to create tweet cards and add interactivity at the click of a button.
The general appearance of the card has two states - Follow and Following

Technical features
When you click on the Follow button, the text changes to Following. The color of the button also changes. And your following is added to the number of followers.
When the page is updated, the final result of the user's actions is recorded. That is, if you click on the button and refresh the page, the button still remains in the Following state with the appropriate color, and the number of followers does NOT decrease to the initial value.
When you click the button again, its text and color change to their original state. The number of followers also changes. It decreases by 1.
In the code, the number 100,500 is written with one value (100500). In the UI, it is displayed with a comma (100,500).
For the project I created my personal backend for development using the mockapi.io service.

User

User in Mockapi has following fields: id, user, tweets, followers, avatar.
Pagination is realised on the project. One pagination page displays 3 tweets, the rest are loaded when you click Load More button.

Routing using React Router.

The application has the following routes. If the user has entered by a non-existent route, he is redirected to the home page. '/' – Home component, home page. Styling and design at your discretion '/tweets' - Tweets page, page displays tweets. The tweets page has Go Back button that leads to the main page.

Filtering. It is a Dropdown with 3 options: show all, follow, followings.
