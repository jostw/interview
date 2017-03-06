# Todo List

## Overview

This project includes the following tools.

- [Create React App](https://github.com/facebookincubator/create-react-app)
- [Redux](https://github.com/reactjs/redux)
- [Enzyme](https://github.com/airbnb/enzyme)

## Getting Started

```
cd todo-list/
```

- Make sure [Node.js](https://nodejs.org/) is installed properly.
- Recommend using [Yarn](https://github.com/yarnpkg/yarn).
- Use ` yarn ` for installing all packages.
- Use ` yarn start ` for watching files and developing at ` http://localhost:3000 `.
- Use ` yarn build ` for building production assets.
- Use ` yarn test ` for testing.

## Application Structure

```
.
└── src
    ├── index.js              // Entry of client side render
    │
    ├── containers            // React container components
    │   └── App.js            // Main container component
    │
    ├── components            // React components
    │   ├── TodoForm.js       // Component for creating todo items
    │   ├── TodoFilter.js     // Component for filtering todo items
    │   ├── TodoFilterLink.js // Component of filter link
    │   ├── TodoList.js       // Component for listing todo items
    │   ├── TodoItem.js       // Component of todo item
    │   └── TodoClear.js      // Component for clearing completed todo items
    │
    ├── actions               // Actions in Redux
    │   └── index.js
    │
    ├── reducers              // Reducers in Redux, shaping application state
    │   ├── index.js
    │   ├── todos.js          // State of a list of todo items
    │   ├── filter.js         // State of current filter type
    │   └── i18n.js           // i18n data
    │
    └── store                 // Store in Redux
        └── configureStore.js
```
