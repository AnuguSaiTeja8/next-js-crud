import mongoose, { Schema } from "mongoose";

const topicSchema = new Schema(
    {
        title: String,
        description: String
    },
    {
        timestamps: true
    }
)
// mongoose.models.Topic ||
const Topic =  mongoose.models.Topic || mongoose.model('Topic', topicSchema)
export default Topic;