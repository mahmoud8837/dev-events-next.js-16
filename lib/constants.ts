export type Event = {
  title: string;
  image: string;
  slug: string;
  date: string; // ISO-like or human-readable date
  location: string;
  time: string;
};

export const events: Event[] = [
  {
    title: "Next.js Conf",
    image: "/images/event1.png",
    slug: "nextjs-conf-2026",
    date: "2026-03-10",
    location: "San Francisco, CA, USA",
    time: "09:00 - 17:00 PST",
  },
  {
    title: "React Summit",
    image: "/images/event2.png",
    slug: "react-summit-2026",
    date: "2026-04-22",
    location: "Amsterdam, Netherlands",
    time: "10:00 - 18:00 CEST",
  },
  {
    title: "JSConf EU",
    image: "/images/event3.png",
    slug: "jsconf-eu-2026",
    date: "2026-05-14",
    location: "Berlin, Germany",
    time: "09:30 - 17:30 CEST",
  },
  {
    title: "HackMIT",
    image: "/images/event4.png",
    slug: "hackmit-fall-2025",
    date: "2025-12-06",
    location: "Cambridge, MA, USA",
    time: "18:00 - 20:00 EST",
  },
  {
    title: "ETHGlobal Hackathon",
    image: "/images/event5.png",
    slug: "ethglobal-2026",
    date: "2026-02-20",
    location: "Online / Hybrid",
    time: "All day",
  },
  {
    title: "DevOpsDays",
    image: "/images/event6.png",
    slug: "devopsdays-2026",
    date: "2026-06-01",
    location: "London, UK",
    time: "09:00 - 16:30 BST",
  },
  {
    title: "Local Tech Meetup",
    image: "/images/event-full.png",
    slug: "local-tech-meetup-nyc",
    date: "2025-12-15",
    location: "New York, NY, USA",
    time: "18:30 - 20:30 EST",
  },
];

export default events;
