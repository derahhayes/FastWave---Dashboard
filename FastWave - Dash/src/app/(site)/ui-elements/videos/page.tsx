import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import VideosItem from "@/components/ui-elements/VideosItem";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Videos",
};

export default function Page() {
  const videoId = "NpdQkEPELh4";

  return (
    <>
      <Breadcrumb pageName="Videos" />

      <div className="flex flex-col gap-7.5">
        <VideosItem aspectRatio="16:9" videoId={videoId} />
      </div>
    </>
  );
}
