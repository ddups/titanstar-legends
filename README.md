**Table of Contents**

- [Preface](#preface)
- [Requirements and Assumptions](#requirements-and-assumptions)
	- [Requirements](#requirements)
	- [Assumptions](#assumptions)
- [Using the Application](#using-the-application)
	- [Available Scripts](#available-scripts)
- [Implementation Details](#implementation-details)
- [Challenges](#challenges)
- [Future Considerations](#future-considerations)
	- [Potential Enhancements](#potential-enhancements)

---
# Preface
As someone who has more than a little bit of anxiety about "live coding interviews" I was excited when I first received the notification that I would be doing a "take-home" coding exercise. But when I opened the GitHub repo and realized it was a front-end _only_ exercise my intial excitement turned to a mixture of worry and confusion. I was not initially aware that the role I applied to was a front-end role -- due to a small miscommunication during the phone screen -- even though it is something I have always had a passion for. But in that slurry of negative emotions I also had the realization that I now had an amazing opportunity to really prove, to myself and others, how capable I am of learning on the fly and adapting my existing knowledge.

This is, admittedly, my first time creating a React application from the ground up so I knew that I would need to start with a template of some sort. A quick Google search led me to the [Create React App](https://github.com/facebook/create-react-app) tool, which was exactly what I was looking for. At first I laid out the raw HTML elements and styled them with some basic CSS to get an idea of what components I would need to create and how I would set up the React project. From there, I followed tutorials and read the documentation on the [ReactJS website](https://reactjs.org/docs/getting-started.html) and, with the help of _plenty_ more Google searches, I slowly built up my project into a true React application.

Even if this is not a production-quality React app, I am very proud of what I have created. I hope that my attention to detail and consideration for completeness is evident in my solution. I tried to match the given example image as closely as possible, while taking some liberties with regard to spacing, colors, and sizing.

Thank you in advance for you consideration.

---
# Requirements and Assumptions
## Requirements
The project scope is minimal, but there were a number of restrictions to which the project needed to adhere:
1. Style of the submission should match the provided mock.
2. May not use any existing SCSS (SASS), LESS, or CSS frameworks.
3. Must use SCSS (SASS) to demonstrate competency with the language.

There were also a number of functional requirements presented:
1. Left click to add points.
2. Right click to remove points.
3. The user may only use up to 6 points.
4. Each item only accounts for one point.
5. Displays current point total
6. The user must select the items in order.

## Assumptions
1. Initial "seed" data for the application should be received in the form of a JSON file
2. A "connector" should be activated once the following rune has been selected
3. The point value of a rune should be hard-coded (as a constant) to 1
> *Note: based on the given example, this could have gone either way, but this made the most sense to me.*

---
# Using the Application
As previously stated, this project was bootstrapped with the [Create React App](https://github.com/facebook/create-react-app) tool. It provides a full framework for creating a React application with no build configuration.

## Available Scripts
In the project directory, you can run:
### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

---
# Implementation Details
Since this was my first time building a React app from scratch, I tried to aproach the problem from an Agile perspective. As I said in the preface, the first thing I did was lay out the HTML elements in a rough replication of the example image so I would have something to work off. Once I had an idea of how the HTML would look, I started to break things down into individual components. Some things were obvious -- like the point counter -- and some things took a little more thinking. I applied that initial CSS to the components as I went along, with the intention of enhancing it as things came together.

Once I had all the components in place, I started working on the functionality. As I added functions to achieve the required functionality, I reworked the components when necessary. When I felt comfortable with the functionality, I began working on perfecting the style. Some things were very difficult to replicate -- it took me longer than I would like to admit to figure out how to do the "half-gradient" effect on the rune borders. Finally, once I had completed the styling in the manner that I was familiar with, I converted it to an SCSS file and tried to take advantage of some of it's features.

---
# Challenges
As I mentioned in the preface, this is my first time working with React -- though I have experience creating UI elements with pure JavaScript and JQuery -- and as with any project I faced a number of challenges during its development.

- The most obvious challenge was mastering the syntax of React. I had begun taking a few introductory courses on LinkedIn Learning when I first applied for the role, given that React was listed in the preferred skills, but only had a basic understanding of it as a framework. Fortunately, the component-driven nature is similar to the bespoke framework that was used in my previous job where I spent some time working on a couple of front-end projects. My major challenges regarding the React syntax were
    - Understanding hooks -- specifically the State hook -- and how they are used to update variables as things change in the application, like the points used
    - The use of the `key` property -- these warnings persisted in my console until the very end of the project
    - The use of individual `package.json` files for each component -- originally I did not include these and my import statements were much more unruly.
- The second major challenge was demonstrating competency in SCSS. In my previous projects I used LESS, which in some ways is similar, but is also very different from SCSS. I used the documentation on the SASS website to create a number of mixins that were then used throughout the stylesheet. I think I demonstrated competency in CSS, and at least an understanding of the features of SCSS.
- Another challenge for me was determining the layout of the project directories. There seem to be several competing standards out there, and in the end I decided on the one that made the most sense to me: individual component directories, and shared directories for assets and stylesheets. Separating the stylesheets into each component directory seems to have plenty of merit, but ultimately felt too complicated for me.

In the end none of the challenges I faced were insurmountable and I think they helped me learn a lot about React as a framework in general. I look forward to continuing to learn and becoming accustomed to the more advanced features.

---
# Future Considerations
## Potential enhancements
While I was working on the solution, a couple things came to mind as enhancemnents, though they were not necessarily feasible to implement in my final submission.
1. A "Reset Points" button that would clear all spent points and return the rune trees to their initial state.
2. Similarly, a "Reset Tree" option to return all the points for a given tree.
3. A "Share Loadout" feature, since the hypothetical ask for the project is so "players can replicate their in-game loadouts to share with the TitanStar Legends community".
