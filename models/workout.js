const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                required: true
            },
            name: {
                type: String,
                trim: true,
                required: "Enter a name for transaction"
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

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;