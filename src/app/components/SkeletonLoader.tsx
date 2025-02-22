import React from "react";

const SkeletonLoader: React.FC = () => {
  return (
    <div className="animate-pulse">
      <div className="bg-gray-300 h-48 rounded-md"></div>
      <div className="mt-2 h-4 bg-gray-300 rounded"></div>
      <div className="mt-1 h-4 bg-gray-300 rounded w-2/3"></div>
    </div>
  );
};

export default SkeletonLoader;
