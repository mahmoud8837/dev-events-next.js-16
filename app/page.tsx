import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";
import LightRays from "@/components/LightRays";
import Showcase from "@/components/Showcase";
import { IEvent } from "@/database";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const getEvents = async (): Promise<IEvent[]> => {
  const response = await fetch(`${BASE_URL}/api/events`, {
    next: { revalidate: 60 },
  });
  const data = await response.json();
  return data.events || [];
};

const Page = async () => {


  const events = await getEvents();

  return (
    <>
      <section>
        <div className={`absolute inset-0 h-screen top-0 -z-1`}>
          <LightRays
            raysOrigin="top-center-offset"
            raysColor="#5dfeca"
            raysSpeed={0.5}
            lightSpread={0.9}
            rayLength={1.4}
            followMouse={true}
            mouseInfluence={0.02}
            noiseAmount={0}
            distortion={0.01}
          />
        </div>
        <div className="h-screen flex flex-col justify-start pt-[10%] items-center text-center gap-6">
          <h1 className={`text-center`}>
            The Hub for Every Dev <br /> Event You Can't Miss
          </h1>
          <p className={`text-center mt-5`}>
            Hackathons, Meetups, and Conferences, All in One Place
          </p>
          <ExploreBtn />
        </div>
        <div id="events" className="space-y-7">
          <h3>Featured Events</h3>
          <Suspense fallback={<p>Loading events...</p>}>
            <ul className="events">
              {events &&
                events.length > 0 &&
                events.slice(0, 6).map((event: IEvent) => (
                  <li key={event.title}>
                    <EventCard {...event} />
                  </li>
                ))}
            </ul>
          </Suspense>
          <Link href="/events" className="flex items-center justify-center gap-2 font-semibold text-lg  mx-auto bg-linear-to-br from-primary via-secondary-foreground to-primary hover:from-gray-600 hover:to-gray-600 text-white duration-300 cursor-pointer px-4 py-2 rounded-lg w-fit">All Events <ArrowRight /></Link>
        </div>{" "}
      </section>
      <section>
        <Showcase />
      </section>
    </>
  );
};
export default Page;
