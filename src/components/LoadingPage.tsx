"use client";

const LoadingPage = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-10 flex flex-col items-center justify-center z-50">
      <div className="w-12 h-12 border-4 border-t-transparent border-neutral-700 rounded-full animate-spin"></div>
      <p className="mt-4 text-neutral-700 text-lg font-semibold">Loading...</p>
    </div>
  );
};

export default LoadingPage;
