import { Schema, model } from "mongoose";

interface IPhpSession {
  sessionId: string;
}

const phpSessionSchema = new Schema(
  {
    sessionId: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const PhpSession = model<IPhpSession>("PhpSession", phpSessionSchema);

export default PhpSession;
