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
        "description": "Full-stack group project allowing user to find people to help them complete tasks",
        "image": totaskImage,
        "repo": "https://github.com/rbishop85/toTask",
        "live": "https://to-task-app.herokuapp.com/"
    },
    {
        "id": 2,
        "title": "Whisky Journal",
        "description": "Full-stack group project creating a journal for a user to record details about their favorite scotch whiskies",
        "image": whiskyImage,
        "repo": "https://github.com/rbishop85/whiskey-journal",
        "live": "https://whisky-journal.herokuapp.com/"
    },
    {
        "id": 3,
        "title": "Quote Me Senpai",
        "description": "Group Project utilizing third-party api requests to generate anime quotes",
        "image": quoteImage,
        "repo": "https://github.com/rbishop85/quote-me-senpai",
        "live": "https://rbishop85.github.io/quote-me-senpai/"
    },
    {
        "id": 4,
        "title": "Tech Blog",
        "description": "Full-stack project building a usable tech blog",
        "image": blogImage,
        "repo": "https://github.com/rbishop85/tech-blog",
        "live": "https://rb-hw14-tech-blog.herokuapp.com/"
    },
    {
        "id": 5,
        "title": "Work Day Scheduler",
        "description": "Single day task tracker",
        "image": schedulerImage,
        "repo": "https://github.com/rbishop85/work-day-scheduler",
        "live": "https://rbishop85.github.io/work-day-scheduler/"
    },
    {
        "id": 6,
        "title": "Note Taker",
        "description": "Takes notes and stores on a server-based json file",
        "image": noteImage,
        "repo": "https://github.com/rbishop85/note-taker",
        "live": "https://rb-hw11-note-taker.herokuapp.com/"
    },

];

export default data;