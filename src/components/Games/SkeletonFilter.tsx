"use client";

const SkeletonFilter = () => {
  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 sd:h-[50px] md:h-[100px] lg:h-[185px]">
      <h1 className="text-2xl font-bold text-gray-800 py-6 uppercase lg:capitalize">
        Top Sellers
      </h1>
      <div className="flex items-center space-x-2 translate-y-2 justify-center lg:justify-end">
        <span className="text-gray-600 text-lg font-bold">Genre</span>
        <span className="text-gray-400">|</span>
        <div className="relative">
          <div className="w-36 h-8 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonFilter;
