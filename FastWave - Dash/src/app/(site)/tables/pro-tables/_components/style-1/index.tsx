import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getProTable1Data } from "../../fetch";

export async function ProTableStyle1() {
  const data = await getProTable1Data();

  return (
    <div className="overflow-x-auto rounded-lg">
      <Table className="bg-white dark:bg-gray-dark dark:text-white">
        <TableHeader>
          <TableRow className="bg-[#F9FAFB] uppercase dark:bg-gray-dark [&>th]:py-4 [&>th]:text-current">
            <TableHead className="pl-5 lg:pl-7.5 2xl:pl-11">Event Number</TableHead>
            <TableHead>Event Sub Number</TableHead>
            <TableHead>Distance</TableHead>
            <TableHead>Stroke</TableHead>
            <TableHead>Fee</TableHead>
            <TableHead>Age Category</TableHead>
            <TableHead>Cut-Off Time</TableHead>
            <TableHead>Course Type</TableHead>
            <TableHead className="pr-5 text-center lg:pr-7.5 2xl:pr-11">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((user, index) => (
            <TableRow className="text-base font-medium [&>td]:py-4" key={index}>
              <TableCell className="truncate pl-5 lg:pl-7.5 2xl:pl-11">
                {user.eventNo}
              </TableCell>

              <TableCell className="truncate">{user.eventsubNo}</TableCell>

              <TableCell>{user.distance}</TableCell>

              <TableCell>{user.stroke}</TableCell>
              <TableCell>{user.fee}</TableCell>
              <TableCell>{user.age}</TableCell>
              <TableCell>{user.timeup}</TableCell>
              <TableCell>{user.course}</TableCell>

              <TableCell className="pr-5 lg:pr-7.5 2xl:pr-11">
                <button className="mx-auto block text-accent">Enter</button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
