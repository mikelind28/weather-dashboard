# Weather Dashboard

## Description

The Weather Dashboard application fetches weather data from OpenWeather's API, allowing users to search for a city and see the weather forecast. Each city is saved to a search history list so that users can easily navigate between their favorites. Cities can be individually deleted from the search history. 

This project was an exercise in retrieving API data using HTTP requests, routing the request through a back end server, and rendering the retrieved data to a webpage. 

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

The application is [deployed live via Render](https://weather-dashboard-yntg.onrender.com/). 

To download and test the application files locally, you will first need to get an API key from OpenWeather and use it as an environment variable in a .env file. 

The repository can be downloaded using:

```
git clone https://github.com/mikelind28/weather-dashboard.git
```

You'll have to install the package dependencies from the weather-dashboard directory using:

```
cd weather-dashboard
npm install
```

You can test the application using ```npm run start:dev``` from the weather-dashboard directory after you've added a .env file with an API key and base URL. 

## Usage

Provide instructions and examples for use. Include screenshots as needed.

To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

    ```md
    ![alt text](assets/images/screenshot.png)
    ```

## Credits

List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.

## License

The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

---

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Features

If your project has a lot of features, list them here.

## How to Contribute

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
