# habit-tracker-mern-victory

# 🚀 Javascript full-stack 🚀

## MERN Stack

### React / Express / MongoDB / Redux

https://github.com/coding-to-music/habit-tracker-mern-victory

https://habit-tracker-mern-victory.herokuapp.com

by MrsKamran https://github.com/MrsKamran

https://github.com/MrsKamran/habit-tracker

# Vision: Habit Tracking App

<br/>
<br/>

2021 is going to start soon. It is a great idea to make vision board for new year, make new habits, resolutions, affirmations and manage time to practise those habits. This app provides you a simple interface where you can login and start your own vision board. You can add new habits with affirmations and inspiring photos which can be updated later on. To each habit you can add new sessions every time you pratice and see your progress in bar chart. Each habit displays a randomly fetched quote for further inspiration. On vision board you can also see how much time you are giving to pratise each habit and how much time of the day is being tracked.

Enjoy!

## Screenshots:

#### Home Page:

![Home Page](./public/images/home_page.png)

#### Vision Board:

![Vision Board](./public/images/vision_board.png)

#### Duration to practice each habit:

![Bar Chart](./public/images/bar_chart.png)

#### Percentage time for each habit:

![Pie Chart](./public/images/pie_chart.png)

#### Quotes for more motivation:

![Quote](./public/images/quote.png)

## Technologies Used:

React, NodeJS, Express, React Calendar for dates/times, React-Vector for charts, Quotes APIs, Bootstrap, Postman, Mongo Atlas, Heroku

## Repo Links:

### github: https://github.com/MrsKamran/habit-tracker

### heroku: https://habit-tracker-dec2020.herokuapp.com/

### Instructions:

Sign up and log in to the app. Click on vision board and then add habit icon.
Once form is filled, habit card is generated on vision board where you can edit, delete or view the details of habit.
Once you click on habit page you'll find your affirmation along with the quote.
You can click on calendar to choose a date when you practise that habit and enter duration in minutes. Then click on view sessions button and you can view the last seven sessions along with their duration.
When you go back to vision board, you'll find all the habits being tracked along with their relative percentage calculated from last seven sessions' record assuming a week with one session every day. You will also observe how much time is being tracked in the app.
<br/>

## Planned Future Enhancements:

Following are some enhancements in line:

<ul>
  <li>Implement Image uplaod API.</li>
  <li>Timer to practice habits</li>
  <li> Video upload for guided meditations or exercises</li>
</ul>

## Technology Stack

- React js
- Node js
- Express js
- MongoDB
- MapBox, React Mapbox-gl
- Heroku
- Netlify
- Flexbox
- Material-ui

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## GitHub

```java
git init
git add .
git remote remove origin
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:coding-to-music/habit-tracker-mern-victory.git
git push -u origin main
```

## Heroku

```java
heroku create habit-tracker-mern-victory
```

## Heroku MongoDB Environment Variables

```java
heroku config:set

heroku config:set MONGODB_URI="mongodb+srv://<userid>:<password>@cluster0.zadqe.mongodb.net/habit-tracker-mern-victory?retryWrites=true&w=majority"
heroku config:set PASSWORD="something-secret"

heroku config:set PUBLIC_URL="https://habit-tracker-mern-victory.herokuapp.com"
```

## Push to Heroku

```java
git push heroku

# or

npm run deploy
```

### Heroku Buildpack

See this repo for more info about setting up a node/react app on heroku:

https://github.com/mars/heroku-cra-node

```java
heroku buildpacks

heroku buildpacks --help

heroku buildpacks:clear

```

```java
heroku buildpacks
```

Output:

```java
=== habit-tracker-mern-victory Buildpack URL
heroku/nodejs
```

### Notice we are doing a SET and then and ADD

```java
heroku buildpacks:set heroku/nodejs

heroku buildpacks:add mars/create-react-app
```

Output:

```java
Buildpack added. Next release on habit-tracker-mern-victory will use:
  1. heroku/nodejs
  2. mars/create-react-app
Run git push heroku main to create a new release using these buildpacks.
```

### Lets try reversing the order

```java
heroku buildpacks:set mars/create-react-app

heroku buildpacks:add heroku/nodejs
```

```java
heroku buildpacks
```

Output:

```java
=== habit-tracker-mern-victory Buildpack URL
heroku/nodejs
```

### Push to Heroku

```
git push heroku
```

## Error:

```java
2022-04-09T03:12:56.076028+00:00 app[web.1]: ls: cannot access '/app/build/static/js/*.js': No such file or directory
2022-04-09T03:12:56.076252+00:00 app[web.1]: Error injecting runtime env: bundle not found '/app/build/static/js/*.js'. See: https://github.com/mars/create-react-app-buildpack/blob/master/README.md#user-content-custom-bundle-location
2022-04-09T03:12:56.253505+00:00 app[web.1]: Starting log redirection...
2022-04-09T03:12:56.253698+00:00 app[web.1]: Starting nginx...
```

Attempted this:

```java
heroku config:set JS_RUNTIME_TARGET_BUNDLE=./client/build/static/js/*.js

heroku config:set JS_RUNTIME_TARGET_BUNDLE=/build/static/js/*.js

# and to remote it:

heroku config:unset JS_RUNTIME_TARGET_BUNDLE

```

## update npm packages

```java
npm install -g npm-check-updates
```

Output:

```java
removed 3 packages, changed 263 packages, and audited 264 packages in 10s

29 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

```java
ncu -u
```

Output:

```java
Upgrading /mnt/volume_nyc1_01/habit-tracker-mern-victory/package.json
[====================] 15/15 100%

 axios                ^0.21.0  →  ^0.26.1
 bcrypt                ^5.0.0  →   ^5.0.1
 body-parser          ^1.19.0  →  ^1.20.0
 cookie-parser         ^1.4.5  →   ^1.4.6
 dotenv                ^8.2.0  →  ^16.0.0
 express              ^4.17.1  →  ^4.17.3
 express-fileupload    ^1.2.0  →   ^1.3.1
 js-cookie             ^2.2.1  →   ^3.0.1
 mongoose            ^5.10.13  →  ^6.2.10
 nodemon               ^2.0.6  →  ^2.0.15
 reactjs-popup         ^2.0.4  →   ^2.0.5
 validator           ^13.1.17  →  ^13.7.0

Run npm install to install new versions.
```

```java
npm install
```

Output:

```java
added 58 packages, removed 42 packages, changed 89 packages, and audited 299 packages in 7s

32 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

## Client directory

```java
cd client

ncu -u
```

```java
Upgrading /mnt/volume_nyc1_01/habit-tracker-mern-victory/client/package.json
[====================] 18/18 100%

 @testing-library/jest-dom     ^5.11.4  →  ^5.16.4
 @testing-library/react        ^11.1.0  →  ^13.0.0
 @testing-library/user-event  ^12.1.10  →  ^14.0.4
 axios                         ^0.21.0  →  ^0.26.1
 dotenv                         ^8.2.0  →  ^16.0.0
 js-cookie                      ^2.2.1  →   ^3.0.1
 node-sass                     ^4.14.1  →   ^7.0.1
 react                         ^17.0.1  →  ^18.0.0
 react-dom                     ^17.0.1  →  ^18.0.0
 react-redux                    ^7.2.2  →   ^7.2.8
 react-router-dom               ^5.2.0  →   ^6.3.0
 react-scripts                   4.0.0  →    5.0.0
 reactjs-popup                  ^2.0.4  →   ^2.0.5
 redux                          ^4.0.5  →   ^4.1.2
 redux-thunk                    ^2.3.0  →   ^2.4.1
 web-vitals                     ^0.2.4  →   ^2.1.4

Run npm install to install new versions.
```
