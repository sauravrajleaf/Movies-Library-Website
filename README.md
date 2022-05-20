# Movies-Library-Website

<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![LinkedIn][linkedin-shield]](https://www.linkedin.com/in/rajsaurav/)



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/sauravrajleaf/Movies-Library-Website">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center"> Movies Library Website
</h3>

  <p align="center">
    project_description
    <br />
    <a href="https://github.com/github_username/repo_name"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/github_username/repo_name">View Demo</a>
    ·
    <a href="https://github.com/github_username/repo_name/issues">Report Bug</a>
    ·
    <a href="https://github.com/github_username/repo_name/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

The movie app helps you show the movie you are looking for and also to make a favorite list of your own with the my list feature in it. 
<p align="right">(<a href="#top">back to top</a>)</p>



## Tech Stack
### Frontend
* [HTML](https://www.w3schools.com/html/)
* [CSS](https://www.w3schools.com/css/)
* [React.js](https://reactjs.org/)

### Backend
* [Node.js](https://nodejs.org/en/)
* [Express.js](https://expressjs.com/)

### Database
* [MongoDb Atlas](https://www.mongodb.com/atlas/database)



<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* List of softwares need to be installed before installation step.
1. npm 
2. nodejs
3. git

### Installation

1. Get a free API Key at (http://www.omdbapi.com/)
2. Clone the repo
   ```sh
   git clone https://github.com/sauravrajleaf/Movies-Library-Website
   ```
3. Change your current directory to cloned folder
   ```sh
   cd Movies-Library-Website
   ```
4. Install NPM packages of root directory 
   ```sh
   npm install
   ```
5. Change your current directory to frontend folder
   ```sh
   cd frontend
   ```
6. Install NPM packages of frontend directory 
   ```sh
   npm i
   ```
   
7. Enter your details in .env file in the root directory of project folder
    ```js
    NODE_ENV = development
    PORT = 5000
    REACT_APP_CLIENT_SECRET = {your api key)
    MONGO_URI = {enter your mongodb connection uri}
    JWT_SECRET = {enter any text}
    ```
8. In your terminal in the root directory of project folder
    ```sh
    npm run dev
    ```
   The frontend server will start on http://localhost:3000 and the backend server will start on http://localhost:5000

<p align="right">(<a href="#top">back to top</a>)</p>


## Endpoints

HTTP verbs, or methods, should be used in compliance with their definitions under the [HTTP/1.1](http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html) standard.
The action taken on the representation will be contextual to the media type being worked on and its current state. Here's an example of how HTTP verbs map to create, read, update, delete operations in a particular context:
| Function      | Request Type  | Route  |
| ------------- |:-------------:| -----:|
| Get data of logged in user| GET | /api/auth |
| Login a user      | POST      |   /api/auth |
| Register a user | POST     |    /api/users |
| Search for a movie | GET     |    /api/data/${searchValue} |




<!-- USAGE EXAMPLES -->
<!-- ## Usage -->
<!-- 
Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#top">back to top</a>)</p>
 -->


<!-- ROADMAP -->
<!-- ## Roadmap -->
<!-- 
- [ ] Feature 1
- [ ] Feature 2
- [ ] Feature 3
    - [ ] Nested Feature

See the [open issues](https://github.com/github_username/repo_name/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p> -->





<!-- CONTACT -->
## Contact

Project Link:(https://github.com/sauravrajleaf/Movies-Library-Website)

<p align="right">(<a href="#top">back to top</a>)</p>



<p align="right">(<a href="#top">back to top</a>)</p>


