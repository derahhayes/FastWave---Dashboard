import { createTimeFrameExtractor } from "@/utils/timeframe-extractor";
import { EventList } from "./_components/event-list";
import CalendarBox from "./_components/CalenderBox ";
import { Metadata } from "next";
import MembersTable from "./_components/swimmer_table";

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
      <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"> 
        <h2 className="text-body-2xlg font-bold text-dark dark:text-white">
          {"Events Calendar"}
        </h2>
      </div> 
      <CalendarBox/>
      <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"></div>
      <h2 className="text-body-2xlg font-bold text-dark dark:text-white">
          {"My Swimming Club Members"}
        </h2>
      <div/>
      <div className="mt-7.5 md:gap-6 2xl:gap-7.5">
        <MembersTable />
      </div>
     <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"></div>
      <h2 className="text-body-2xlg font-bold text-dark dark:text-white">
          {" Swimming Events List"}
        </h2>
        <div/>
      <div className="mt-7.5 grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <EventList />
      </div>
    </>
  );
}
