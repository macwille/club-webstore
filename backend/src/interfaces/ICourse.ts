import { Document, Schema, Date } from 'mongoose';

interface ICourse extends Document {
  name: string,
  description?: string,
  startDate?: Date,
  euros?: number,
  cents?: number,
  maxParticipants?: number,
  trainer?: Schema.Types.ObjectId,
  participants?: Schema.Types.ObjectId
}

export default ICourse;