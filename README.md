# Sports Snaps - Frontend.

Sports Snaps is a social media platform that lets users post images and share their content with other people. Signed up Members can post pictures, like other posts, comment on posts and also edit and delete their posts. Members can also follow other members to create a personalized feed.


## Live Site

![AmIResponsive](./README-Images/responsive.webp)

[You can view the live web application here.](https://sportssnaps-37b7ee6411c9.herokuapp.com/)

## Site Repositories

[Frontend Repository](https://github.com/DeveloperDunne/sports-snaps_frontend)

[API Repository](https://github.com/DeveloperDunne/Sports-Snaps-API)

## Table of contents

- [1. User Expeience](#user-experience-ux)
- [2. Agile Methodology](#agile-methodology)
- [3. The Scope](#the-scope)
- [4. Design](#design)
- [5. Features](#features)
- [6. Resusability](#resusability)
- [7. Django Admin](#django-admin)
- [8. Technologies Used](#technologies-used)
- [9. Testing](#testing)
- [10. Deployment](#deployment)
- [11. Credits](#credits)
- [12. Acknowledgements](#acknowledgements)

## User Experience

### User Stories

* As a website user, I can:

<br>

1. Navigate around the site and easily view the content that has been posted.

2. Comment and like posts to interact with the community.

3. Follow my favorite users.

4. Access a contact page where I can contact the admin if required.

5. Register for an account to access the services offered to authorized members.

<br>

* As a website superuser, I can:

<br>

1. Create and publish a new post.

2. Create a new user.

3. Delete users.

4. Approve, reject or delete user's posts or comments.

## Agile Methodology

* All functionality and development of this project were managed using GitHub Projects. This can be found here at [Github Projects](https://github.com/users/DeveloperDunne/projects/6/views/1).

### MoSCoW

![MoSCoW screenshot](./README-Images/MoSCoW.webp)

This project used the "MoSCoW" method to classify features and requirements according to their importance towards a minimum viable product (MVP). "MoSCoW" stands for "Must have, Should have, Could have and Won't have," with each classification aiding in the prioritization of features. This method makes sure that essential components are tackled in priority order.

## The Scope

### Main Site Goals

* To provide users with a good experience when using the website.
* To provide users with a visually pleasing website that is intuitive and easy to navigate.
* To provide a website with a clear purpose.
* To provide role-based permissions that allow users to interact with the website.
* The ability to contact admin if required.
* The ability to update and delete comments if desired.
* The ability to interact with the community by commenting, following and liking posts.

### Target audience

This blog is for sports fans who are interested in interacting with a like-minded community who share their love for sporting moments captured in pictures.

## Design

### Wireframes
Balsamiq was used to design the blog's look.

### Colour Theme
![Colour Theme](./README-Images/theme.webp)

The colour theme above was used throughout the project to ensure consistency, seem welcoming and appeal to the user. The navigation bar is a gradient to add uniqueness.

### Fonts
The font used was 'Teko'. All fonts were sourced from [Google Fonts](https://fonts.google.com/).

## Features

### Navigation Bar:
![Navigation Bar](./README-Images/burger.webp)

A responsive navigation bar is situated at the top of the page. When on a mobile the bar condenses into a burger icon which will enable a dropdown menu, however on a desktop all pages are displayed along the bar. What is shown in the navigation bar depends on whether the user is logged in or not.

### Not logged in:
![Navigation Bar - Not Logged in](./README-Images/navbar.webp)

When not logged in you will be able to see the following pages: Home, Sign In, Sign Up and Contact.

### Logged in:
![Navigation Bar - Logged in](./README-Images/logged-in.webp)

When logged in the Register and Sign-in page disappears and instead you will see the following.

### Landing Page
![Home Page](./README-Images/landing-page.webp)

Upon arrival to the website, the landing page will be loaded. Here you will be able to see posts that authorized users have already posted drawing you into what is to come.

### Contact Page
![Contact](./README-Images/contactus.webp)

The contact page consists of a form that the user can fill out and submit if they have any questions.

### Sign Up Page
![Sign Up](./README-Images/signup.webp)

This page is a form where the user can sign up to reap the benefits of being a logged in user.

### Sign In Page
![Sign in](./README-Images/signin.webp)

This page is where the user can sign in so that they can have access to the benefits of being an authorized user.

### Sign Out Page

Once users click the sign out link they will be redirected to the landing page.

### Add Post Page
![Sign in](./README-Images/add-post.webp)

Here logged in users can create their own posts to share with the community.

### Feed Page

The feed page will show all of the posts that the registered user has decided to follow.

### Like Page

the Like page will show all of the posts the registered user has liked.

### Profile Page

![Sign in](./README-Images/profile.webp)

This page will provide all information about a user. If you are the the user of the profile you have the option to amend details.

### Future Features

Features I would have liked to implement but did not get time to would be a notification feature where authorized users would be notified when someone that they follow posts a new photo.

I would also liked to add more styling to the overall look of the site however I just ran out of time.

## Resusability

<details>
<summary>React Components</summary>
<summary>

1. **Asset.js:**
<br>
This component displays a spinner when the page is loading. It can be reused wherever a spinner could be needed, for example when something is loading.
<br>

-`Const Asset` is a reusable component and has been reused in other componenets to display a spinner when some content is loading.  The spinner was imported from ‘react-bootstrap’. 
<br>

This was used in:
<br>

-  NotFound.js
- PostCreateForm.js
- PostPage.js
- PostsPage.js
- PopularProfiles.js
- ProfilePage.js 

<br>

2. **Avatar.js:**
<br>
This component arranges the Avatar images for users. It can be reused for whenever a user is added an avatar image is assigned before the user changes the image.

<br>

-`Const Avatar` is considered a reusable component and has been reused in other components such as:
<br>

- NavBar.js
- Comment.js
- CommentCreateForm.js
- Post.js
- Profile.js

<br>

3. **ChooseCategory.js:**
<br> 
This component fetches categories from the API and displays them in a dropdown menu. Once selected this allows users to filter sports based on the selected category. It can be reused in different situations where a drop-down list with filtering for categories is required.

<br>

-`Const ChooseCategory` is reusable and was reused in ‘PostsPage.js to enable filtering posts via category.
<br>


4. **MoreDropdown.js:**
<br>
This component can be reused as a simple dropdown menu for when users need to edit a comment, post or photos.
<br>

-`Const MoreDropdown` is a reusable component. It has been reused in:
<br>
- Comment.js
- Post.js
- ProfilePage.js 
<br>


5. **NotFound.js:**
<br> 
This component displays the image that is displayed when a request can't be found.<br>

-‘Const NotFound` has been used in App.js inside a path to display a "Not found" message when a user wants to use a path that doesn't exist. It was also given a source of NoResults which has been reused in:
<br>
- PostsPage.js
- ProfilePage.js 
<br>

6. **SignInForm.js:**
<br> 
This displays the form for a user to sign in to the website.<br>

- `Function SignInForm` is a reusable component.
<br>

7. **SignUpForm.js:**
<br> 
This component enables users to sign up and register an account.
<br>

-`Const SignUpForm` is a reusable component.
<br>


8. **Comment.js:**<br> This component displays a comment with added options to edit or delete it by the user who owns the comment.<br>
This component can be reused in environments such as blog posts.<br>

-`Const Comment` is a reusable component and has been reused in
    PostPage.js.
<br>

9. **CommentCreateForm.js:**
<br>
This s designed to allow users to create a new comment. .
<br>

- `Function CommentCreateForm` is a reusable component and was reused in:<br>

 - PostPage.js 
<br>

10. **CommentEditForm.js:**
<br> 
This allows users to edit existing comments. It allows the user to update the comment's content and save any changes.
<br>
This component can be reused in Comment.js and CommentCreateForm.js.
<br>

- `Function CommentEditForm` is considered a reusable component and has been reused in Comment.js.<br>

11. **ContactForm.js:**
<br>
This component is designed for users to reach out and contact the site owner by sending messages through a contact form.
<br>

- `Const ContactForm` is considered a reusable component.<br>

12. **Post.js:**
<br> 
This component is quite versatile and can be reused where interacting with posts is required.<br>
Can be reused in Blogs or forum threads.<br>

- `Const Post` is considered a reusable component and has been reused in the following:<br>

- PostPage.js
- PostsPage.js<br>

13. **PostCreateForm.js:**
<br> 
This component is used to create new posts. It includes form fields for entering a post title, content, an optional image upload, and selecting a category. Users can fill out these fields, upload an image if they want and submit the form to create a new post.<br>

- `Function PostCreateForm` is a reusable component.

14. **PostEditForm.js:**
<br> 
This component is used to edit forms of posts. Users can edit all fields and resubmit the form to update the post.<br>

- `Function PostEditForm` is considered a reusable component.


15. **PostPage.js:**
<br> 
This component displays the post content.<br>

- `Function PostPage` is a reusable component.

16. **PostsPage.js:**
<br> 
This component  displays posts dependant on different filters.<br>

- `Function PostsPage` can be reused.


17. **PopularProfiles.js:**
<br> 
This component displays all popular profiles.<br>
Can be used in other applications as i.e a featured section.<br>

- `Const PopularProfiles` is considered a reusable component and has been reused in:<br>

  - PostPage.js
- PostsPage.js
- ProfilePage.js 

18. **Profile.js:**
<br> 
This component is designed to display a user profile with options for following or unfollowing..<br>

- `Const Profile` is considered a reusable component and was been reused in:<br>

- PopularProfiles.js<br>

19. **ProfileEditForm.js:**
<br> 
This component allows a user to edit their profile information.<br>

- `Const ProfileEditForm` is a reusable component.

20. **ProfilePage.js:**
<br> 
This component displays a user's profile information. This information includes a profile picture, follower counts, and their own posts.<br> 

- `Function ProfilePage` is  a reusable component.

21. **UsernameForm.js:**
<br>
This component allows users to change their username.
<br>
- `Const UsernameForm` is a reusable component.

<br>
22. **UserPasswordForm.js:** 

<br>
This component allows users to change their password. It integrates with React, React Bootstrap for UI components, and Axios for making HTTP requests. <br>

- From this component const UserPasswordForm is a reusable component.
</summary>
</details>


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

Detailed testing documentation can be found here[ TESTING.MD](./TESTING.MD)

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

1. Go to the repository on GitHub.

2. Click on the Code button and copy the https URL under Clone.

3. Open a terminal.

4. Go to the folder you want to store the cloned repository.

5. In the terminal type git clone and paste the URL of the cloned repository after it then press Enter.

6. The site will then be cloned to that directory.

### Fork this repository:

- Go to the GitHub repository.
- Click on the Fork button in the upper right-hand corner.

## Credits

### Code
The CI walkthroughs (DRF Rest Framework API & Moments) were leaned on and relied upon heavily in this project due to time restraints, there are still some remnants of legacy code within. As I was really pushed for time to complete the project I used the CI code and initial styling as a base before implementing my own custom features and styles. 

I created a Contact model where users can contact the admin if required by filling out a form and also added a category feature.

## Acknowledgements
Thank you to the Slack community and especially tutors which I relied on a lot for all their help throughout this project. Also thank you to my friends and family for help with testing the project.