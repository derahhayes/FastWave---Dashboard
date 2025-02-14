import InputGroup from "@/components/FormElements/InputGroup";
import { ShowcaseSection } from "@/components/Layouts/showcase-section";
import { Select } from "@/components/FormElements/select";
import { TextAreaGroup } from "@/components/FormElements/InputGroup/text-area"

export function CreateMemberForm() {
  return (
    <ShowcaseSection title="New Member Form" className="!p-6.5">
      <form action="#">
        <InputGroup
          label="Name"
          type="text"
          placeholder="Enter full name"
          className="mb-4.5"
        />

        <InputGroup
          label="Email"
          type="email"
          placeholder="Enter email address"
          className="mb-4.5"
        />

         <Select
            label="What is your role in the club"
            placeholder="Select your role"
            className="mb-5"
            items={[
              { label: "Swimmer", value: "swimmer" },
              { label: "Coach", value: "coach" },
              { label: "Guardian", value: "guardian" },
            ]}
          />
          <TextAreaGroup
            label="Message New Member"
            placeholder="Type Message Here"
            className="mb-5"
            defaultValue="Send your new member instructions on what to do next"
            />
        <button className="flex w-full justify-center rounded-lg bg-primary p-[13px] font-medium text-white hover:bg-opacity-90">
          Register
        </button>
      </form>
    </ShowcaseSection>
  );
}
