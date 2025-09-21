"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const chartData = [
  { month: "Jan", actual: 18, projection: 20 },
  { month: "Feb", actual: 20, projection: 25 },
  { month: "Mar", actual: 17, projection: 21 },
  { month: "Apr", actual: 21, projection: 27 },
  { month: "May", actual: 15, projection: 18 },
  { month: "Jun", actual: 20, projection: 24 },
];

export function ChartBarDefault() {
  return (
    <Card className="w-full h-full bg-[#F7F9FB] border-0 shadow-none">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-semibold">
          Projections vs Actuals
        </CardTitle>
      </CardHeader>
      <CardContent className="h-[300px] p-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} barSize={45}>
            {" "}
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis dataKey="month" axisLine={false} tickLine={false} />
            <YAxis domain={[0, 30]} axisLine={false} tickLine={false} />{" "}
            {/* ⬅ fixed max */}
            <Tooltip cursor={{ fill: "rgba(0,0,0,0.05)" }} />
            <Bar
              dataKey="projection"
              stackId="a"
              fill="rgba(168, 197, 218, 1)"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="actual"
              stackId="a"
              fill="rgba(59,130,246,1)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
