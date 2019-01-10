# Welcome to Ridley!

This is a finance application that allows users to discover their retirement amount and an appropriate savings rate for early retirement.

This application is broken up into three parts:
Income Statement, Emergency Funds, and Retirement Plan

## Home Page

New and existing users have multiple places to **log in**.
The informational section, **Learn More**, provides the user with podcasts, financial calculators, and more.

<a><img src="http://i64.tinypic.com/mt154k.jpg" border="0" alt="Image hosting by TinyPic"></a>

## Authentication using Auth0

Auth0 was used for authentication.

<a ><img src="http://i66.tinypic.com/2bqryp.png" border="0" alt="Image hosting by TinyPic"></a>

## Build an Income Statement

The application uses Redux and multiple page wizards to help the user create an **Income Statement**. Calculations from this page are used later in the Retirement Plan section.

<a ><img src="http://i67.tinypic.com/v3fxfo.png" border="0" alt="Image hosting by TinyPic"></a>

## You Can Email Yourself

**Nodemailer** was used along with Amazon Web Services so that the user can email themselves a copy of their income statement. This is useful for users to keep track of old income statements as salary and expenses fluctuate.

<a><img src="http://i66.tinypic.com/r0c87a.png" border="0" alt="Image hosting by TinyPic"></a>

## Where is All Your Money Going

The application uses **Chart JS** to visually represent a users expenses. If a user has a low savings rate, he or she can review this chart and figure out where most of their income is going.

<a><img src="http://i65.tinypic.com/21lk0gx.png" border="0" alt="Image hosting by TinyPic"></a>

## Fund Your Nest Eggs

The user can keep track of their monthly savings in the Nest Egg portion of the application. Dates are provided with every **Emergency Fund** and **Retirement Fund** deposit.

<a><img src="http://i68.tinypic.com/167s712.png" border="0" alt="Image hosting by TinyPic"></a>

## Set Yourself Up for Early Retirement

The Retirement Plan is the bulk of the application.
This application promotes FIRE (Financial Independence, Retire Early), a method in which someone saves a bigger portion of their paycheck to become financially free and not dependent on external income.

After the user enters his or her age, a retirement **FIRE amount**, or goal, will be provided for the user.

The number of work years remaining are also provided. Users can play with the **slider** and see how many years of work they can shave off. This feature allows the user to better understand their appropriate savings rate.

A five-year projection plan is also provided. Saving for retirement can seem like a lot of work. It is important to show that taking little steps will add up.

<a><img src="http://i64.tinypic.com/wahd3t.png" border="0" alt="Image hosting by TinyPic"></a>

## Bonus: Plan Out Your Future Purchases

A bonus sections has been provided for users who have bad spending habits. This notion of entering your future purchases and how important they are can lead to **conscious spending**. Users can create cards and delete them accordingly.

<a href="http://tinypic.com?ref=90y5aq" target="_blank"><img src="http://i63.tinypic.com/90y5aq.png" border="0" alt="Image and video hosting by TinyPic"></a>

## Note

This application is for people with consistent income and expenses.
Revisiting the application multiple times a year is recommended as income and expenses change.

## Thank You

This application was made for a friend who asked me to help set him up for financial success.
I have taken the conservative approach of clearing out debt, creating a savings, and planning out what to do with future income, and have mimicked those steps in my application.
I really hope this application helps many more people.
