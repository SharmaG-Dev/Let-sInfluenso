const mongoose = require("../connections");

const schema = new mongoose.Schema({
  name: String,
  username: String,
  email: String,
  contact: Number,
  password: String,
  avatar: String,
  coverimage: String,
  createdAt: { type: Date, default: new Date() },
  facebook: Object,
  linkedin: Object,
  youtube: Object,
  instagram: Object,
  personal: Object,
});

const model = mongoose.model("influencerUsers", schema);

module.exports = model;
