import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { Metadata } from "next";
import { CreateMemberForm } from "./_components/create_member";

export const metadata: Metadata = {
  title: "Create Member",
};

export default function Page() {
  return (
    <>
      <Breadcrumb pageName="Add Member" />

      <div className="grid grid-cols-1">
        <div className="flex flex-col gap-9">
        <CreateMemberForm />
        </div>
      </div>
    </>
  );
};

