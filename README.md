# My Wiki App

## [Check out the deployed version here!](https://giovani-zanett-my-wiki.netlify.app/)

## What this project is about

I'm creating this application as part of a job assignment.

## Technologies used

- React.js
- React-router-dom
- React-autocomplete
- Boostrap
- Axios

## Goals for this project:

- Get this job opportunity
- Make a working application
- Practice React.js
- Showcase a new application on my portfolio.

## Requirements

The challenge requirements can be found **[here](./challenge_instructions.pdf)**.

## Features

- Search for Wikipedia article,
- Create a list of the desired articles
- Update the list of desired articles
- Delete desired articles
- Save desired articles to the user articles list
- Delete Articles
- Persist saved articles using the browser local storage

## Instalation

You easily close this repo on your machine by using one of the following commands:

`git@github.com:giovanizanetti/My-wiki-assignment.git`

or

`https://github.com/giovanizanetti/My-wiki-assignment.git`

Once you have cloned the repo, you can run:
`yarn install` or `npm install` to download all the dependencies needed to the project to work on your machine.

## Decisions

Even though I could use any technology to accomplish this task, I decided to go for React.js. The vacancy I'm applying for is a React Developer position, so I think it would be wise to show that I can work with this technology.

Even though styles were provided, I used a bit of the Bootstrap classes. I believe that is a good opportunity to show that I can work with libraries.

I struggled a bit to get the`<datalist>` HTML5 tag to work with React. I think that it was one of the main things which delayed my process. Therefore, I changed the plan and used the React-autocomplete npm package to accomplish the autocomplete functionality.

In the beginning, I tried to reuse the `AddArticle` component. However, I ended up with a bug in the delete functionality, which took me some time to reason about. However, I decided to create separated components. Even though they look the same, there are some edge cases that would lead to a lot of conditions and maintenance issues. So, they are separated components now but make use of common custom hooks
`useInputChange` and `useFetch`.

To integrate the views and manage route changing, I used the React-router-dom package. The user is redirected to`/wikilist` when submit button is pressed. There are links on the navigation bar to navigate back and forth routes. The links are displayed conditionally depending on the current route.

The user articles are saved on the browser Local Storage. That means the user will not lose the information on page refresh.

My application is deployed with continuous deployment. This is done by, integrating the project's GitHub repo with [Netlify](https://www.netlify.com/).

If you have any feedback, please drop me a line at zanetti.giovani@gmail.com.

## Create React App

This project was scaffolded using the create-react-app CLI.

**[The standard create-react-app docs can be found in here](./REACT-README.md)**

## [Check out the deployed version here!](https://giovani-zanett-my-wiki.netlify.app/)
