# Points of Interest Application

A simple application to manage Points of Interest on a map.

## Summary
![Application mockup](https://docs.google.com/drawings/d/e/2PACX-1vSAj9UrxRpLNDDBy0Dz1zN0wnVDo5lscJjMApWHPGvID8RemTphHCGKXFf3GZul16vORiiBUURxbGmi/pub?w=1654&h=673)

This application tracks points of interest for users. Users can add points with a latitude, longitude and a description. Points are rendered on the map at whatever coordinates the user entered. Clicking on a point will load its details into the form for modification or removal. A count of all points is given at the top of the application.

## Instructions

Fork this repo and build the application outlined in the summary using Typescript, React and Mapbox. This project is a blank Typescript React app created using [Create React App](https://create-react-app.dev). Only Mapbox dependencies have been added. So this project is ready for development and can be started using `npm run start`.

The only requirement is to use Typescript, React and Mapbox to build the application. Any other technologies, such as state management or UI libraries, can be freely used. The above mockup is just that, a mockup, and strict adherence to is not required so long as function of the application, given in the summary, is preserved. So any and all UI/UX can be improved.

Mapbox resources are given below with a specific example of putting markers on the map.

## Resources
 * Adding Markers Example - https://docs.mapbox.com/mapbox-gl-js/example/geojson-markers/
 * Clicking on marker example- https://docs.mapbox.com/mapbox-gl-js/example/popup-on-click/
 * Additional Mapbox Examples - https://docs.mapbox.com/mapbox-gl-js/example/

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
