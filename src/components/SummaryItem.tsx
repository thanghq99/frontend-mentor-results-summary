import Image from "next/image";
import React, { FC } from "react";

const colorSets = [
  {
    title: "Reaction",
    color: "rgb(239 68 68)",
    bgColor: "rgb(254, 226, 226, 0.4)",
  },
  {
    title: "Memory",
    color: "rgb(234 179 8)",
    bgColor: "rgb(254, 240, 138, 0.4)",
  },
  {
    title: "Verbal",
    color: "rgb(34 197 94)",
    bgColor: "rgb(220, 252, 231, 0.4)",
  },
  {
    title: "Visual",
    color: "rgb(99 102 241)",
    bgColor: "rgb(224, 231, 255, 0.4)",
  },
];

interface SummaryItemProps {
  icon: any;
  title: string;
  percentage: number;
}

const SummaryItem: FC<SummaryItemProps> = ({ icon, title, percentage }) => {
  const thisColorSet = colorSets.find((colorSet) => colorSet.title === title);

  return (
    <div
      className={"flex justify-between p-4 rounded-lg min-w-[300px]"}
      style={{
        backgroundColor: thisColorSet?.bgColor,
      }}
    >
      <div className="flex ">
        <Image src={icon} width={20} height={20} alt="summary-icon" />
        <p className={`ml-2`} style={{ color: thisColorSet?.color }}>
          {title}
        </p>
      </div>
      <p>
        {percentage}
        <span className="opacity-60"> / 100</span>
      </p>
    </div>
  );
};

export default SummaryItem;
