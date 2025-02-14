'use client'

import InputGroup from "@/components/FormElements/InputGroup";
import { ShowcaseSection } from "@/components/Layouts/showcase-section";
import { Select } from "@/components/FormElements/select";
import { TextAreaGroup } from "@/components/FormElements/InputGroup/text-area"
import Start_Date from "./Start_Date";
import End_Date from "./End_Date";
import Age_up from "./Age_up";
import Entry_deadline from "./entry_deadline";
import FileDropZone from "./FileDropZone";

export function CreateEventForm() {
  return (
    <ShowcaseSection title="Add Event Form" className="!p-6.5">
      <form action="#">
        <InputGroup
          label="Event Name"
          type="text"
          placeholder="Enter full name"
          className="mb-4.5"
        />

        <InputGroup
          label="Event Location"
          type="text"
          placeholder="Enter Location of Event"
          className="mb-4.5"
        />
        <Start_Date />
        <End_Date/>
        <Age_up />

        <InputGroup
          label="Course"
          type="text"
          placeholder="Enter Course Type (Short,  Long) "
          className="mb-4.5"
        />
        <Entry_deadline />

        <InputGroup
          label="License Number"
          type="text"
          placeholder="Enter License Number "
          className="mb-4.5"
        />
          <InputGroup
          label="Address One:"
          type="text"
          placeholder="Enter Address Line 1 "
          className="mb-4.5"
        />
        <InputGroup
          label="Address Two:"
          type="text"
          placeholder="Enter Address Line 2 "
          className="mb-4.5"
        />
          <InputGroup
            label="Address Three"
            type="text"
            placeholder="Enter Address Line 3 "
            className="mb-4.5"
        />
          <InputGroup
            label="County :"
            type="text"
            placeholder="Enter county "
            className="mb-4.5"
          />
          <InputGroup
            label="Eircode"
            type="text"
            placeholder="Enter Eircode "
            className="mb-4.5"
          />
          <TextAreaGroup
            label="Special Meet Conditions"
            placeholder="Any Additional Meet Conditions, Please enter here : "
            className="mb-5"
            defaultValue="Use this to enter any special meet conditions"
            />

          <FileDropZone />

        <button className="flex w-full justify-center rounded-lg bg-primary p-[13px] font-medium text-white hover:bg-opacity-90">
          Create Event
        </button>
      </form>
    </ShowcaseSection>
  );
}
