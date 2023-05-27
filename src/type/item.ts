import { ObjectId } from 'mongoose';

export type Item = {
  _id: ObjectId;
  imgUrl: string;
  pray: number;
  title: string;
  userIP: string;
};
