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

export const ItemModel = mongoose.models.Item || mongoose.model('Item', ItemSchema);
