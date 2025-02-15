import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import type { Metadata } from "next";
import { Suspense } from "react";
import { ProTableStyle1 } from "./_components/style-1";
import { ProTableStyle1Skeleton } from "./_components/style-1/skeleton";


export const metadata: Metadata = {
  title: "Event Entry",
};

export default async function Page() {
  return (
    <>
      <Breadcrumb pageName="Event Entry" />

      <div className="grid gap-10">
        <Suspense fallback={<ProTableStyle1Skeleton />}>
          <ProTableStyle1 />
        </Suspense>

      </div>
    </>
  );
};

