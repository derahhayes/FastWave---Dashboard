import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import MembersTable from "@/app/(site)/(home)/_components/swimmer_table"
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

      
      <div>
        <Suspense fallback={<ProTableStyle1Skeleton />}>
          <ProTableStyle1 /> 
        </Suspense>
      </div>
    </>
  );
};

