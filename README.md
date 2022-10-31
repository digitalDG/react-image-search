# Prerequisites

Enter your Pixabay client key in the .env file

# Demo Deployment

The app has been deployed using gh-pages at https://digitaldg.github.io/react-image-search/


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

# Description

This application allows an user to enter a search term which returns a set of image results from the Pixabay API. The images are displayed as image gallarys.


# Project Dependencies

- Material UI V5
- Axios
- MUI Search Bar

# UI Design

The application consists of 3 main UI components.

- NavBar
- Search 
- ImageGallary

It uses custom hooks for resuable Axios calls, and context API to share data between components

# Design Tradeoffs

The Material UI component libarary was used to quickly create components. An existing search bar npm package was used to simplify developmnet efforts.


# App Improvements

- The ability for user login where users save favorites
- Ability to select favorites
- More search options selectable by user - per_page, safesearch
- Ability to select categories, image types
- Image pagination to view multiple pages
- share images 








