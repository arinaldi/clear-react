# CLEAR's web code test

## Instructions

Implement the feature, [described](#prompt) below, using Javascript, HTML and CSS.

Any frameworks or pre-processors are up to you. We use React & Proptypes here at CLEAR, so if you are comfortable with that framework it would be helpful to see. However, that is absolutely *not* a requirement. We do ask that you don't use [bootstrap](http://getbootstrap.com) or a similar CSS framework, though. We want to see your CSS skills (you may use CSS processors such as SASS or LESS).

Add unit tests/specs as needed. 

We have provided a starter setup, which serves `public/` statically. The details are [below](#run). You're free to use it or not (it won't affect your grade either way). We just ask that if you change the way the application runs, you let us know.

## Submission

We will send you an invitation to a folder on Box to submit the project.  Please zip up your project folder (leave out the `node_modules` please!) and drop the archive off at the specified address.	

If you're not using the supplied [running method](#run), instruct us on how to run your project.

Update README.md with any instructions you have for us, along with any notes you may want to share.

## Grading

This project is designed to test your knowledge of Javascript, HTML and CSS.

Your project will be graded on:
  - Code design and architecture.
  - Code quality metrics such as cleanliness, readability, maintainability, breakdown of responsibilities and simplicity.
  - Creativity in implementation.
  - Application and demonstrated knowledge of the aforementioned technologies and best practices.

Your project will not be graded on:
  - Aesthetic design
  - Choice of framework(s)

We also expect that the project will be responsive and look good on both mobile and desktop.

This test is not timed, so you will not be graded on how quickly you submit it. Please take your time and focus on the above.

## Prompt

CLEAR wants to create a simple tool to help customers know how much their membership will cost.

A membership typically costs $179 per year. Members can also add up to three family members to their CLEAR membership for $50/year each.

A user can also use a promo code, which will change the member price and family price.

NOTE - Feel free to send any questions to [irina@clearme.com](mailto:irina@clearme.com). We've tried to make this as clear (wink wink) as possible, but specs are notoriously ambiguous so please ask if you are unsure!

## Spec

A user will see that a membership costs $179.

When a user clicks "Add a Family Member" button, a modal pops up
  * The modal should contain a form with a single input, asking for the family member's first name
  * The modal should have an "Add" and a "Close" button
  * If the user clicks "Add", the family member is added to the estimate page and the modal is closed
  * If the user clicks "Close", the modal is closed without adding the family member
  * The "Add" button should be disabled if the first name input is empty

A user can add a maximum of three family members. Once they have entered three, the "Add a Family Member" button is no longer displayed.

When a user enters a valid promo code, the prices in the estimate are updated
  * Annual Membership amount is updated
  * The Family Membership amount is updated
  * The "Apply" button now says "Remove"
  * When the user clicks "Remove", the promo pricing is removed, and the prices are updated to their defaults

When the user enters an invalid promo code, the promo input turns red.

### Mockup

```
Default Estimate - this is what a user always sees when they first load the page:

+---------------------------------------------------------------+
|                                                               |
|                   CLEAR Membership Estimate                   |
+---------------------------------------------------------------+
|               _______________                                 |
|              |    Add a      |  (<- button)                   |
|              | Family Member |                                |
|               ---------------                                 |
|                                                               |
|              +----------------------------------+             |
|              | Annual Membership           $179 |             |
|              |                                  |             |
|              +----------------------------------+             |
|              | Total                       $179 |             |
|              +----------------------------------+             |
|                                                               |
|              +----------+                                     |
|              |Promo Code| [ Apply ]                           |
|              +----------+                                     |
|                                                               |
+---------------------------------------------------------------+


Add a Family Member Modal:

+---------------------------------------------------------------+
|                                                               |
|                                                               |
|                                                               |
|            +-----------------------------------+              |
|            |          Add Family Member        |              |
|            |                                   |              |
|            |   +----------------------------+  |              |
|            |   |First Name                  |  |              |
|            |   +----------------------------+  |              |
|            |                                   |              |
|            +--------+---------+                |              |
|            | Add    |  Close  |                |              |
|            +----------+-----------+------------+              |
|                                                               |
|                                                               |
|                                                               |
|                                                               |
+---------------------------------------------------------------+

Estimate Page w/ Two Family Members:

+---------------------------------------------------------------+
|                                                               |
|                   CLEAR Membership Estimate                   |
+---------------------------------------------------------------+
|               _______________                                 |
|              |    Add a      |                                |
|              | Family Member |                                |
|               ---------------                                 |
|                                                               |
|              +----------------------------------+             |
|              | Annual Membership           $179 |             |
|              |                                  |             |
|              | Family Membership                |             |
|              |   * Jane                     $50 |             |
|              |   * Janet                    $50 |             |
|              +----------------------------------+             |
|              | Total                       $279 |             |
|              +----------------------------------+             |
|                                                               |
|              +----------+                                     |
|              |Promo Code| [ Apply ]                           |
|              +----------+                                     |
|                                                               |
+---------------------------------------------------------------+

Estimate Page w/ Three Family Members:

+---------------------------------------------------------------+
|                                                               |
|                   CLEAR Membership Estimate                   |
+---------------------------------------------------------------+
|              +----------------------------------+             |
|              | Annual Membership           $179 |             |
|              |                                  |             |
|              | Family Membership                |             |
|              |   * Jane                     $50 |             |
|              |   * Janet                    $50 |             |
|              |   * Jack                     $50 |             |
|              +----------------------------------+             |
|              | Total                       $379 |             |
|              +----------------------------------+             |
|                                                               |
|              +----------+                                     |
|              |Promo Code| [ Apply ]                           |
|              +----------+                                     |
|                                                               |
+---------------------------------------------------------------+

Estimate Page w/ a Promo Code:

+---------------------------------------------------------------+
|                                                               |
|                   CLEAR Membership Estimate                   |
+---------------------------------------------------------------+
|               _______________                                 |
|              |    Add a      |                                |
|              | Family Member |                                |
|               ---------------                                 |
|                                                               |
|              +----------------------------------+             |
|              | Annual Membership            $90 |             |
|              |                                  |             |
|              | Family Membership                |             |
|              |   * Jane                     $25 |             |
|              |   * Janet                    $25 |             |
|              +----------------------------------+             |
|              | Total                       $140 |             |
|              +----------------------------------+             |
|                                                               |
|              +----------+                                     |
|              |HALFPRICE | [ Remove ]                          |
|              +----------+                                     |
|                                                               |
+---------------------------------------------------------------+

```

### Promo Data

Promo codes are available in `public/data/promo.json`.


## Setup

1. Install [NodeJS](nodejs.org)
2. Run `npm install`

## Run

We added a default setup, which runs all files in `public/` as static assets. It's there to make your setup easier, but it's not meant to discourage you from using templates, compiled languages or pre-processors. Choosing your languages, framework, build process, etc. is your perogative!

To run the default setup:

1. Add your work inside `public`. If you're using a compiled language, save it elsewhere and compile it to `public/`.
2. `npm run serve` - Serves the `public/` directory at [localhost:3000](http://localhost:3000).

If you're running the non-default setup, be sure to tell us how to start your project up.

## Test

1. `npm run test` - Runs [Jasmine](http://jasmine.github.io/2.6/introduction.html) units tests in [Karma](https://karma-runner.github.io/0.12), through Chrome (This is installed for you by `npm`).
  - Runs every file ending in `-spec.js` inside `test/`
  - If you'd like to configure it, see `karma.config.js`
