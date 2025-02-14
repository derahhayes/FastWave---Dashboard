import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import { CreateEventForm } from "./_components/create_event";

export const metadata: Metadata = {
  title: "Create Event",
};

export default function Page() {
  return (
    <>
      <Breadcrumb pageName="Create Event" />

      <div className="grid grid-cols-1">
        <div className="flex flex-col gap-9">
        <CreateEventForm />
        </div>
      </div>
    </>
  );
};

