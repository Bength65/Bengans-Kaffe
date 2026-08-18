import mongoose from 'mongoose';

const BlockSchema = new mongoose.Schema({
  index: Number,
  timestamp: String,
  transactions: Array,
  previousHash: String,
  hash: String
});

export const BlockModel = mongoose.model('Block', BlockSchema);
