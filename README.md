## Table of Contents
1. [General Info](#general-info)
2. [Screenshot](#screenshot)
3. [Built With](#built-with)
4. [Usage](#usage)
5. [Deployment](#deployment)

## General Info
#### `#MERN Post Album`
> *MERN Post Album app was created using [MERN stack](https://www.mongodb.com/mern-stack) one of the most popular fullstack app technologies.
> The state management functionality of this app was built combining [Redux](https://redux.js.org/introduction/getting-started) and [React Hooks](https://reactjs.org/docs/hooks-intro.html). 
The app was created as a media journal to post images and interesting facts about my pet and share this info between our social contacts.* 

## Screenshot
![mern-post-album](https://user-images.githubusercontent.com/44978672/112792089-8d0bc480-90ae-11eb-8b79-50bca465f003.jpg)

## Built With
* [React](https://reactjs.org/docs/getting-started.html) - a popular JS frontend library for building composable and highly reusable component-based UIs for SPA.
* [Redux](https://redux.js.org/) - a standalone JS library for a global state management
* [Redux-Thunk](https://www.npmjs.com/package/redux-thunk) - a middleware that allows to dispatch asyncronous actions in Redux
* [MongoDB](https://www.mongodb.com) - a cross-platform document-oriented database. 
* [Node.js](https://nodejs.org/en/about/) - a back-end JavaScript runtime environment that runs on the V8 engine for a fast execution of JavaScript code outside a web browser.
* [Express.js](https://expressjs.com/) - a back end web application framework for Node.js.
* [Heroku](https://www.heroku.com/) - a fully managed container-based cloud platform used to deploy and run you back-end applications.
* [Netify](https://www.netlify.com/) - builds, deploys and hosts your front-end applications.
* [Material-UI](https://material-ui.com/) - UI component infrastructure and Material Design components for mobile and desktop React web applications.

## Usage
* To clone and run this application, you need **npm/node** installed, **MongoDB** account for managing database, **Heroku** and **Netlify** accounts for **Node.js** and **React** backend and frontend deployments.
* Add your DB **CONNECTION_URI** to the **'.env'** file. From your command line:

````sh
# Install dependencies for server
npm install

# Install dependencies for client
npm run client

# Run the client & server concurrently
npm run dev

# Run the Express server only
npm run server

# Run the React client only
npm run client

# Server runs on http://localhost:5000 and client on http://localhost:3000
````

## Deployment
Inside app 'server' create a new file called **'.gitignore'** and add in there unnecessary for uploading **node_modules/**
Add 1 more file called **'Procfile'** and in there type: **web: npm run start** to make app to start as soon as it's deployed.

##### #Heroku
````sh
# Login in Heroku account and 'Create new app'

# Download and Install Heroku CLI

# From app 'server' terminal login into Heroku CLI
heroku login
heroku git:remote -a <your app name>

# Continue process from 'server' terminal
git add .
git commit -am "first commit"
git push heroku master

# Go to 'client/api/index.js' and replace 'http://localhost:5000/api/posts' with 'url' provided by Heroku API
````

##### #Netlify
````sh
# Sign up to the Netlify
# Click on 'Sites ->'

# Stop app ‘server’, change to the ‘client’ directory and run:
npm run build

# Drag and Drop generated ‘/build’ folder inside a special area in Netlify to process deployment

# After process is completed click the link of the deployed React app provided by notification form
````

## To-do
* Add Node.js Authentication with JWT on login.
