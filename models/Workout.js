const mongoose = require("mongoose")
const Schema = require(mongoose.Schema)
const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: Date.now
        },
        excercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: "Enter the type of excercise"
                },
                name: {
                    type: String,
                    trim: true,
                    required: "Enter the name of the excercise"
                },
                duration: {
                    type: Number,
                    default: 0
                },
                weight: {
                    type: Number,
                    default: 0
                },
                reps: {
                    type: Number,
                    default: 0
                },
                sets: {
                    type: Number,
                    default: 0
                },
                distance: {
                    type: Number,
                    default: 0
                }
            }
        ]
    }
)
const Workout = mongoose.model("Workout", workoutSchema)
module.exports = Workout