import mongoose, { Schema, Document } from 'mongoose';

export interface IUser  {
  first_name: string;
  last_name: string;
  profile: string;
  
  image: string;
}
export interface IUserModel extends IUser, Document{}
const UserSchema: Schema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  profile: { type: String, required: true },
  
  image: { type: String, required: false },
},
{
  versionKey : false
}
);

export default mongoose.model<IUser>('User', UserSchema);
