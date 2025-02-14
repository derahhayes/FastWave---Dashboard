import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { Metadata } from "next";
import { CreateGroupForm } from "./_components/create_group";

export const metadata: Metadata = {
  title: "Create Swimming Group",
};

export default function Page() {
  return (
    <>
      <Breadcrumb pageName="Add Group" />

      <div className="grid grid-cols-1">
        <div className="flex flex-col gap-9">
        <CreateGroupForm />
        </div>
      </div>
    </>
  );
};

