import { useState } from "react";
import data from "../data/data.json";
import logo from "../images/logo.svg";

export default function ChartCard() {
  const chartPercentages: number[] = [];

  const getPercentages = () => {
    const maxAmt = Math.max(...data.map((exp) => exp.amount));

    data
      .map((exp) => exp.amount)
      .forEach((amt) => {
        chartPercentages.push((amt / maxAmt) * 100);
      });
  };

  getPercentages();

  return (
    <div className="w-full md:w-[33.75rem]">
      <div className="flex items-center justify-between bg-softRed text-white rounded-lg p-5 mb-4 md:px-8 md:py-7">
        <div className="">
          <p className="">My balance</p>
          <h1 className="text-2xl font-bold md:text-[2rem] md:leading-10">
            $921.48
          </h1>
        </div>
        <div className="w-16 md:w-20">
          <img className="w-full" src={logo} alt="" />
        </div>
      </div>

      <div className="p-5 rounded-lg bg-veryPaleOrange md:p-9">
        <h2 className="text-2xl font-bold text-darkBrown md:mb-12 md:text-[2rem] md:leading-10">
          Spending - Last 7 days
        </h2>

        <div className="h-52 py-5 border-b-2 border-cream mb-5 grid grid-cols-7 gap-3 text-center md:gap-4 md:py-7 md:h-[14.375rem]">
          {data.map((expense, idx) => {
            let style =
              "w-full bg-softRed rounded-sm md:rounded cursor-pointer hover:opacity-70";
            if (chartPercentages[idx] === 100) {
              style =
                "w-full bg-cyan rounded-sm md:rounded cursor-pointer hover:opacity-70";
            }
            return (
              <Bar
                percentage={chartPercentages[idx]}
                style={style}
                expense={expense}
              />
            );
          })}
        </div>

        <div className="flex justify-between items-end">
          <div className="">
            <p className="text-mediumBrown mb-1">Total this month</p>
            <div className="text-darkBrown font-bold text-3xl md:text-5xl">
              $478.33
            </div>
          </div>
          <div className="text-right">
            <p className="text-darkBrown font-bold">+2.4%</p>
            <p className="text-mediumBrown">from last month</p>
          </div>
        </div>
      </div>
    </div>
  );
}

interface BarProps {
  expense: { day: string; amount: number };
  percentage: number;
  style: string;
}
const Bar = ({ expense, percentage, style }: BarProps) => {
  const [showAmt, setShowAmt] = useState<boolean>(false);

  return (
    <div className="flex flex-col justify-end">
      <div className="relative">
        <div
          className="absolute -top-[3.2rem] w-[4.5rem] left-1/2 -translate-x-1/2 bg-darkBrown text-white text-center text-lg font-bold p-2 rounded opacity-0"
          style={{ opacity: showAmt ? 1 : 0 }}
        >
          ${expense.amount}
        </div>
      </div>
      <div
        onMouseOver={() => setShowAmt(true)}
        onMouseOut={() => setShowAmt(false)}
        className={style}
        style={{ height: `${percentage}%` }}
      ></div>
      <p className="text-mediumBrown text-xs mt-1 md:text-15 md:mt-2">
        {expense.day}
      </p>
    </div>
  );
};
