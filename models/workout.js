const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const WorkoutSchema = new Schema({
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    exercise: [
        {
            type: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            duration: {
                type: Number,
                required: true
            },
            weight: Number,
            reps: Number,
            sets: Number,
            distance: Number
        }
    ]
}
);
const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;