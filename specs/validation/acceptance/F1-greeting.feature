Feature: F1 Greeting

  @story-F1.1
  Rule: The page greets every visitor with the same fixed "Hi, World"

    Scenario: A visitor opens the page
      Given Vera the visitor has the page's address
      When Vera opens the page
      Then she sees the greeting "Hi, World"

    Scenario: A second visitor sees the same greeting
      Given Vera and Sam have both opened the page
      Then Sam sees exactly the same greeting as Vera

  @story-F1.2
  Rule: The greeting is shown without any sign-in

    Scenario: A visitor who has never signed in
      Given Vera has no account and is not signed in
      When Vera opens the page
      Then she sees the greeting "Hi, World"
      And she is not asked to sign in
