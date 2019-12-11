# Miho's Hair Salon



## Purpose

Our client would like to expand their business and become more noticeable to solve this problem we will create a web application with a booking system to give our client more exposure. But at the same time we would like to make our web application as user friendly as possible to attract many customers.



## Functionality / features

- In the landing page we will have a carousel which contains a few photo's. 

- Navbar Contains Photo Gallery, About, Price, Booking, Contact

- Booking will only accept specific amount of customer per day, Booking can be cancelled by admin.

- Booking page will also have a calendar so customers know what day the shop is open and what they the shop is closed.

- Customer will not be able to book the same time as other users.

- Fields for booking page are Date, Time, Full name, Email, Phone and check boxes for cuts, perms, colour hair extension and a smile. smile is actually a Japanese thing that you can order as a service.

- Client will be able to monitor booking as well as cancel bookings and make adjustment to when they are busy

- Customer will not be able to book when client is busy, client will be able to choose the dates they are busy etc. Monday - Wednesday shop will not be open or Monday && Sunday shop will not be open

- Admin will contain Customer list which are the customers that have reserved a seat and also contain analytic which will tell how many customers have reserved a spot there the prices or any other data that we can display to allow admins to feel like they have control over everything that is happening.

- About page - contains info about our client's shop.

- Page Languages can be switched from Japanese to English. English being the default.

- Contacts contains a google map of the location of our clients shop it will also contain phone number of our client just in case anyone would like to contact our client.

- price page will contain the prices of the cut you get as well as the prices to dye hair etc.

  

  

## Target audience

Customers that would like to reserve a seat for when they go get their haircut. but at the same time not feel  forced to sign in or go through any hard work to reserve a seat. We want our users to feel welcomed and not feel like it’s too much work and make sure that our booking is as user friendly as it gets.



## Tech stack

MongoDB - our database

Express - server

React - front end

Node - JavaScript run-time

Enzyme with jest - Testing utility

## User Stories

As Miho,

> I would like to have control over who comes in.
>
> I would like to know how many customers are coming in.
>
> I would love to see how much i will be making that day.
>
> I would like the ability to change my password and email just in case i forget it.

As Mark,

> I would like to reserve a seat to my favourite hair salon so when i get there, i won't have to wait.
>
> It would be nice to let the hair dressers know about my sensitive head before i get there that way they can apply some sort of cream if they comb my hair.
>
> I would like to be able to know if my booking has been cancelled 

## Trello Screen Shots

We used a template from Trello to get started with our Trello board.  Then we assigned task to team members to complete before the due date.![Screen1](./docs/Trello Screen Shot/Screen1.png)

Team Members have Started their Task and some have even completed their of the task once task is completed they are assigned more task if possible, otherwise they help with other team members Work.

![Screen2](./docs/Trello Screen Shot/Screen2.png)

Wireframes has been finished and a team member has been blocked from complementing the task, Diagrams are almost complete.

![Screen3](./docs/Trello Screen Shot/Screen3.png)

A Team Member has finished a task and has checked in with the team to make sure everything is correctly done.

![Screen4](./docs/Trello Screen Shot/Screen4.png)

Completed all planning task and confirmed with team members.

![Screen5](./docs/Trello Screen Shot/Screen5.png)





## Wireframes 

Booking Page

![Wire1](./docs/Wireframe/Wire1.png)



Booking Page - Mobile

![Wire2](./docs/Wireframe/Wire2.png)

Contacts Page![Wire3](./docs/Wireframe/Wire3.png)

Contacts Page - Mobile

![Wire4](./docs/Wireframe/Wire4.png)

Pricing Page ![Wire5](./docs/Wireframe/Wire5.png)

Price Page - Mobile

![Wire6](./docs/Wireframe/Wire6.png)

About Page - 2 Languages![Wire7](./docs/Wireframe/Wire8.png)

About Page - Mobile

![Wire9](./docs/Wireframe/Wire9.png)

Landing Page![Wire10](./docs/Wireframe/Wire10.png)

Mobile Landing Page

![Wire11](./docs/Wireframe/Wire11.png)

Photo Gallery![Wire12](./docs/Wireframe/Wire12.png)

Admin Page - Viewing Customer

![Wire17](./docs/Wireframe/Wire17.png)

Viewing Reservation/booking page mobile

![Wire18](./docs/Wireframe/Wire18.png)

Admin Schedule Page

![Wire13](./docs/Wireframe/Wire13.png)

Admin Schedule Page Mobile

![Wire14](./docs/Wireframe/Wire14.png)

Admin Analysis Page

![Wire15](./docs/Wireframe/Wire15.png)

Admin Analysis Page Mobile

![Wire16](./docs/Wireframe/Wire16.png)

## Data Flow Diagram & Application Architecture Diagram

### DFD

![save](./docs/save.png)

## Application Architecture Diagram

![Screen_Shot_2019-12-04_at_12.40.22_pm](./docs/Screen_Shot_2019-12-04_at_12.40.22_pm.png)

**An example of our App architecture Diagram**

Customer will fill in the form which contains date, hour, full name, phone and more. Once the User hits the submit button on the page it will send a post request to the server which will then send the data to the database it will also send a email to the customer to let them know about the booking they have made. The data that is kept in booking info and report will be sent to admin domain service to be displayed to the admin.

Admin will be able to access the admin domain service through the login page which will require them to fill in username as well as password once they press the submit button it will send a post request which will check the database and compare if the information they have entered to see if it has matched any of the existing data and will be redirected to the admin domain service.

When an admin cancels a previous booking it will send a post request with a different method called delete which will remove the existing data from the database it will also send an email or MSG to the user letting them know that their reservation or booking has been cancelled.