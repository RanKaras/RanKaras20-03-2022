# RanKaras20-03-2022
Abra Automation test

## The test cases are inside the code 

Footer:
Scenario: Fill in the footer form
         The user visits the website
         The user validate the footer
         The user types his first name 'test'
         The user types his email address 'test@example.com'
         The user types his phone number '0535962853'
         The user click on send
         The User redirect to the thank you page
        
Scenario: Fill in the footer form without credentials
         The user visits the website
         The user validate the footer
         The user click on send
         Return error message below the text fields 'שדה שם הוא שדה חובה'
        
Scenario: Fill in the footer form without name
         The user visits the website
         The user validate the footer
         The user types his email address 'test@example.com'
         The user types his phone number '0535962853'
         The user click on send
         Return error message below the text fields 'שדה שם הוא שדה חובה'
        
 Scenario: Fill in the footer form without email address
         The user visits the website
         The user validate the footer
         The user types his first name 'test'
         The user types his phone number '0535962853'
         The user click on send
         Return error message below the text fields 'שדה אימייל הוא שדה חובה'
        
  
 Scenario: Fill in the footer form without phone number
         The user visits the website
         The user validate the footer
         The user types his first name 'test'
         The user types his email address 'test@example.com'
         The user click on send
         Return error message below the text fields 'שדה טלפון הוא שדה חובה'
        
 Scenario: Validate GUI
 
 
MainPage:

 Scenario: valid contact us form
         The user visits the website
         The user enter his name 'test'
         The user enter his company name 'test'
         The user enter his email address 'test@example.com'
         The user enter his phone number '0535962853'
         The user click on contact us button
         The User redirect to the thank you page
        
 Scenario:Footer disappear when scrolling to the bottom of the page
         The user visits the website
         The user validate the footer
         The user enter his name 'test'
         The user checks that the popup is not visible  
        
 Scenario: Validate Gui 
 
 Scenario: Check that the carousel is working propely 
        
        
 On Load Popup:
 
 Scenario:Close the popup
             The user visits the website
             The user wait for the popup to appear
             The use click on X button


Scenario:send valid form
             The user visits the website
             The user wait for the popup to appear
             The user set his first name 'test'
             The user set his phone number '0535962853'
             The user set his email address 'test@example.com'
             The user click on send
             The User redirect to the thank you page
            

 Scenario:send invalid form, without credentials
             The user visits the website
             The user wait for the popup to appear
             The user click on send
             Return error message below the text field 'שדה שם הוא שדה חובה'


Scenario:send invalid form, without name
             The user visits the website
             The user wait for the popup to appear
             The user set his phone number '0535962853'
             The user set his email address 'test@example.com'
             The user click on send
             Return error message below the text field 'שדה שם הוא שדה חובה'

Scenario:send invalid form, without phone
             The user visits the website
             The user wait for the popup to appear
             The user set his first name 'test'
             The user set his email address 'test@example.com'
             The user click on send
             Return error message below the text field 'שדה טלפון הוא שדה חובה'

Scenario:send invalid form, without email
             The user visits the website
             The user wait for the popup to appear
             The user set his first name 'test'
             The user set his phone number '0535962853'
             The user click on send
             Return error message below the text field 'שדה אימייל הוא שדה חובה'
             
Thank You page:

 Scenario:Click on the back button
             The user visits the website
             The user validate the footer
             The user types his first name 'test'
             The user types his email address 'test@example.com'
             The user types his phone number '0535962853'
             The user click on send
             The User redirect to the thank you page
             The user click on the return button
             The user redirect back to automation herolo page

        Scenario: Click on go to website
             The user visits the website
             The user validate the footer
             The user types his first name 'test'
             The user types his email address 'test@example.com'
             The user types his phone number '0535962853'
             The user click on send
             The User redirect to the thank you page
             The user click on go to website
             The user redirect back to


