Feature: Website footer


    Scenario: Fill in the footer form
        Given The user visits the website
        When The user validate the footer
        When The user types his first name 'test'
        When The user types his email address 'test@example.com'
        When The user types his phone number '0535962853'
        When The user click on send
        Then The User redirect to the thank you page


    Scenario: Fill in the footer form without credentials
        Given The user visits the website
        When The user validate the footer
        When The user click on send
        Then return error message below the text fields 'שדה שם הוא שדה חובה'



    Scenario: Fill in the footer form without name
        Given The user visits the website
        When The user validate the footer
        When The user types his email address 'test@example.com'
        When The user types his phone number '0535962853'
        When The user click on send
        Then return error message below the text fields 'שדה שם הוא שדה חובה'

    Scenario: Fill in the footer form without email address
        Given The user visits the website
        When The user validate the footer
        When The user types his first name 'test'
        When The user types his phone number '0535962853'
        When The user click on send
        Then return error message below the text fields 'שדה אימייל הוא שדה חובה'

    Scenario: Fill in the footer form without phone number
        Given The user visits the website
        When The user validate the footer
        When The user types his first name 'test'
        When The user types his email address 'test@example.com'
        When The user click on send
        Then return error message below the text fields 'שדה טלפון הוא שדה חובה'






