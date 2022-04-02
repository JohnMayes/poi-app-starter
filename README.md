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

- Adding Markers Example - https://docs.mapbox.com/mapbox-gl-js/example/geojson-markers/
- Clicking on marker example- https://docs.mapbox.com/mapbox-gl-js/example/popup-on-click/
- Additional Mapbox Examples - https://docs.mapbox.com/mapbox-gl-js/example/

# TO-DO

- UI rehaul
- Add marker layers
  - _bug_ setPlaces passing strings instead of numbers?
