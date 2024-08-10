# Sports Snaps - Frontend.

Sports Snaps is a social media platform that lets users post images and share their content with other people. Signed up Members can post pictures, like other posts, comment on posts and also edit and delete their own posts. Members can also follow other members to create a personalized feed.


## Live Site

[You can view the live web application here.](https://)

## Site Repositories

[Frontend Repository](https://github.com/)

[API Repository](https://github.com/)

## Table of contents

- [1. User Expeience](#user-experience-ux)
- [2. Agile Methodology](#agile-methodology)
- [3. The Scope](#the-scope)
- [4. Design](#design)
- [5. Features](#features)
- [6. Django Admin](#django-admin)
- [7. Technologies Used](#technologies-used)
- [8. Testing](#testing)
- [9. Deployment](#deployment)
- [10. Credits](#credits)
- [11. Acknowledgements](#acknowledgements)

## User Experience

### User Stories

* As a website user, I can:

<br>

1. Navigate around the site and easily view the content that has been posted.

2. Comment and like posts to interact with the community.

3. Follow my favourite users.

4. Have access to a contact page where I can contact the admin if required.

5. Register for an account to access the services offered to authorized members.

<br>

* As a website superuser, I can:

<br>

1. Create and publish a new posts.

2. Create a new users.

3. Delete users.

4. Approve, reject or delete user's posts or comments.

## Agile Methodology

* All functionality and development of this project were managed using GitHub Projects. This can be found here at [Github Projects](https://github.com/users/DeveloperDunne/projects/6/views/1).

### MoSCoW

![MoSCoW screenshot](./README_Images/admin_images/MoSCoW.webp)

This project used the "MoSCoW" method to classify its features and requirements according to their importance towards a minimum viable product (MVP). "MoSCoW" stands for "Must have, Should have, Could have and Won't have," with each classification aiding in the prioritisation of features. This method makes sure that essential components are tackled in priority order.

## The Scope

### Main Site Goals

* To provide users with a good experience when using the website.
* To provide users with a visually pleasing website that is intuitive to use and easy to navigate.
* To provide a website with a clear purpose.
* To provide role-based permissions that allow users to interact with the website.
* The ability to contact admin if required.
* The ability to update and delete comments if desired.
* The ability to interact with community by commenting, following and liking posts.

### Target audience

This blog is for sports fans who are interested in interacting with a likeminded community who share thier love for sporting moments captured in picturees.

## Design

### Wireframes
Balsamiq was used to design the blog's look.

### Colour Theme
![Colour Theme](./README_Images/design_images/)

The colour theme above was used throughout the project to ensure consistency, seem welcoming and and appeal to the user.

### Fonts
Fonts used were .... All were sourced from [Google Fonts](https://fonts.google.com/).

## Features

### Navigation Bar:
![Navigation Bar - Not Logged in](./README_Images/site_images/)

A responsive navigation bar is situated at the top of the page. When on a mobile the bar condenses into a burger icon which will enable a dropdown menu, however on a desktop all pages are displayed along the bar. What is shown in the navigation bar depends on whether the user is logged in or not.

### Not logged in:
![Navigation Bar - Not Logged in](./README_Images/site_images/)

When not logged in you will be able to see the following pages: Home, Sign In, Sign Up and Contact.

### Logged in:
![Navigation Bar - Logged in](./README_Images/site_images/)

When logged in the Register and Sign-in page disappears and instead you will see the following.

### Landing Page
![Home Page](./README_Images/site_images/)

Upon arrival to the website, the landing page will be loaded. Here you will be able to see posts that authorized users have already posted drawing you into what is to come.

### Contact Page
![Contact](./README_Images/site_images/)

The contact page consists of a form that the user can fill out and submit if they have any questions.

### Sign Up Page
![Sign Up](./README_Images/site_images/)

This page is a form where the user can sign up to reap the benefits of being a logged in user.

### Sign In Page
![Sign in](./README_Images/site_images/)

This page is where the user can sign in so that they can have access to the benefits of being a authorized user.

### Sign Out Page
![Sign Out](./README_Images/site_images/)

This is the sign out page where users can log out.

### Add Post Page

### Feed Page

### Like Page

### Profile Page

### Future Features

Features I would have liked to implement but did not get time to would be a notification feature where authorized users would be notified when someone tat they follow posts a new photo.

I would also liked to added more styling to the overall look of the site however I just ran out of time.

## Technologies Used

### Languages Used

* HTML 5
* CSS 3
* JavaScript
* React
* Django-Rest Framework
* Python

### Frameworks & Libraries Used

* React-Bootstrap: This was used to style the website, and add responsiveness and interactivity.

* Git: Was used for version control to commit to Git and push to GitHub.

* GitHub: Is is used to store the project's code after being pushed from Git

* Heroku: Was used to deploy the live project.

* GitHub / VSCode: This was used to create and edit the website.

* Fontawesome: To add icons to the website.

* Google Fonts: To add the fonts that could be used for the project.

* Coolors: To build the colour palette of the project.

* Balsamiq: To build the wireframes for the project.

### Databases

* CI PostgreSQL from Code Institute was used as the PostgreSQL database for this project.

## Testing

Detailed testing documentation can be found here[ TESTING.MD](./TESTING.md)

## Deployment

All code for this project was written using the IDE Visual Studio code (VS Code) using a Gitpod workspace. Github was used for version control and the application was deployed via Heroku.

 ### Heroku Deployment

* This site was deployed by completing the following steps:

1. Log in to Heroku or create an account.

2. On the main page click Create New App.

3. Select your region.

4. Click on the Create App button.

5. The next page is the project’s Deploy Tab, click the Settings Tab.

6. Go to the Deploy tab.

7. Select Github as your deployment method.

8. Connect to GitHub.

9. Search your repository name and connect.

10. Click either Enable Automatic Deploys for automatic deployment when you push updates to GitHub or manual to do this manually.

### Cloning:

1.  Go to the repository on GitHub.

2.  Click on the Code button and copy the https URL under Clone.

3.  Open a terminal.

4. Go to the folder you want to store the cloned repository.

5. In the terminal type git clone and paste the URL of the cloned repository after it then press Enter.

6. The site will then be cloned to that directory.

### Fork this repository:

- Go to the GitHub repository.
- Click on the Fork button in the upper right-hand corner.

## Credits

### Code
The CI walkthroughs (DRF Rest Framework API & Moments) were leaned on and relied upon heavily in this project due to time restraints, there are still some remnants of legacy code within. As I was really pushed for time to complete the project I used the CI code and initial styling as a base before implementing my own custom features and styles. 

I created a Contact model where users can contact the admin if equired by filling out a form and also added a category feature.

## Acknowledgements
Thank you to the Slack community and especially tutors which I relied on a lot for all their help throughout this project. Also thank you to my friends and family for help with testing the project.