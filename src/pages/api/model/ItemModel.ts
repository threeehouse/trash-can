import mongoose from 'mongoose';

const ItemSchema = new mongoose.Schema({
  imgUrl: {
    type: String,
  },
  title: {
    type: String,
  },
  pray: {
    type: Number,
  },
  userIP: {
    type: String,
  },
});

// mongoose.models = {};
export const model = mongoose.model('Item', ItemSchema);
