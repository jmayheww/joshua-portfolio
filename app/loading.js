export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-base-100">
      <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-64 w-64"></div>
    </div>
  );
}
