import mongoose from 'mongoose';

export const ItemSchema = new mongoose.Schema({
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
export const ItemModel = mongoose.model('Item', ItemSchema);
