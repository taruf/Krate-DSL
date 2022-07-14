Feature: Get Airline details
  Background:
    * def airlineDetails = read("../contracts/airlinedetails.json")
  Scenario: by its ID
  Given url   baseUrl + GET_AIRLINE_DETAILS
  When method get
  Then status 200
    And print "Response ---", response
    And match response.name == airlineDetails.name
    And match response == airlineDetails
