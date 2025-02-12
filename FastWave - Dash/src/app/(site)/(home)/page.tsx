import DataStatsFour from "@/components/DataStats/DataStatsFour";
import { PeriodPicker } from "@/components/period-picker";
import { createTimeFrameExtractor } from "@/utils/timeframe-extractor";
import { Metadata } from "next";
import { LeadsReport } from "./_components/leads-report";
import { TodoList } from "./_components/todo-list";
import CalendarBox from "../../../components/CalenderBox";

export const metadata: Metadata = {
  title: "FastWave Dashboard",
};

type PropsType = {
  searchParams: Promise<{
    selected_time_frame?: string;
  }>;
};

export default async function CRMPage(props: PropsType) {
  const { selected_time_frame } = await props.searchParams;
  const extractTimeFrame = createTimeFrameExtractor(selected_time_frame);

  return (
    <>
      <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-body-2xlg font-bold text-dark dark:text-white">
          {"My Swim Club"}
        </h2>
        </div>
        
      <CalendarBox/>
      <div className="mt-7.5 grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <LeadsReport />
        <TodoList />
      </div>
    </>
  );
}
