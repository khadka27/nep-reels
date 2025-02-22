import { IVideo } from "@/models/Video";
import VideoComponent from "@/app/components/VideoComponents";
import SkeletonLoader from "./SkeletonLoader";

interface VideoFeedProps {
  videos: IVideo[];
  isLoading: boolean; // Add an isLoading prop to control the display of skeletons
}

export default function VideoFeed({ videos, isLoading }: VideoFeedProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {isLoading
        ? // Display 8 skeleton loaders when data is loading
          Array.from({ length: 8 }, (_, index) => (
            <SkeletonLoader key={index} />
          ))
        : videos.map((video) => (
            <VideoComponent key={video._id?.toString()} video={video} />
          ))}

      {!isLoading && videos.length === 0 && (
        <div className="col-span-full text-center py-12">
          <p className="text-base-content/70">No videos found</p>
        </div>
      )}
    </div>
  );
}
