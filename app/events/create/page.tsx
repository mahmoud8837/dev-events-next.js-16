"use client";

import { useState } from "react";
import Image from "next/image";

export default function CreateEventPage() {
  const [form, setForm] = useState({
    title: "",
    date: "",
    time: "",
    location: "",
    venue: "",
    mode: "offline",
    organizer: "",
    tags: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // Simulate slight delay then show not-allowed popup (no backend action)
    setTimeout(() => {
      setLoading(false);
      setShowPopup(true);
    }, 700);
  }

  return (
    <main className="min-h-screen p-12">
      <div className="max-w-4xl mx-auto site-background p-8 rounded-xl">
        <h1 className="text-3xl font-bold mb-2">Create New Event</h1>
        <p className="text-light-100 mb-6">
          Fill in the details below to propose an event.
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div className="col-span-1 md:col-span-2 flex gap-4 items-center">
            <div className="w-28 h-20 rounded overflow-hidden bg-gray-800 flex items-center justify-center">
              <Image
                src="/images/event-full.png"
                alt="poster"
                width={112}
                height={80}
                className="object-cover"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Event Title</label>
              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                className="mt-1 w-full bg-dark-200 rounded px-3 py-2"
                placeholder="e.g. React Summit"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium">Date</label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="mt-1 w-full bg-dark-200 rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Time</label>
            <input
              type="time"
              name="time"
              value={form.time}
              onChange={handleChange}
              className="mt-1 w-full bg-dark-200 rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Location</label>
            <input
              name="location"
              value={form.location}
              onChange={handleChange}
              className="mt-1 w-full bg-dark-200 rounded px-3 py-2"
              placeholder="City, Country or Online"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Venue</label>
            <input
              name="venue"
              value={form.venue}
              onChange={handleChange}
              className="mt-1 w-full bg-dark-200 rounded px-3 py-2"
              placeholder="Venue or URL"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Mode</label>
            <select
              name="mode"
              value={form.mode}
              onChange={handleChange}
              className="mt-1 w-full bg-dark-200 rounded px-3 py-2"
            >
              <option value="offline">Offline</option>
              <option value="online">Online</option>
              <option value="hybrid">Hybrid</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium">Organizer</label>
            <input
              name="organizer"
              value={form.organizer}
              onChange={handleChange}
              className="mt-1 w-full bg-dark-200 rounded px-3 py-2"
              placeholder="Company or person"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium">
              Tags (comma separated)
            </label>
            <input
              name="tags"
              value={form.tags}
              onChange={handleChange}
              className="mt-1 w-full bg-dark-200 rounded px-3 py-2"
              placeholder="react, javascript, meetup"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium">Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows={6}
              className="mt-1 w-full bg-dark-200 rounded px-3 py-2"
              placeholder="Short summary of the event"
            />
          </div>

          <div className="md:col-span-2 flex flex-col justify-between items-center mt-4">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() =>
                  setForm({
                    title: "",
                    date: "",
                    time: "",
                    location: "",
                    venue: "",
                    mode: "offline",
                    organizer: "",
                    tags: "",
                    description: "",
                  })
                }
                className="px-4 py-2 rounded cursor-pointer bg-dark-200 hover:bg-dark-100 transition"
              >
                Reset
              </button>
              <button
                type="submit"
                disabled={loading}
                className="px-4 py-2 rounded bg-primary text-black font-semibold hover:opacity-95 transition cursor-pointer disabled:opacity-50"
              >
                {loading ? "Creating…" : "Create Event"}
              </button>
            </div>
            <p className="text-sm mt-2 text-light-100 text-center">
              By clicking Create you will propose the event. (Not saved in this
              demo)
            </p>
          </div>
        </form>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setShowPopup(false)}
          />
          <div className=" p-6 rounded-lg z-10 max-w-md w-full glass">
            <h2 className="text-xl font-bold mb-2">Action Not Allowed</h2>
            <p className="text-light-100 mb-4">
              You are not allowed to create events in this demo. Contact an
              admin for access.
            </p>
            <div className="flex justify-end">
              <button
                onClick={() => setShowPopup(false)}
                className="px-4 py-2 rounded bg-primary text-black font-semibold cursor-pointer hover:opacity-95 transition hover:bg-primary-dark"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
