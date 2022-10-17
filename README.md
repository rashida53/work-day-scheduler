# work-day-scheduler

This repository has the HTML, CSS and JavaScript code for the Third Party API Challenge for Module 5. It is a work day planner that has timeblocks for the business hours in a day and allows user to enter events and stores them in local storage. It also dynamically updates the date on the page using the `moment.js` library.

## Contents

The files have the following contents -

- index.html - Has the HTML code and it contains CDNS for `bootstrap`, `jquery`, `moment.js` and `font awesome`. 
- style.css - Has the CSS code for the html page containing styles for the entire application. (This application also uses styles from bootstrap)
- script.js - Contains the JavaScript code written in order to execute the functionality of the work day planner.

## Components of the JavaScript code

- The timeblocks have been created dynamically using `jquery` within a for loop.
- Each element is assigned a unique ID as the for loop runs.
- `($this)` is used for easy DOM traversal  
- `moment.js` is used to display current date and to fetch the current hour.
- `localStorage` has been used to store events and display them on the screen.
- The save button icon is applied using `font awesome`

## How to get a copy of this repository

- Clone the git repository from this [folder](https://github.com/rashida53/work-day-scheduler)
- Open the local copy on VS code using the terminal
- Any changes can be made on this text editor

## Using terminal to upload on Github

- Use `git add .` to add files to the repository
- Use `git commit` to describe the changes made
- Use `git push origin main` to push up the changes to github

### The following image shows the web application's appearance and functionality:

![screenshot](https://github.com/rashida53/work-day-scheduler/blob/main/work-day-scheduler.png?raw=true)

## Deployment

This website has been deployed to this [URL](https://rashida53.github.io/work-day-scheduler) using Github pages.