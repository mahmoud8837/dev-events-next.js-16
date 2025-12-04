export default function RootLoading() {
  return (
    <main className="min-h-screen flex items-center justify-center py-20 site-background">
      <div className="max-w-6xl w-full px-5 sm:px-10">
        <div className="glass p-8 rounded-xl">
          <div className="animate-pulse">
            <div className="h-12 bg-gray-700 rounded w-3/4 mb-6" />
            <div className="h-4 bg-gray-700 rounded w-1/2 mb-4" />

            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mt-8">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="glass p-4 rounded-lg">
                  <div className="bg-gray-700 rounded h-44 w-full mb-4" />
                  <div className="h-5 bg-gray-700 rounded mb-2 w-3/4" />
                  <div className="h-4 bg-gray-700 rounded mb-2 w-1/2" />
                  <div className="mt-3 flex gap-2">
                    <div className="h-8 w-16 bg-gray-700 rounded" />
                    <div className="h-8 w-12 bg-gray-700 rounded" />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex items-center justify-center">
              <div className="w-10 h-10 border-2 border-color-blue rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-color-blue rounded-full animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
