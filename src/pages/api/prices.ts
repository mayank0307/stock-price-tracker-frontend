// import type { NextApiRequest, NextApiResponse } from 'next';
// import mongoose from 'mongoose';
// import { Price } from '../../models/Price';
// import { connectToDatabase } from '../../utils/mongodb';

// const handler = async (req: NextApiRequest, res: NextApiResponse) => {
//   const { symbol } = req.query;
  
//   await connectToDatabase();
  
//   try {
//     const prices = await Price.find({ symbol }).sort({ _id: -1 }).limit(20);
//     res.status(200).json(prices);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch prices' });
//   }
// };

// export default handler;
