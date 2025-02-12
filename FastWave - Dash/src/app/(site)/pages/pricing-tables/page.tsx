import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import PricingTableTwo from "@/components/PricingTables/PricingTableTwo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fee Structure",
};

export default function PricingTablePage() {
  return (
    <>
      <Breadcrumb pageName="Fee Structure" />

      <div className="flex flex-col gap-5 md:gap-7 2xl:gap-10">
        
        <PricingTableTwo />
      </div>
    </>
  );
}
