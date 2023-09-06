# Redux basic concepts

## What is Redux?

A state management system for cross-component or app-wide state management

## What is cross-component or app-wide state?

Normally you have 3 ways to store state in React:

1) Local State

    State that belongs to a single components.

    Requires: usesState(); useReducer();

2) Cross-Component State

    State that affects multiple components.

    Requires: prop chains/ prop drilling

3) App-Wide State

    State that affect the entire app (most/all components)

    Requires: prop chains/ prop drilling


To solve problem for (2) and (3) we can also user:
 - React Context
 - Redux

*Good to know: you can still both use both in the same application, for example you could use Redux for the wide app, and React Context for a specific part of the app.*

### Why do we need Redux if we have React Context?

Potential disadvantages of React Context:

- Performance issue (React Context is not optimized for high-frequency state change)
- You can have a very complex setup and then managing state becomes complex (for very big app, enterprise level)



```
// example: multiple context 

 return (
        <AuthContextProvider>
            <ThemeContextProvider>
                <AnotherContextProvider>
                    <...>
                        </App>
                    </...>
                </AnotherContextProvider>
            </ThemeContextProvider>
        </AuthContextProvider>
 )
```

 or a single context that manage everything!

React context is not really a replacement for Redux.



## Core Redux Concepts
- Central Data State (1 Store)

- The component subscribe to a data change event in the store
- The component never change the data directly, but it use a reducer (which is a function responsible for mutating the data)
- The component dispatch an action, which is forwarded to the Reducer Function, which get the state, mutate, and return a new state that will replace the existing state in the store, the subscribed components are notified of the change.

> PS: createStore() is deprecated. We will use it anyway to understand how Redux works underneath.


# Exercise 1: Use Reducer without React

The Reducer should be a pure function (which means that the same inputs leads to same output)

Inputs: Old State + Dispatched Action
Output: New State Object

```node exercise1/src/1.js```

```node exercise1/src/2.js```

# Exercise 2: Use Redux with react-redux

1) We've separated the reducer in its own file
2) Exporting the store from the src/store/index.js file
3) Importing the store in the src/index.js file
4) Adding the store to the Provider Component, which is used as parent component of the entire app
4) Using the custom hooks from react-redux in the Counter component

```cd exercise2```

```npm start```

