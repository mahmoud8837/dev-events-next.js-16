"use client";

import Link from "next/link";

export default function EventSlugError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center py-12">
      <div className="glass p-8 rounded-lg max-w-md w-full text-center">
        <div className="text-6xl mb-4">❌</div>
        <h1 className="text-3xl font-bold mb-2">Event Not Found</h1>
        <p className="text-light-100 mb-2">
          We couldn't load this event. It might have been removed or an error
          occurred.
        </p>
        {error.message && (
          <p className="text-sm text-light-200 mb-6 wrap-break-word">
            {error.message}
          </p>
        )}
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="px-6 py-2 bg-primary text-black font-semibold rounded-lg hover:opacity-90 transition"
          >
            Try Again
          </button>
          <Link
            href="/events"
            className="px-6 py-2 bg-dark-200 text-light-100 font-semibold rounded-lg hover:bg-dark-100 transition"
          >
            Back to Events
          </Link>
        </div>
      </div>
    </div>
  );
}
