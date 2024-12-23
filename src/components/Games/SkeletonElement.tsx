"use client";

const SkeletonElement = () => {
  return (
    <div className="w-full sm:w-[327px] md:w-[360px] lg:w-[380px] h-[436px] border border-gray-300 rounded-2xl overflow-hidden shadow-sm p-6 animate-pulse">
      <div className="relative w-full h-[240px] bg-gray-200 rounded-t-lg"></div>
      <div className="py-4">
        <div className="w-1/3 h-4 bg-gray-200 rounded mb-2"></div>
        <div className="flex justify-between items-center mb-4">
          <div className="w-1/2 h-4 bg-gray-200 rounded"></div>
          <div className="w-1/4 h-4 bg-gray-200 rounded"></div>
        </div>
        <div className="w-full h-[56px] bg-gray-200 rounded-lg"></div>
      </div>
    </div>
  );
};

export default SkeletonElement;
