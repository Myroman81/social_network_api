const { Schema, model } = require('mongoose');

// Schema to create Student model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      max_length: 12,
    },
    email: {
      type: String,
      required: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "A valid email address is required",
      ],
    },
//     github: {
//       type: String,
//       required: true,
//       max_length: 50,
//     },
//     assignments: [assignmentSchema],
//   },
//   {
    toJSON: {
      getters: true,
    },
  }
);
// userSchema
//   .virtual('fullName')
//   // Getter
//   .get(function () {
//     return `${this.first} ${this.last}`;

const User = model('User', userSchema);

module.exports = User;