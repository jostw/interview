# Hahow Recruit App

## Overview

This project includes the following tools.

- [Create React App](https://github.com/facebookincubator/create-react-app)
- [Redux](https://github.com/reactjs/redux)
- [Redux Saga](https://github.com/redux-saga/redux-saga)
- [React Router](https://github.com/ReactTraining/react-router)
- [Enzyme](https://github.com/airbnb/enzyme)

## Getting Started

First, clone this project.

```
git clone https://github.com/jostw/hahow-recruit.git
```

- Make sure [Node.js](https://nodejs.org/) is installed properly.
- Recommend using [Yarn](https://github.com/yarnpkg/yarn).
- Use ` yarn start ` for watching files and developing at ` http://localhost:3000 `.
- Use ` yarn build ` for building production assets and start a server at port 3000 with server side rendered.
- Use ` yarn test ` for testing.

## Application Structure

```
.
├── src
│   ├── index.js              // Entry of client side render
│   ├── routes.js             // Route settings for React Router
│   ├── api.js                // Function related to api access
│   │
│   ├── containers            // React container components
│   │   └── App.js            // Main container component
│   │
│   ├── components            // React components
│   │   ├── HeroList.js       // Component that shows a list of hero cards
│   │   ├── HeroCard.js       // Component that shows hero's image and name
│   │   ├── HeroProfile.js    // Component that display hero's profile
│   │   └── HeroStats.js      // Component that can adjust hero's stats
│   │
│   ├── actions               // Actions in Redux
│   │   └── index.js
│   │
│   ├── sagas                 // Sagas in Redux Saga, handling async actions
│   │   └── index.js
│   │
│   ├── reducers              // Reducers in Redux, shaping application state
│   │   ├── index.js
│   │   ├── heroReducer.js    // State of hero, including a list of heroes and the profile of the hero on current page
│   │   └── i18nReducer.js    // i18n data
│   │
│   └── store                 // Store in Redux
│       └── configureStore.js
│
└── app.js                    // Server that serves production files and server side rendered html
```
