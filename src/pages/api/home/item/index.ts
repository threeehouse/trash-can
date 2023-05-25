import { NextApiRequest, NextApiResponse } from 'next';

import connectDB from '../../connectDB';
import { ItemModel } from '../../model';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  connectDB();
  const { body, method } = req;
  if (method !== 'POST') {
    return res.status(405).json({
      isSuccess: false,
      message: '허용되지 않은 메서드 입니다.',
    });
  }

  if (!body.imgUrl || !body.title || !body.pray || !body.userIP) {
    return res.status(400).json({ error: '올바르지 않은 필드값 입니다.' });
  }

  const newItem = new ItemModel(body);

  try {
    const item = await newItem.save();
    return res.status(200).json({
      isSuccess: true,
      message: '아이템 등록에 성공하였습니다.',
      result: item,
    });
  } catch {
    return res.status(500).json({
      isSuccess: false,
      message: '아이템 등록에 실패하였습니다.',
    });
  }
}
