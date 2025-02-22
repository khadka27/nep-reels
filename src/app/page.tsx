"use client";

import React, { useEffect, useState } from "react";
import VideoFeed from "@/app/components/VideoFeed";
import { IVideo } from "@/models/Video";
import { apiClient } from "@/lib/api-client";

export default function Home() {
  const [videos, setVideos] = useState<IVideo[]>([]);
  const [isLoading, setLoading] = useState(true); // Add a loading state

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const data = await apiClient.getVideos();
        setVideos(data);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
      setLoading(false); // Set loading to false once data is fetched or error occurs
    };

    fetchVideos();
  }, []);

  return (
    <main className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8 text-primary">NepReels</h1>
      <VideoFeed videos={videos} isLoading={isLoading} />
    </main>
  );
}
