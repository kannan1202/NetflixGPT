# Features
- Login/Sign Up page
    - Sign In/Sign Up form
    - Redirect to Browse page
- Browse Page(Comes only after authentication)
    - Header
    - Main movie
        - trailer in Background
        - Title and description
        - Movie suggestions 
            - movie lists * N 
- NetflixGPT
    - search bar
        - multilingual
    - movie suggestions


- BugFix:
    - Sign up displayName and PhotoURL update.
        - However, userCredential.user may not immediately reflect the changes made in the subsequent updateProfile call. The updateProfile function is asynchronous, and it might take some time for the changes to propagate.
        - So, to ensure that you have the most up-to-date user information, you use auth.currentUser. This directly refers to the current authenticated user and reflects the changes made through updateProfile. It provides the latest information, including displayName and photoURL, which you then use to dispatch the user information to the Redux store.
    - Redirect the user to same login page or browse page if the user tries to change the route to browse page or vice-versa.
        - If the user is not signed in, the Redux store may not have a user object (or it might have a user with a certain property indicating that they are not authenticated).
        Your routing logic, which checks the authentication state in the Redux store, recognizes that the user is not authenticated(Incase of unauthenticated user).
- Unsubscribe onAuthStateChanged when the header component unmounts from the dom.