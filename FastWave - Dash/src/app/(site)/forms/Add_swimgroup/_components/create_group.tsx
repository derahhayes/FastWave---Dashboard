import InputGroup from "@/components/FormElements/InputGroup";
import { ShowcaseSection } from "@/components/Layouts/showcase-section";


export function CreateGroupForm() {
  return (
    <ShowcaseSection title="Create New Group Form" className="!p-6.5">
      <form action="#">
        <InputGroup
          label="Group Name"
          type="text"
          placeholder="Enter the name of the group (eg. Elite)"
          className="mb-4.5"
        />
        <button className="flex w-full justify-center rounded-lg bg-primary p-[13px] font-medium text-white hover:bg-opacity-90">
          Create Group
        </button>
      </form>
    </ShowcaseSection>
  );
}
