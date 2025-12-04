export default function EventsLoading() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Loading events…</h2>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="glass p-4 rounded-lg animate-pulse">
              <div className="bg-gray-700 rounded h-48 w-full mb-4" />
              <div className="h-6 bg-gray-700 rounded mb-2 w-3/4" />
              <div className="h-4 bg-gray-700 rounded mb-2 w-1/2" />
              <div className="h-8 bg-gray-700 rounded w-full mt-4" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
