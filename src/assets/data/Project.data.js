import whiskyImage from "../images/whiskyjournal.jpg";
import quoteImage from "../images/quoteme.jpg";
import blogImage from "../images/techblog.jpg";
import schedulerImage from "../images/scheduler.jpg"
import noteImage from "../images/notetaker.jpg"
import totaskImage from "../images/totask.jpg"

// Array of objects json objects for individual project info
const data = [
    {
        "id": 1,
        "title": "ToTask",
        "description": "An app allowing users to post tasks they need completed and also assign themselves others' tasks that they are willing to complete.",
        "tech": "HTML, CSS, Javascript, BCrypt, Bootstrap, Express, React, GraphQL, MongoDB, JWT, Mongoose",
        "group": "Group",
        "image": totaskImage,
        "repo": "https://github.com/rbishop85/toTask",
        "live": "https://to-task-app.herokuapp.com/"
    },
    {
        "id": 2,
        "title": "Tech Blog",
        "description": "Full-stack project building a usable tech blog that allows users to create and respond to blog posts.",
        "tech": "HTML, CSS, Javascript, Node.js, Express, Express Handlebars, Express Session, MySQL, BCrypt, Sequelize",
        "group": "Solo",
        "image": blogImage,
        "repo": "https://github.com/rbishop85/tech-blog",
        "live": "https://rb-hw14-tech-blog.herokuapp.com/"
    },
    {
        "id": 3,
        "title": "Whisky Journal",
        "description": "An app for users to record and take notes on their favorite whiskies.",
        "tech": "HTML, CSS, Javascript, Node.js, Express, Express Handlebars, Express Session, MySQL, BCrypt, Sequelize, Chart.js, Bootstrap",
        "group": "Group",
        "image": whiskyImage,
        "repo": "https://github.com/rbishop85/whiskey-journal",
        "live": "https://whisky-journal.herokuapp.com/"
    },
    {
        "id": 4,
        "title": "Note Taker",
        "description": "A basic app to take and store notes on a server-based json file.",
        "tech": "HTML, CSS, Javascript, Node.js, Express",
        "group": "Solo",
        "image": noteImage,
        "repo": "https://github.com/rbishop85/note-taker",
        "live": "https://rb-hw11-note-taker.herokuapp.com/"
    },
    {
        "id": 5,
        "title": "Quote Me Senpai",
        "description": "A website that allows the user to test their anime quote knowledge as well as view random quotes utilizing a third-party api.",
        "tech": "HTML, CSS, Javascript, Materialize, Nekos Best API, AnimeChan API",
        "group": "Group",
        "image": quoteImage,
        "repo": "https://github.com/rbishop85/quote-me-senpai",
        "live": "https://rbishop85.github.io/quote-me-senpai/"
    },
    {
        "id": 6,
        "title": "Work Day Scheduler",
        "description": "A single day task tracker that utilizes local storage.",
        "tech": "HTML, CSS, Javascript, Bootstrap, jQuery, Moments.js",
        "group": "Solo",
        "image": schedulerImage,
        "repo": "https://github.com/rbishop85/work-day-scheduler",
        "live": "https://rbishop85.github.io/work-day-scheduler/"
    },

];

export default data;