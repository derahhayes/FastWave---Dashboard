import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { Metadata } from "next";
import { Invoice } from "./_components/create_inv";

export const metadata: Metadata = {
  title: "Pro Form Layout",
};

export default function Page() {
  return (
    <>
      <Breadcrumb pageName="Pro Form Layout" />

      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          <Invoice />
        </div>
      </div>
    </>
  );
};


