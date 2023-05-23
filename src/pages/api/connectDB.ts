import mongoose from 'mongoose';

export default function connectDB() {
  mongoose.connect('mongodb://localhost:27017/trashCan');
  const db = mongoose.connection;

  db.on('error', function () {
    console.log('Connection Failed!');
  });

  db.once('open', function () {
    console.log('Connected!');
  });
}
