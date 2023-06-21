const express = require("express");
const path = require("path");
const page_route = require("./routes/page");
const auth_route = require("./routes/authRoutes");
const task_route = require("./routes/taskRoutes");
const feedback_route = require("./routes/feedbackRoute");
const settings_route = require("./routes/settingsRoutes");
const user_route = require("./routes/userRoute");
const calendar_route = require("./routes/calendarRoute");
const cookieParser = require("cookie-parser");
const smtp = require("./services/smtp");

const app = express();

// set route to the ejs file
app.set("views", path.join(__dirname, "public"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

// use as middleware (express)
// it use static file
app.use(express.static(__dirname + "/public/"));
// app.use(express.static(public));
// it takes any json and passed it to the javascript object
app.use(express.json());
// passing cookie data
app.use(cookieParser());

// route
app.use(page_route);
app.use(auth_route);
app.use(task_route);
app.use(feedback_route);
app.use(settings_route);
app.use(user_route);
app.use(calendar_route);

app.listen(3000, () => {
  console.log("Port Connected");
});

setInterval(smtp.scheduleEmail, 5000);