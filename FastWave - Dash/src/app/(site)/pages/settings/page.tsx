import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import SettingBoxes from "@/components/SettingBoxes";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Settings Page",
};

export default function SettingsPage() {
  return (
    <div className="mx-auto w-full max-w-[1080px]">
      <Breadcrumb pageName="My Settings" />

      <SettingBoxes />
    </div>
  );
};

