import mongoose from "mongoose";

const channelMessageSchema = new mongoose.Schema(
    {
        id_channel: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Channel',
            required: true
        },
        id_sender: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        content: {
            type: String,
            default: true,
        },
        created_at: {
            type: Date,
            default: Date.now,
            required: true
        }
    }
)

const ChannelMessage= mongoose.model('ChannelMessage', channelMessageSchema);

export default ChannelMessage;