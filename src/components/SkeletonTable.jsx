export const SkeletonTable = () => {
  const array = new Array(6).fill("");
  return (
    <div className="flex justify-center items-center h-full">
      <div className="animate-pulse w-5/12">
        {array.map((value, i) => (
          <div className="flex gap-x-10 mb-5" key={i}>
            <div className="bg-gray-200 h-4 w-32 rounded"></div>
            <div className="bg-gray-200 h-4 w-32 rounded"></div>
            <div className="bg-gray-200 h-4 w-32 rounded"></div>
            <div className="bg-gray-200 h-4 w-32 rounded"></div>
            <div className="bg-gray-200 h-4 w-32 rounded"></div>
          </div>
        ))}
      </div>
    </div>
  );
};
