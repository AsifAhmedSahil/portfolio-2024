import { Fragment } from 'react';

type EventCardProps = {
  heading: string;
  subHeading: string;
  degree: string;
};

type Event = {
  degree: string;
  college: string;
  year: string;
  direction?: string; // direction will be dynamically assigned
};

const HistoryTimeline = ({ events }: { events: Event[] }) => {
  // Add direction dynamically based on the index of the event in the array
  const eventsWithDirection = events.map((event, index) => {
    return {
      ...event,
      direction: index % 2 === 0 ? 'left' : 'right', // Alternate between 'left' and 'right'
    };
  });

  return (
    <div className="flex flex-col gap-y-3 my-4 w-full">
        <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
            Educations
          </p>
        </div>
        <h2 className="font-serif mt-6 text-3xl md:text-5xl text-center">
        My Education
        </h2>
        <p className="mt-4 text-center md:text-lg lg:text-xl max-w-md mx-auto text-white/60">
        A glimpse into my academic journey, where I gained the skills and knowledge to build impactful solutions.
        </p>
        </div>
      <Circle />

      {eventsWithDirection.map((event: Event, key: number) => {
        const degree = event.degree || "No degree available";
        const college = event.college || "No college information";
        const year = event.year || "No college information";

        return (
          <Fragment key={key}>
            <div className="grid grid-cols-[1fr_auto_1fr] gap-x-2 items-center mx-auto ">
              {/* Conditional rendering based on the direction */}
              {event.direction === 'left' ? (
                <EventCard heading={year} subHeading={college} degree={degree} />
              ) : (
                <div></div>
              )}

              <Pillar />

              {event.direction === 'right' ? (
                <EventCard heading={year} subHeading={college} degree={degree}/>
              ) : (
                <div></div>
              )}
            </div>
            <Circle />
          </Fragment>
        );
      })}

      {/* <Circle /> */}
    </div>
  );
};

const Circle = () => {
  return <div className="rounded-full w-4 h-4 bg-purple-500 mx-auto"></div>;
};

const Pillar = () => {
  return <div className="rounded-t-full rounded-b-full w-2 h-full bg-blue-600 mx-auto"></div>;
};

const EventCard = ({ heading, subHeading,degree }: EventCardProps) => {
  return (
    <div className="flex flex-col gap-y-2 border shadow-md rounded-xl p-4 mx-5">
      <div className="text-white text-2xl font-bold pb-3 border-b">Year of education:{heading}</div>
      <div className="text-sm text-white">Institution: {subHeading}</div>
      <div className="text-sm text-white">Degree: {degree}</div>
    </div>
  );
};

export default HistoryTimeline;
