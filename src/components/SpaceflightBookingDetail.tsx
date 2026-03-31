import ProjectHero from "./ProjectHero";
import ProjectDetailNav from "./ProjectDetailNav";
import { SplitSection } from "./SplitSection";
import OtherProjectsSection from "./OtherProjectsSection";

const SpaceflightBookingDetail = () => {
  return (
    <main className="mx-auto min-h-screen">
      <ProjectHero
        project={{
          id: 3,
          title: "Spaceflight Booking & Operations",
          description:
            "A mobile app for passengers to book and manage spaceflights, and a tablet interface that equips crew with tools to support and monitor the journey.",
          image: "/images/space.png",
          type: "Mobile & Tablet",
          heroSubtitle: "UX Research & UI Design",
          tags: [
            {
              name: "Retention and Loyalty",
              arrowIcon: "/images/up-arrow.svg",
            },
            { name: "Crew Efficiency", arrowIcon: "/images/up-arrow.svg" },
            {
              name: "Reduce Average Time to Book",
              arrowIcon: "/images/down-arrow.svg",
            },
            {
              name: "Customer Satisfaction",
              arrowIcon: "/images/up-arrow.svg",
            },
          ],
        }}
      />

      <ProjectDetailNav
        sections={[
          { title: "Problem Statement" },
          { title: "Problem Solution" },
          { title: "Target Users" },
          { title: "UI Identity" },
          { title: "Research Approach" },
          { title: "Expected Outcomes" },
          { title: "Key Features" },
          { title: "Key Features" },
          { title: "Design" },
          { title: "Reflection & Improvement" },
          { title: "Conclusion" },
        ]}
      />

      <SplitSection
        index={0}
        title="Problem Statement"
        image="/images/paragraph-images/project-1/problem-statement-1.png"
      >
        <div>
          <p className="mb-8">
            As commercial space travel begins to take shape, there’s a growing
            need for a simple and intuitive way to book and manage spaceflights.
          </p>
          <p className="mb-8">
            Passengers need clarity and control; crew members need efficient
            tools to support and monitor the journey.
          </p>
        </div>
      </SplitSection>

      <SplitSection
        index={1}
        title="Problem Solution"
        image="/images/paragraph-images/project-1/problem-solution-1.png"
      >
        <div>
          <p className="mb-8">
            This concept presents a dual-platform solution:
          </p>
          <p className="my-8">
            <strong>Tablet Interface </strong>for crew operations;
          </p>
          <p className="mb-8">
            <strong>Mobile App</strong> for passengers to book and manage
            flights;
          </p>
          <p className="mb-8">
            Designed for space travel, it combines clean UI with intuitive UX to
            make complex journeys feel simple.
          </p>
        </div>
      </SplitSection>

      <SplitSection
        index={2}
        title="Target Users"
        image="/images/paragraph-images/project-1/target-users-1.png"
      >
        <p className="mb-8">
          <strong>Passengers - Adults aged 25–55</strong> who are early adopters
          of commercial space travel. They seek clarity, control, and digital
          convenience when booking and managing their flights. They value
          safety, transparency, and an intuitive experience that makes space
          travel feel accessible;
        </p>
        <p className="mb-8">
          <strong>Crew Members - </strong> Professional flight attendants and
          mission crew operating in commercial spaceflights. They need reliable
          tools to manage passengers and monitor operations efficiently. They
          value streamlined workflows, accuracy, and intuitive interfaces that
          support them in high-stakes environments;
        </p>
      </SplitSection>

      <SplitSection
        index={3}
        title="UI Identity"
        image="/images/paragraph-images/project-1/ui-identity-1.png"
      >
        <p className="mb-8">
          <strong>Color Palette: </strong>A dark, space-inspired background with
          high-contrast orange and white accents. Orange drives primary actions
          and key indicators, while white ensures readability across both
          platforms;
        </p>
        <p className="mb-8">
          <strong>Typography: </strong>A clean, modern sans-serif typeface
          conveys precision and confidence, ideal for the futuristic nature of
          space travel and data-heavy screens;
        </p>
        <p className="mb-8">
          <strong>Icons: </strong>Minimal outlined icons support quick
          recognition of key functions such as connectivity, oxygen levels and
          turbulence status without adding visual noise;
        </p>
        <p className="mb-8">
          <strong>Components: </strong>The passenger app uses rounded cards and
          a clean booking flow for an approachable experience. The crew tablet
          uses structured tables, a seat map and status indicators designed for
          operational efficiency;
        </p>
        <p className="mb-8">
          <strong>Background: </strong>A dark background reinforces the space
          environment, reduces eye strain and creates a premium, immersive feel
          across both platforms;
        </p>
      </SplitSection>

      <SplitSection
        index={4}
        title="Research Approach"
        image="/images/paragraph-images/project-1/research-approach-1.png"
      >
        <p className="mb-8">
          Given the conceptual and futuristic nature of the project, I began by
          analyzing patterns from existing airline and travel apps, studying
          booking flows, onboard service features, and cross-device
          interactions.
        </p>
        <p className="mb-8">
          Based on these insights, I then created two detailed personas to guide
          design decisions and ensure a user-centered approach.
        </p>
        <p className="mb-8">
          These findings were adapted to a space travel context, emphasizing
          safety, clarity, and ease of use. The ultimate goal was to craft an
          imaginative and engaging experience that never compromises on
          functionality.
        </p>
      </SplitSection>

      <SplitSection
        index={5}
        title="Expected Outcomes"
        image="/images/paragraph-images/project-1/expected-outcomes-1.png"
      >
        <p className="mb-8">
          <strong>Safety:</strong> Users feel secure with clear, intuitive
          safety features;
        </p>
        <p className="mb-8">
          <strong>Clarity:</strong> Booking and onboard information is easy to
          understand across all devices;
        </p>
        <p className="mb-8">
          <strong>Efficiency:</strong> Travel planning and check-in are
          streamlined for a seamless experience;
        </p>
        <p className="mb-8">
          <strong>Accessibility:</strong> Space travel services are easy to
          access, from reservations to onboard interactions;
        </p>
        <p className="mb-8">
          <strong>Engagement:</strong> Immersive features enhance the excitement
          and anticipation of space travel;
        </p>
        <p className="mb-8">
          <strong>Organization:</strong> All travel details and documents are
          stored in one central place;
        </p>
        <p className="mb-8">
          <strong>Safety:</strong> Users feel secure with clear, intuitive
          safety features;
        </p>
      </SplitSection>

      <SplitSection
        index={6}
        title="Key Features"
        image="/images/paragraph-images/project-1/key-features-1.png"
      >
        <div className="w-fit bg-white text-md px-4 py-1.5 mb-12 rounded-full border border-gray-200 font-kalam-400 text-black flex items-center justify-center gap-2">
          Mobile App - Passengers
        </div>
        <p className="mb-8">
          <strong>Flight Reservation:</strong> Choose destination / space route,
          available dates and times, seat selection, class type (Economy, etc.)
          selection;
        </p>
        <p className="mb-8">
          <strong>Explore:</strong> Interactive map of destinations , search and
          discover routes;
        </p>
        <p className="mb-8">
          <strong>Account:</strong> Past tickets, etc;
        </p>
        <p className="mb-8">
          <strong>Boarding:</strong> Online check-in, boarding QR code,
          notifications;
        </p>
        <p className="mb-8">
          <strong>Wishlist:</strong> Future travels;
        </p>
        <p className="mb-8">
          <strong>Payments:</strong> Choose payment method & secure checkout;
        </p>
      </SplitSection>

      <SplitSection
        index={7}
        title="Key Features"
        image="/images/paragraph-images/project-1/key-features-2.png"
      >
        <div className="w-fit bg-white text-md px-4 py-1.5 mb-12 rounded-full border border-gray-200 font-kalam-400 text-black flex items-center justify-center gap-2">
          Tablet - Inflight Agents
        </div>
        <p className="mb-8">
          <strong>Passenger Management:</strong> Passenger list, boarding
          status;{" "}
        </p>
        <p className="mb-8">
          <strong>Onboard Support:</strong> Receive help requests, passenger
          notes & info,meals info;
        </p>
        <p className="mb-8">
          <strong>Flight Management:</strong> Trip progress, ship status &
          conditions, checklist;
        </p>
        <p className="mb-8">
          <strong>Offline Mode:</strong> Critical info must work Offline;
        </p>
        <p className="mb-8">
          <strong>Communication:</strong> Chat with passengers or Bboadcast;
        </p>
      </SplitSection>

      <SplitSection
        index={8}
        designIndex={1}
        total={7}
        title="Search Book and Opportunities"
        image="/images/paragraph-images/project-1/design01-1.png"
      >
        <div className="w-fit bg-white text-md px-4 py-1.5 mb-12 rounded-full border border-gray-200 font-kalam-400 text-black flex items-center justify-center gap-2">
          Mobile App - Passengers
        </div>
        <p className="mb-8">
          Book spaceflights with smart filters, explore curated trips, and
          manage voyages in real time
        </p>
      </SplitSection>
      <SplitSection
        index={9}
        title="Reflection & Improvement"
        image="/images/paragraph-images/project-1/design01-1.png"
      >
        <p className="mb-8">
          This project deepened my understanding of{" "}
          <strong>high-stakes UX</strong>.
        </p>
        <p className="mb-8">
          Future improvements include <strong>voice UI</strong> and
          multi-language support.
        </p>
      </SplitSection>

      <SplitSection
        index={10}
        title="Conclusion"
        image="/images/paragraph-images/project-1/problem-statement-1.png"
      >
        <p className="mb-8">
          NEXRA shows that complex systems can be simplified through{" "}
          <strong>intentional design</strong>.
        </p>
        <p className="mb-8">
          Great UX is <strong>invisible</strong>.
        </p>
      </SplitSection>

      <OtherProjectsSection currentProjectId={3} />
    </main>
  );
};

export default SpaceflightBookingDetail;
