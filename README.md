# Rancid Tomatillos
### Table of Contents
- [Overview](#overview-and-project-goals)
- [Project Learning Goals](#project-learning-goals)
- [Instructions for Viewing Project](#instructions-for-viewing-project)
- [How does this work?](#how-does-this-work)
- [Technologies Used](#technologies-used)
- [Accesibility Score](#accesibility-score)
- [Wins](#wins)
- [Challenges](#challenges)
- [Future Features](#future-features)
- [Deployment](#deployment)
- [Authors and Contributors](#credits)

## Overview
The goal of this partner project was to create a website where users can view movie information from a Heroku API. 

## Project Learning Goals
1. Build a solid understanding of React fundamentals. 
2. Retrieve and display data from a Heroku API. 
3. Incorporate Cypress to test React components and asychronous JS. 
4. Practice refactoring a single page application to a multi-page UX using Router


**[Back to top](#table-of-contents)**

## Instructions for Viewing Project
Our application is deployed live on Netlify for easy viewing!
1. Visit https://rancid-tomatillos-sm.netlify.com/



## How does this work?

#### Responsive Design
![Responsive Design](https://media.giphy.com/media/4T0grAc8dKDu4qVFoN/giphy.gif)

#### Search Functionality
![Search Functionality](https://media.giphy.com/media/QxOqIZpGh4hiK30BiN/giphy.gif)



**[Back to top](#table-of-contents)**

## Technologies Used
<p align="left">
  <img src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="javascript" />
  <img src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white" alt="html5"/>
  <img src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"/>
  <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="Github" />
  <img src="https://img.shields.io/badge/-ReactJs-61DAFB?logo=react" alt="React" />
  <img src="https://img.shields.io/badge/-React%20Router-CA4245?logo=react-router" alt="React Router" />
  <p>Heroku API</p>
  <p>Cypress</p>
</p>

## Accessibility Score: 100
* Tested with Lighthouse


## Wins
* Initial application setup takes hours not days with React 
* React Router provides a smooth way to create multi-page applications


## Challenges
* Accounting for bad url paths when incorporating React Router
* Applying a functional network request for the movie trailer from youtube 
* Styling the MoviePage component for movies that had a long description and large amount of keywords 
* Styling the CSS for mobile view edge-cases 


## Future Features
* Add a genre filter functionality 
* Add a Express microservice to store a user's favorite movies 
* Supplement the application with Unit and integration tests by using the React Testing Library

## Deployment

### Local Development
```bash
npm install
npm start
```

### Netlify Deployment
This project is configured for deployment on Netlify with the following setup:

1. **Build Command**: `npm run build`
2. **Publish Directory**: `build`
3. **Node Version**: 16.x

#### Manual Deployment
```bash
npm run build
netlify deploy --prod --dir=build
```

#### Automatic Deployment
Connect your GitHub repository to Netlify for automatic deployments on push to main branch.

The application will be available at: https://rancid-tomatillos-sm.netlify.com/

## Credits
#### Authors
<table>
    <tr>
          <td> Bobby V <a href="https://github.com/hoomberto">GH</td>
    </tr>
    </tr>
 <td><img src="https://avatars.githubusercontent.com/u/78388491?v=4" alt="Bobby GH img"
width="150" height="auto" /></td>
     <tr>
          <td> Shawn McMahon <a href="https://github.com/shawnmcmahon">GH</td>
      </tr>
      </tr>
<td><img src="https://avatars.githubusercontent.com/u/73731359?v=4" alt="Shawn GH img"
width="150" height="auto" /></td>
    </tr>
</table>


**************************************************************************
###### This project was created for [Turing School of Software and Design](https://turing.io/)
###### 2021/07/19
**[Back to top](#table-of-contents)**
