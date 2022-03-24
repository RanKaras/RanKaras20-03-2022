Feature: On load pop-up

Scenario:Close the popup
Given The user visits the website
Then The user wait for the popup to appear
Then the use click on X button



Scenario:send valid form
Given The user visits the website
When The user wait for the popup to appear
Then The user set his first name 'test'
Then the user set his phone number '0535962853'
Then the user set his email address 'test@example.com'
Then the user click on send
Then The User redirect to the thank you page


Scenario:send invalid form, without credentials
Given The user visits the website
When The user wait for the popup to appear
Then the user click on send
Then return error message below the text field 'שדה שם הוא שדה חובה'


Scenario:send invalid form, without name
Given The user visits the website
When The user wait for the popup to appear
Then the user set his phone number '0535962853'
Then the user set his email address 'test@example.com'
Then the user click on send
Then return error message below the text field 'שדה שם הוא שדה חובה'

Scenario:send invalid form, without phone
Given The user visits the website
When The user wait for the popup to appear
 Then The user set his first name 'test'
Then the user set his email address 'test@example.com'
Then the user click on send
Then return error message below the text field 'שדה טלפון הוא שדה חובה'

Scenario:send invalid form, without email
Given The user visits the website
When The user wait for the popup to appear
 Then The user set his first name 'test'
 Then the user set his phone number '0535962853'
Then the user click on send
Then return error message below the text field 'שדה אימייל הוא שדה חובה'