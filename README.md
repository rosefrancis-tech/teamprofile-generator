# Team Profile Generator
   
[![License](https://img.shields.io/badge/License-MIT-yellow)](https://choosealicense.com/licenses/mit/) 
    
## Table of Contents
* [Description](#Description)
* [User Story](#User-Story)
* [Acceptance Criteria](#Acceptance-Criteria)
* [Live project](#Live-project)
* [GitHub Repository](#GitHub-Repository)
* [Installation](#Installation)
* [Usage Video](#Usage-Video)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [License](#License)

## Description 
This interactive project generates a webpage by accepting inputs from the user in command line/terminal.

**Built With**
* JavaScript ES5  
* JavaScript ES6  
* Node.js  
* npm inquirer
* jest
* Bootstrap

![Mock-up image](/assets/images/mock-up.png "Mock-up image")
## User Story
<details>
<summary>Expand</summary>  

    AS A manager
    I WANT to generate a webpage that displays my team's basic info
    SO THAT I have quick access to their emails and GitHub profiles 
</details>

## Acceptance Criteria
<details>
<summary>Expand</summary> 
    
    GIVEN a command-line application that accepts user input
    WHEN I am prompted for my team members and their information
    THEN an HTML file is generated that displays a nicely formatted team roster based on user input
    WHEN I click on an email address in the HTML
    THEN my default email program opens and populates the TO field of the email with the address
    WHEN I click on the GitHub username
    THEN that GitHub profile opens in a new tab
    WHEN I start the application
    THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
    WHEN I enter the team manager’s name, employee ID, email address, and office number
    THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
    WHEN I select the engineer option
    THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
    WHEN I select the intern option
    THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
    WHEN I decide to finish building my team
    THEN I exit the application, and the HTML is generated
</details>

## Live Project
This is a Node.js application that runs from a machine.   
[View sample html file](https://github.com/rosefrancis-tech/teamprofile-generator/blob/develop/dist/index.html) on github generated using this application.  
Please follow [installation](#Installation) and [usage](#Usage-Video) sections for using this application.

## GitHub Repository
The project's repo link: https://github.com/rosefrancis-tech/teamprofile-generator

## Installation
>   Install Node.js from nodejs.org.  
>   Download the [repo](https://github.com/rosefrancis-tech/teamprofile-generator) to your local machine and run it from the Terminal/Command line.  
>   For the first time, install npm by typing 'npm install' in the terminal from the root of the repo.   

## Usage Video
Please check the [video](https://drive.google.com/file/d/16L5vlHsR6Rt0dfGbjmx3fT54g0w37cLb/view?usp=sharing) for usage instructions.

## Contributing
Contributions welcome.
Please note that this project is released with a [Contributor Code of Conduct](https://www.contributor-covenant.org/version/2/0/code_of_conduct/ "contributor-covenant.org"). By participating in this project you agree to abide by its terms.

## Tests
Run test by typing ' npm run test ' in the terminal.
![Test](/assets/images/test.gif "test demo")

## License   
The ***entire*** project is licensed under [MIT license](https://choosealicense.com/licenses/mit/).      
