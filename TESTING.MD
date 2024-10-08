
# Testing

Manual testing was carried out to ensure the site and its features worked as expected. My only issues was with the feed and like page features where it would display all posts and did not filter correctly. Unfortunately I did not have enough time to resolve this issue but is something that I wish to solve at a later date.

Validators and Lighthouse reports were also used to minimise errors,all major bugs and fixes are documentd.

#  Contents
1. [Manual Testing](#manual-testing)
2. [Validators](#validators)
3. [Reports](#reports)
4. [Bugs and Fixes](#bugs-and-fixes)

# Manual Testing
## Navigation

| **Test**                                              | **Expected Result**                                                                                |  **Result** |
| ----------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ----------- | 
| Buttons in navbar                                     | All buttons navigate to the correct page.                                    					     | ✅ Pass     | 
| Open the Homepage unauthenticated                     | Homepage loads and displays posts.                                                                 | ✅ Pass     | 
| Open the Feed when following users                    | Feed loads and displays the followed users posts.                                                  |  X Fail     | 
| Open the Like page without liked posts                | Liked page displays hint to like posts.                                                 		     | ✅ Pass     | 
| Open the Like page with liked posts                   | Liked page loads and displays the liked posts.                                                     |  X Fail    |
| Open the Contact page                                 | Contact page and the contact form loads.                                                           | ✅ Pass     | 
| Open profile page                                     | Clicking on profile page in navbar opens the profile.                                              | ✅ Pass     | 
| Clicking the logo in navbar loads home page           | Clicking the logo in the navbar sends the user to home page.                                       | ✅ Pass     | 
| Profile in navbar sends user to their profile         | Clicking on profile page in navbar opens the users profile.                                        | ✅ Pass     | 
## Authentication

| **Test**                                              | **Expected Result**                                                                                |  **Result** |
| ----------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ----------- |
| Register a user with valid data                       | User is registered and directed to sign in page,                               			         | ✅ Pass     | 
| Register a user with invalid data                     | User notified errors and is shown what is required.                                                | ✅ Pass     |
| Login a user with valid data                          | User is logged in.                                                         					     | ✅ Pass     | 
| Login a user with invalid data                        | User notified errors and is shown what is required.                                                | ✅ Pass     |
| Logout a user                                         | User is logged out.                                            									 | ✅ Pass     |
## Profiles

| **Test**                                              | **Expected Result**                                                                                |  **Result** |
| ----------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ----------- |
| Open Profile                                    		| Opens Profile Page and displays users information.                                                 | ✅ Pass     | 
| Edit Profile                                          | Profile is updated. 																				 | ✅ Pass     | 
| Edit username                                         | Username is updated. 																				 | ✅ Pass     |
| Change password                                       | Password is updated. 																		 		 | ✅ Pass     | 


## Posts

| **Test**                                              | **Expected Result**                                                                                |  **Result** | 
| ----------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ----------- |
| Create a Post with valid data                         | Post is created.                        															 | ✅ Pass     | 
| Create a Post with invalid data                       | Post fails, form shows error and how to resolve.                                                   | ✅ Pass     | 
| Edit a Post with valid data                           | Post is updated.                      														     | ✅ Pass     | 
| Edit a Post with invalid data                         | Post fails, form shows error and how to resolve.                                                   | ✅ Pass     | 
| Delete a Post                                         | Post is deleted.                          														 | ✅ Pass     | 

## Comments

| **Test**                                              | **Expected Result**                                                                                |  **Result**  |
| ----------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -----------  |
| Writing a comment                                     | Comment is added to the list.   								                 			         | ✅ Pass      |
| Editing a comment                                     | Comment is updated.									                             			     | ✅ Pass      |
| Delete a comment                                      | Comment is deleted.                                       										 | ✅ Pass      |
| Comment count increase                                | New comments increase the comment count.                                 	                         | ✅ Pass      |
| Comment count decrease                                | Deleting comments decreases the comment count.                                       	             | ✅ Pass      |

## Likes

| **Test**                                              | **Expected Result**                                                                                |  **Result** |
| ----------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -----------  |
| Liking a post on home page                            | Like count increases and like button changes.                                                       | ✅ Pass      |
| Unliking a post on home page                          | Like count decreases and like button changes.                                                       | ✅ Pass      | 
| Liking a post on post page                            | Like count increases and like button changes.                                                       | ✅ Pass      | 
| Unliking a post on post page                          | Like count decreases and like button changes.                                                       | ✅ Pass      | 
| Like own post                  				        | Unable to like.                                                   							      | ✅ Pass      | 
## Followers

| **Test**                                              | **Expected Result**                                                                                |  **Result** |
| ----------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ----------- | 
| Follow Profile                       					| Request is successful and follow button changes to unfollow.                                       | ✅ Pass     | 
| Unfollow Profile                    				    | Request is successful and unfollow button changes to follow.                                       | ✅ Pass     | 


## Category

| **Test**                                              | **Expected Result**                                                                                |  **Result** |
| ----------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ----------- | 
| Filtering categories                            		| Posts with filtered category are displayed.                                  						 | ✅ Pass     | 
| Filtering categories All categories                   | All posts are loaded.                                                  				 			 | ✅ Pass     |       


## Contact

| **Test**                                              | **Expected Result**                                                                                |  **Result** |
| ----------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ----------- | 
| All fields completed                             	    | User able to submit form.                                                     				     | ✅ Pass     | 
| Not all fields completed                              | User notified errors and shown what is required.                                                	 | ✅ Pass     | 
| Modal when sending message                            | Modal loads and notifies user message has been sent.           								     | ✅ Pass     | 

# Validators

## W3C CSS

![CSS Validation screenshot](./README-Images/css-validator.webp)

# Reports

## Lighthouse

![Lighthouse screenshot](./README-Images/lighthouse.webp)

# Bugs and Fixes

## Bug 1

![Bug1 screenshot](./README-Images/bug1.webp)

Here I had my deployed Heroku address wrong which was causing the error to not let me post anything.

## Bug 2

![Bug2 screenshot](./README-Images/bug2.webp)

Here after a long long time i relaised that my CLIENT_Origin had an extra underscore at the end of it which was causing all the errors.

![BugIssue screenshot](./README-Images/bug2-issue.webp)
