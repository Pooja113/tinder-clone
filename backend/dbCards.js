import mongoose from "mongoose";

//db schema

const cardSchema = mongoose.Schema({
  name: String,
  imgUrl: String
})

export default mongoose.model('cards',cardSchema);
