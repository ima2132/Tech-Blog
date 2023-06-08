# TechTalks 

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contact](#contact)
- [Deployed URL](#deployed-url)

## Description 
Writing about tech can be just as important as making it. Most developers spend some of their time reading and writing about technical concepts, recent advancements, and new technologies. The main objective of this project is to build a CMS-style blog site, in which developers can publish their blog posts and comment on other developers’ posts as well. 

TechTalks follows the MVC paradigm in its architectural structure, using `Handlebars.js` as the templating language, `Sequelize` as the ORM, and the `express-session npm package` for authentication.

## Installation 
To run TechTalks, you will need to have `VS Code` and `Node.js` installed. First, clone the repo. You will then need to install dependencies in order to use TechTalks.

Run the following command in your terminal:

`npm install`

This will install the necessary dependencies to utilize this application.

After installing the necessary dependencies, it is required to seed your database with initial data to properly run the application using the `SQL` schema. This can be achieved by executing the following command:

`mysql -u root -p <db/schema.sql`

After you have initialized your database, run the following command to seed: 

`npm run seed`

You can then start Tech Talks by running the command `npm start`.

* Alternatively, you can use the deployed website by clicking on this link: 

## Usage
This blog serves as an educational and networking platform for individuals in the tech industry. It provides an avenue for people to engage in discussions, share insights, and educate others through their posts and comments.

## License 
Please refer to the LICENSE listed in the repo. 

## Contact
Contact
For any questions about this project, you can contact me at:

GitHub: http://github.com/ima2132

Email: ima2132@columbia.edu

## Deployed URL 
