//this is an object of the portfolio projects that i'll be drawing from
import proj1 from "../images/netflix-clone1.JPG";
import proj2 from "../images/covid-tracker.JPG";
import proj3 from "../images/evernote-clone.JPG";
import proj4 from "../images/chara-gen-sc12.JPG";

export const portProj = [
  {
    name: "Netflix Clone",
    screenshot: proj1,
    repo: "https://github.com/erin-davis/netflix-clone",
    site: "http://erin-davis.github.io/netflix-clone/",
    summary: "This is a clone of Netflix made using React for the front end and Firebase as the back end."
  },
  {
    name: "COVID-19 Tracker",
    screenshot: proj2,
    repo: "https://github.com/erin-davis/covid-19-tracker",
    site: "http://erin-davis.github.io/covid-19-tracker/",
    summary: "This app tracks and shows the daily progress of the COVID-19 pandemic for different countries."
  },
  {
    name: "DND 5E Character Generator",
    screenshot: proj4,
    repo: "https://github.com/erin-davis/chara-generator",
    site: "https://erin-davis.github.io/chara-generator",
    summary: "This app uses various APIs to allow for character generation under Dungeons and Dragons 5th Editions rules."
  },
  {
    name: "Evernote Clone",
    screenshot: proj3,
    repo: "https://github.com/erin-davis/evernote-clone",
    site: "http://erin-davis.github.io/evernote-clone/",
    summary: "Using Firebase, I was able to create a clone of Evernote that works in the browser"
  }
];
