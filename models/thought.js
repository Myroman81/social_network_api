const { Schema, Types } = require('mongoose');

const thoughtSchema = new Schema(
  {
    // How to add an additional custom ObjectId if needed:
    // responseId: {
    //   type: Schema.Types.ObjectId,
    //   default: () => new Types.ObjectId(),
    // },
    thoughtBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = responseSchema;