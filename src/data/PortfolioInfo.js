//this is an object of the portfolio projects that i'll be drawing from
import proj1 from "../images/netflix-clone1.JPG";
import proj2 from "../images/covid-tracker.JPG";
import proj3 from "../images/projectimg3.jpg";
import proj4 from "../images/projectimg4.jpg";
import proj5 from "../images/projectimg5.jpg";
import proj6 from "../images/projectimg6.jpg";

export const portProj = [
  {
    name: "Netflix Clone",
    screenshot: proj1,
    repo: "https://github.com/erin-davis/netflix-clone",
    site: "https://fake-netflix.herokuapp.com",
    summary: "This is a clone of Netflix made using React for the front end and Firebase as the back end."
  },
  {
    name: "COVID-19 Tracker",
    screenshot: proj2,
    repo: "https://github.com/erin-davis/covid-19-tracker",
    site: "link the deployed site here",
    summary: "This app tracks and shows the progress of COVID-19 for different countries."
  },
  {
    name: "DnD 5E Character Generator",
    screenshot: proj4,
    repo: "https://github.com/erin-davis/chara-generator",
    site: "link the deployed site here",
    summary: "This app uses various APIs to allow for character generation under Dungeons and Dragons 5th Editions rules."
  },
  {
    name: "Evernote Clone",
    screenshot: proj3,
    repo: "https://github.com/erin-davis/evernote-clone",
    site: "link the deployed site here",
    summary: "Using Firebase, I was able to create a clone of Evernote that works in the browser"
  }
];
