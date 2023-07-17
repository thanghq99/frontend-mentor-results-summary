import SummaryItem from "@/components/SummaryItem";
import ReactionIcon from "@public/assets/images/icon-reaction.svg";
import MemoryIcon from "@public/assets/images/icon-memory.svg";
import VerbalIcon from "@public/assets/images/icon-verbal.svg";
import VisualIcon from "@public/assets/images/icon-visual.svg";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen font-bold bg-slate-400 min-w-800">
      <div className="bg-white flex flex-col lg:flex-row lg:space-x-2 items-center lg:items-stretch justify-center lg:rounded-3xl">
        <div className="flex flex-col items-center justify-between h-80 lg:h-auto px-9 py-6 text-white bg-gradient-to-t from-[#3830c1] to-[#6743ff] rounded-b-3xl lg:rounded-3xl">
          <p className="opacity-60 text-xl">Your Result</p>
          <div className="relative p-8 lg:p-20 bg-gradient-to-t from-[#3b30ee] to-[#4a23cc] rounded-full">
            <p className="text-5xl lg:text-7xl">76</p>
            <p className="absolute left-0 right-0 bottom-2 lg:bottom-12 m-auto flex justify-center opacity-60 text-sm">
              of 100
            </p>
          </div>
          <div className="flex flex-col space-y-3 items-center">
            <p className="text-2xl">Great</p>
            <p className="opacity-60 text-center text-sm">
              Your scored higher than 65% of the people who have taken these
              tests.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="p-6 w-full">
            <p className="pb-6 text-xl">Summary</p>
            <div className="flex flex-col space-y-4">
              <SummaryItem
                percentage={80}
                icon={ReactionIcon}
                title="Reaction"
              />
              <SummaryItem percentage={92} icon={MemoryIcon} title="Memory" />
              <SummaryItem percentage={61} icon={VerbalIcon} title="Verbal" />
              <SummaryItem percentage={72} icon={VisualIcon} title="Visual" />
            </div>
          </div>
          <div className="px-6 pb-6">
            <button className="w-full py-3 rounded-full text-white bg-slate-700 hover:bg-gradient-to-t hover:from-[#3830c1] hover:to-indigo-700">
              Continue
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
