import Image from "next/image";
import Link from "next/link";
import { IEvent } from "@/database/event.model";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

async function getEvents(): Promise<IEvent[]> {
  try {
    const response = await fetch(`${BASE_URL}/api/events`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch events");
    }

    const data = await response.json();
    return data.events || [];
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
}

export default async function EventsPage() {
  const events = await getEvents();

  return (
    <main id="events-page" className="min-h-screen">
      {/* Header Section */}
      <div className="mb-12">
        <h1 className="text-6xl font-bold max-sm:text-4xl mb-3">Events</h1>
        <p className="text-color-light-100 text-lg max-sm:text-sm">
          Discover upcoming tech conferences, hackathons, and developer meetups
        </p>
      </div>

      {/* Results Counter */}
      <div className="mb-8 flex items-center justify-between">
        <p className="text-color-light-200 text-lg">
          Total Events:{" "}
          <span className="font-semibold text-color-blue">{events.length}</span>
        </p>
      </div>

      {/* Events Grid */}
      {events.length > 0 ? (
        <div className="events grid md:grid-cols-3 gap-6 sm:grid-cols-2 grid-cols-1">
          {events.map((event) => (
            <Link
              key={event._id?.toString()}
              href={`/events/${event.slug}`}
              className="group"
            >
              <div className="glass p-4 rounded-lg h-full flex flex-col gap-3 hover:shadow-lg hover:border-color-blue/50 transition-all duration-300 transform hover:scale-105">
                {/* Image */}
                <div className="relative w-full h-[250px] rounded-lg overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    priority={false}
                  />
                  {/* Mode Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="pill bg-gray-800 border:2 shadow-2xl shadow-black text-xs font-semibold capitalize">
                      {event.mode}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col gap-2">
                  {/* Title */}
                  <h3 className="text-lg font-semibold line-clamp-2 group-hover:text-color-blue transition">
                    {event.title}
                  </h3>

                  {/* Description */}
                  <p className="text-color-light-200 text-sm line-clamp-2 flex-1">
                    {event.description}
                  </p>

                  {/* Location */}
                  <div className="flex items-center gap-2 text-color-light-200 text-sm">
                    <span>📍</span>
                    <span className="line-clamp-1">{event.location}</span>
                  </div>

                  {/* Date & Time */}
                  <div className="flex flex-col gap-1 text-sm text-color-light-200">
                    <div className="flex items-center gap-2">
                      <span>📅</span>
                      <span>
                        {new Date(event.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>🕐</span>
                      <span>{event.time}</span>
                    </div>
                  </div>

                  {/* Organizer */}
                  <div className="flex items-center gap-2 text-color-light-200 text-sm mt-2">
                    <span>👤</span>
                    <span className="line-clamp-1">{event.organizer}</span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {event.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-color-dark-200 text-color-light-100 border border-color-dark-100"
                      >
                        {tag}
                      </span>
                    ))}
                    {event.tags.length > 2 && (
                      <span className="text-xs px-3 py-1 rounded-full bg-color-dark-200 text-color-light-100 border border-color-dark-100">
                        +{event.tags.length - 2}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="glass p-12 rounded-lg text-center">
          <p className="text-color-light-200 text-lg">
            No events available at the moment.
          </p>
          <p className="text-color-light-200 text-sm mt-2">
            Check back soon for upcoming events!
          </p>
        </div>
      )}
    </main>
  );
}
