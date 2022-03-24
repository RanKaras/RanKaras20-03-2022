Feature: Thank You Page

    Scenario:Click on the back button
        Given The user visits the website
        When The user validate the footer
        When The user types his first name 'test'
        When The user types his email address 'test@example.com'
        When The user types his phone number '0535962853'
        When The user click on send
        Then The User redirect to the thank you page
        When The user click on the return button
        Then The user redirect back to automation herolo page

    Scenario: Click on go to website
        Given The user visits the website
        When The user validate the footer
        When The user types his first name 'test'
        When The user types his email address 'test@example.com'
        When The user types his phone number '0535962853'
        When The user click on send
        Then The User redirect to the thank you page
        When The user click on go to website
        Then The user redirect back to


