import { NextApiRequest, NextApiResponse } from 'next';

import connectDB from '../../connectDB';
import { ItemModel } from '../../model';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  connectDB();
  const { body, method, query } = req;
  if (!['POST', 'DELETE', 'GET'].includes(method ?? '')) {
    return res.status(405).json({
      isSuccess: false,
      message: '허용되지 않은 메서드 입니다.',
    });
  }

  if (method === 'GET') {
    const { itemId } = query;
    try {
      const item = await ItemModel.findOne({ _id: itemId });
      return res.status(200).json({
        isSuccess: true,
        message: '아이템 조회에 성공하였습니다.',
        result: item,
      });
    } catch {
      return res.status(500).json({
        isSuccess: false,
        message: '아이템 조회에 실패하였습니다.',
        result: itemId,
      });
    }
  }

  if (method === 'DELETE') {
    const { itemId } = query;
    try {
      const item = await ItemModel.deleteOne({ _id: itemId });
      return res.status(200).json({
        isSuccess: true,
        message: '아이템 삭제에 성공하였습니다.',
        result: item,
      });
    } catch {
      return res.status(500).json({
        isSuccess: false,
        message: '아이템 삭제에 실패하였습니다.',
      });
    }
  }

  if (!['imgUrl', 'title', 'pray', 'userIP'].every(property => property in body)) {
    return res.status(400).json({
      isSuccess: false,
      message: '올바르지 않은 필드 값 입니다.',
    });
  }

  try {
    const newItem = new ItemModel(body);
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
