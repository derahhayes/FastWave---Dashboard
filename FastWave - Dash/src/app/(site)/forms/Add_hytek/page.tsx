import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { Metadata } from "next";
import { CreateGroupForm } from "./_components/create_hytek";

export const metadata: Metadata = {
  title: "Create Meet Manager pack",
};

export default function Page() {
  return (
    <>
      <Breadcrumb pageName="Filename" />

      <div className="grid grid-cols-1">
        <div className="flex flex-col gap-9">
        <CreateGroupForm />
        </div>
      </div>
    </>
  );
};

