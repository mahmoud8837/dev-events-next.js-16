import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "Discover Events",
    desc: "Find conferences, hackathons, and meetups curated for developers.",
    icon: "📅",
  },
  {
    title: "Stay Informed",
    desc: "Get the latest updates and reminders so you never miss out.",
    icon: "🔔",
  },
  {
    title: "Join Communities",
    desc: "Connect with fellow developers, organizers, and mentors nearby.",
    icon: "🤝",
  },
  {
    title: "Build & Showcase",
    desc: "Participate in hackathons and show your projects to the world.",
    icon: "🚀",
  },
];

export default function Showcase() {
  return (
    <section className="max-w-6xl mx-auto mt-30 mb-20">
      <div className="glass p-8 rounded-xl relative overflow-hidden">
        <div className="absolute -right-20 -top-20 opacity-20 w-72 h-72 bg-color-blue rounded-full blur-3xl" />
        <div className="absolute -left-20 -bottom-20 opacity-20 w-72 h-72 bg-primary rounded-full blur-3xl" />

            <div>
              <h2 className="text-3xl font-bold mb-3">What DevEvent Presents</h2>
              <p className="text-light-100 mb-6">
                A beautifully curated platform to discover, join and showcase
                developer events worldwide.
              </p>
            </div>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="p-4 rounded-lg bg-dark-200 border border-dark-100 hover:scale-105 transition transform"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-linear-to-br from-color-blue to-primary flex items-center p-4 justify-center text-lg">
                      {f.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold">{f.title}</h4>
                      <p className="text-sm text-light-100">{f.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* <div className="mt-6">
              <Link
                href="/showcase"
                className="px-5 py-2 rounded bg-primary text-black font-semibold hover:opacity-95 transition"
              >
                Explore Showcase
              </Link>
            </div> */}
          </div>

          <div className="w-full md:w-80 shrink-0">
            <div className="rounded-lg overflow-hidden border border-dark-100 card-shadow">
              <Image
                src="/images/event-full.png"
                alt="showcase"
                width={420}
                height={300}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
