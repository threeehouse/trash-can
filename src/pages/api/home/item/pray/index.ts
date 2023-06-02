import { NextApiRequest, NextApiResponse } from 'next';

import connectDB from '../../../connectDB';
import { ItemModel } from '../../../model';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  connectDB();
  const { body, method } = req;
  if (!['PATCH'].includes(method ?? '')) {
    return res.status(405).json({
      isSuccess: false,
      message: '허용되지 않은 메서드 입니다.',
    });
  }

  if (!['itemId'].every(property => property in body)) {
    return res.status(400).json({
      isSuccess: false,
      message: '올바르지 않은 필드 값 입니다.',
    });
  }

  const { itemId } = body;

  try {
    const existingItem = await ItemModel.findById(itemId);
    if (!existingItem) {
      return res.status(404).json({
        isSuccess: false,
        message: '아이템을 찾을 수 없습니다.',
      });
    }

    existingItem.pray += 1;
    const result = await existingItem.save();
    return res.status(200).json({
      isSuccess: true,
      message: '아이템 기도하기에 성공하였습니다.',
      result,
    });
  } catch {
    return res.status(500).json({
      isSuccess: false,
      message: '아이템 기도하기에 실패하였습니다.',
    });
  }
}
