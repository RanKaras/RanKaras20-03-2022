Feature:Main page

    Scenario: valid contact us form
        Given The user visits the website
        When The user enter his name 'test'
        When The user enter his company name 'test'
        When The user enter his email address 'test@example.com'
        When The user enter his phone number '0535962853'
        Then The user click on contact us button
        Then The User redirect to the thank you page

    Scenario:Footer disappear when scrolling to the bottom of the page
        Given The user visits the website
        When The user validate the footer
        When The user enter his name 'test'
        Then The user checks that the popup is not visible


   