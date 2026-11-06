Mateo Berry
Student ID: 0606
Target Grade: Grade 4 (This is specifically a reflection on Grade 3s work which is a subrequirement of Grade 4.)
Repository: https://github.com/Zovixii/portfolio-website
Features: Form validation, form rejection, dynamic color adjustment.

Screenshots:
For the DEFAULT form, please see .Images/FORM NORMAL.png
For the ERROR form, please see .Images/FORM ERROR.png
For the successful form, please seen .Images/FORM SUCCESS.png

Code Explanation:

To validate code, the easiest solution is to grab the value from a specific input box and use an if/else statement to compare it to your desired input.
For name, we had to make it so that the entered name was at minimum 2 characters, so using string.length() was perfect because as long as the string is greater than 2 then subsmission is allowed.
For email, I remembered about REGEX which defines certain rules on how text can match. So I looked up the default regex for an email and used the .test() built in function to compare the inputted email.
For topic, I had to look up that if a selection was disabled, submitting the form would return a null value for that particular object, so if we tested the file and got null in return, that means the user never selected off the placeholder object.
For the message, the same requirement of a minimum character count was made, same as the name I just compared the text length to be more than 15.
Finally, for URL we had to use the browsers URL based validation which was from the checkValidity function, however I noticed that by making the input text box type = URL, my browser automatically applied those rules regardless. I also made it so that if the user put in nothing then no operation would be performed and submission would still be allowed.

For the counter, I simply added an event listener for every input. Whenever an input was detected, the event listener would read the length of the message and updated a live counter beneath the text box to show the user how many characters they typed.

To reset the form, I used the built in .reset() function and I also ran the updatecounter command part of the counter to ensure it returned back to saying the correct number of characters in the box (which at restart should be 0).


Problem:
My biggest issue in implementation by far was the email validation. At first, I tried to check whether both @ and . existed within the text input, which works for a traditional email but doesn't work if someone inputs "..g..@p:"
Instead, I remembered the REGEX is a form of validation you can use on text, which matches specific rulesets at specific places within the text. I looked up the classic email regex validator online, and got one from MDN which validates emails well.
Now, instead of checking whether @ and . exist in a string, REGEX checks that text exists before and after @, and . exists after @ and between two more pieces of text.

Reflection:

1. Out of any interaction, I'm most confident explaining event listeners and classlist modifiers. This is because they make sense in my brain and are relatively simple compared to some of the more complicated aspects of Javascript.
2. In one particular instance, my original counter used an event listener as the original function for updating the counter. But I reealized while developing the form automatic reset that I couldn't force an event update so easily. So instead I made the event listener trigger a dedicated function which I could trigger separately as well.
3. If I had one more development session, I would mostly work on the visual aspect and see if I can improve color balance, transition, and with extra time I would add any cool animations I can think of. I think my JS portion is full and complete to the requirements, although in a real development setting I would want to add true server submission.



HELLO< MY NAME IS JOHN


# GRADE 4 FULL REQUIREMENTS MET
## Target grade: 4

## Description:
This project builds upon my original Lab 1 project. It adds and renovates several features, as well as properly implementing javascript.

## Implemented Features

## Grade 3:
* Form containing all the required fields: Name, Email, Topic, Message, and (optional) website
* Input validation and responsive error handling
* Live character counter
* Full and partial form reset functionality
* Personalized success message that self-destructs after a specified time.

## Grade 4:
* Dynamically generates skill cards use a JS array
* Categories for each skill, which include a fancy badge
* Categorical filtering
* Specific sorting
* Visual Proficiency Indicator
* Counter which displays the current, and total number of skills dynamically.


## Overall
* Reduced motion preferences are accommodated
* ARIA support is implemented
* Mobile and Desktop resolutions are supported for the Contact and Skills pages

# How to run?
1. Clone this repository
2. Open index.html in your favorite web browser (I prefer firefox)
3. Navigate to your favorite page, and enjoy the website! (There isn't a ton to it regardless...)
