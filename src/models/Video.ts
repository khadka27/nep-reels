import mongoose, { Schema, model, models } from "mongoose";

// Define standard video dimensions
export const VIDEO_DIMENSIONS = {
  width: 1080,
  height: 1920,
} as const;

// Define TypeScript interface for video documents
export interface IVideo extends mongoose.Document {
  _id: mongoose.Types.ObjectId;
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
  controls?: boolean;
  transformation?: {
    height: number;
    width: number;
    quality?: number;
  };
  createdAt?: Date;
  updatedAt?: Date;
}

// Define video schema
const videoSchema = new Schema<IVideo>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    videoUrl: { type: String, required: true },
    thumbnailUrl: { type: String, required: true },
    controls: { type: Boolean, default: true },
    transformation: {
      height: { type: Number, default: VIDEO_DIMENSIONS.height },
      width: { type: Number, default: VIDEO_DIMENSIONS.width },
      quality: { type: Number, min: 1, max: 100, default: 80 },
    },
  },
  { timestamps: true }
);

// Prevent model re-compilation
const Video = models.Video || model<IVideo>("Video", videoSchema);

export default Video;
