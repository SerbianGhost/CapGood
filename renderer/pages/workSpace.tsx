import ImportSection from "../components/importSection";
import PlayerSection from "../components/playerSection";
import DetailsSection from "../components/detailsSection";
import TimeLineSection from "../components/timeLineSection";

export default function WorkSpace() {
  return (
    <>
      <main className="work-space">
        <ImportSection />
        <PlayerSection />
        <DetailsSection />
        <TimeLineSection />
      </main>
    </>
  );
}
