import { NextApiRequest, NextApiResponse } from 'next';

import connectDB from '../../connectDB';
import { ItemModel } from '../../model';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  connectDB();
  const { method } = req;
  if (method !== 'GET') {
    return res.status(405).json({
      isSuccess: false,
      message: '허용되지 않은 메서드 입니다.',
    });
  }

  try {
    const items = await ItemModel.find();
    return res.status(200).json({
      isSuccess: true,
      message: '아이템 조회에 성공하였습니다.',
      result: items,
    });
  } catch {
    return res.status(500).json({
      isSuccess: false,
      message: '아이템 조회에 실패하였습니다.',
    });
  }
}
