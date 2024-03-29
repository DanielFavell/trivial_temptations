# Trivial Temptations

Trivial Temptations is a site that tempts users to test their knowledge of HTML and CSS. Trivial Temptations will be useful to test your knowledge or to brag to friends!

## Features 

The user is given 10 questions with 4 possible answers.
At the end of the game the user is give a message telling them how well they did.
There is a link to social media sites where performance in the quiz may be shared.

### Features Left to Implement


Ideally there would be a home page with multiple quizzes to choose from. 
There could be some way to automatically share the quiz score on social media, rather than having to type it out manually.
The contrast in some areas of the site could be improved.
Another feature could be to let you know which of the questions was the correct one, after you have answered wrongly.
A feature to go back to the last question could be helpful for the user.
Though the quiz is quite simple, an instruction page with an explanation of intent could be courteous for the user.


## Testing 

The site is responsive and works on all screen sizes.

### Validator Testing 

- HTML
  - No errors were returned when passing through the official W3C validator
- CSS
  - No errors were found when passing through the official (Jigsaw) validator

### Unfixed Bugs


Text is sometimes outside the buttons. 
Buttons sometimes move.

## Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - https://danielfavell.github.io/trivial_temptations/


## Credits 


### Content 

- The code to access a key from its value was taken from https://stackoverflow.com/questions/9907419/how-to-get-a-key-in-a-javascript-object-by-its-value
- Some of the code to access the value of a promise was taken from https://stackoverflow.com/questions/29516390/how-can-i-access-the-value-of-a-promise
- The HTML and CSS question bank (30 in total) is sourced from the W3 Schools at:
https://www.w3schools.com/css/css_quiz.asp
also ChatGPT  (https://chat.openai.com) is used to come up with some more relent questions.
The questions level test the fundemental knowledge of HTML and CSS. After the questions has be sourced , there were used to construct the jason file: html_questions.jason. The jason file is then fetched using java script. For future work we could use an API (could be the W3 schools API) to access their questions bank which has more questions , they are dynamic and cover wider levels of HTML and CSS expertise levels. 

### Media


- The image used for the logo was taken from Looka.com.
- The image used for the favicon was made with https://favicon.io/favicon-generator/


