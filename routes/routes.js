const Workout = require("../models/workout");
var path = require("path");

module.exports = function (app) {
    app.get("/exercise", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });
    app.get("/stats", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });
    //displays in raw json to the webpage for testing only, no function in webpage
    app.get("/all", (req, res) => {
        Workout.find({}, (error, data) => {
            if (error) {
                res.send(error);
            } else {
                res.json(data);
            }
        });
    });
    app.get("/all2", (req, res) => {
        Workout.find({})
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        });
    });

    app.get("/api/workouts/range", (req, res) => {
        console.log("get workouts");
        Workout.find({})
            .then(data => {
                res.json(data);
                // console.log("data");
                // console.log(data);
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.post("/api/workouts", (req, res) => {
        console.log("post new workout");
        const workout = new Workout(req.body);
        console.log(workout);
        Workout.create(workout)
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.put("/api/workouts/:id", (req, res) => {
        console.log("updating workout by param");
        Workout.findOneAndUpdate(
            {
                _id: req.params.id
            },
            {
                $push: {
                    exercises: req.body
                }
            }
        )
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.json(err);
            });
    });
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
};