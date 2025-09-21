// Dashboard.tsx
import Image from "next/image";
import ArrowRise from "@/public/assets/ArrowRise.svg";
import ArrowFall from "@/public/assets/ArrowFall.svg";
import { ChartBarDefault } from "./ChartBarDefault"; // import chart component

const stats = [
  {
    title: "Customers",
    value: "3,781",
    change: "+11.01%",
    icon: ArrowRise,
    bg: "bg-[#E3F5FF]",
  },
  {
    title: "Orders",
    value: "1,219",
    change: "-0.03%",
    icon: ArrowFall,
    bg: "bg-[#F7F9FB]",
  },
  {
    title: "Revenue",
    value: "$695",
    change: "15.03%",
    icon: ArrowRise,
    bg: "bg-[#F7F9FB]",
  },
  {
    title: "Growth",
    value: "30.01%",
    change: "+6.08%",
    icon: ArrowRise,
    bg: "bg-[#E5ECF6]",
  },
];

export default function Dashboard() {
  return (
    <div className="my-8 mx-7">
      <h1 className="font-semibold text-sm mb-4">eCommerce</h1>

      <div className="md:flex gap-7">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:w-1/2">
          {stats.map(({ title, value, change, icon, bg }) => (
            <div
              key={title}
              className={`${bg} rounded-3xl p-6 flex flex-col gap-2`}
            >
              <h2 className="font-semibold text-sm">{title}</h2>
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-2xl">{value}</h3>
                <div className="flex items-center gap-1">
                  <h4 className="text-xs">{change}</h4>
                  <Image src={icon} alt={title} height={16} width={16} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Chart Section */}
        <div className="md:w-1/2 h-[252px] rounded-xl p-4 bg-[#F7F9FB] mt-7 md:mt-0">
          <h2 className="font-semibold text-sm mb-2">Projections vs Actuals</h2>
          <div className="h-[200px]">
            <ChartBarDefault />
          </div>
        </div>
      </div>
    </div>
  );
}
