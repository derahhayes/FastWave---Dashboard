'use client'

import { ChevronLeft, ChevronRight, SearchIcon } from "@/assets/icons";
import {
  Column,
  useFilters,
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
import ColumnFilter from "./ColumnFilter";
import { PointerUp } from "./icons";

const EMPLOYEE_RECORDS = [
  {
    name: "Brielle Kuphal",
    category: "",
    duration: "3 years",
    birthDate: "25 Nov, 1977",
    email: "Brielle45@gmail.com",
    phone: "+323(29)-232-44-74",
    address: "Block A, Demo Park",
    status: "Active",
    c_role: "Guardian",
  },
  {
    name: "Barney Murray",
    category: "",
    duration: "3 years",
    birthDate: "25 Nov, 1966",
    email: "Barney@gmail.com",
    phone: "+323(29)-232-75-44",
    address: "Block A, Demo Park",
    status: "InActive",
    c_role: "Guardian",
  },
  {
    name: "Ressie Ruecker",
    category: "Junior",
    duration: "3 years",
    birthDate: "25 Nov, 1955",
    email: "Ressie@gmail.com",
    phone: "+323(29)-785-44-44",
    address: "Block A, Demo Park",
    status: "Active",
    c_role: "Coach",
  },
  {
    name: "Teresa Mertz",
    category: "Junior",
    duration: "3 years",
    birthDate: "25 Nov, 1979",
    email: "Teresa@gmail.com",
    phone: "+323(29)-232-15-44",
    address: "Block A, Demo Park",
    status: "InActive",
    c_role: "Swimmer",
  },
  {
    name: "Chelsey Hackett",
    category: "Elite",
    duration: "3 years",
    birthDate: "25 Nov, 1969",
    email: "Chelsey@gmail.com",
    phone: "+323(29)-232-56-89",
    address: "Block A, Demo Park",
    status: "Active",
    c_role: "Swimmer",
  },
  {
    name: "Tatyana Metz",
    category: "Elite",
    duration: "3 years",
    birthDate: "25 Nov, 1989",
    email: "Tatyana@gmail.com",
    phone: "+323(29)-789-42-23",
    address: "Block A, Demo Park",
    status: "InActive",
    c_role: "Swimmer",
  },
  {
    name: "Oleta Harvey",
    category: "Elite",
    duration: "3 years",
    birthDate: "25 Nov, 1979",
    email: "Oleta@gmail.com",
    phone: "+323(29)-852-63-95",
    address: "Block A, Demo Park",
    status: "Active",
    c_role: "Coach",
  },
  {
    name: "Bette Haag",
    category: "Elite",
    duration: "3 years",
    birthDate: "25 Nov, 1979",
    email: "Bette@gmail.com",
    phone: "+323(29)-852-23-01",
    address: "Block A, Demo Park",
    status: "InActive",
    c_role: "Coach",
  },
  {
    name: "Meda Ebert",
    category: "Elite",
    duration: "3 years",
    birthDate: "25 Nov, 1945",
    email: "Meda@gmail.com",
    phone: "+323(29)-232-15-23",
    address: "Block A, Demo Park",
    status: "Active",
    c_role: "Swimmer",
  },
  {
    name: "Elissa Stroman",
    category: "Elite",
    duration: "3 years",
    birthDate: "25 Nov, 2000",
    email: "Elissa@gmail.com",
    phone: "+323(29)-756-25-63",
    address: "Block A, Demo Park",
    status: "InActive",
    c_role: "Swimmer",
  },
  {
    name: "Sid Swaniawski",
    category: "",
    duration: "3 years",
    birthDate: "25 Nov, 1999",
    email: "Sid@gmail.com",
    phone: "+323(29)-859-52-12",
    address: "Block A, Demo Park",
    status: "Active",
    c_role: "Swimmer",
  },
  {
    name: "Madonna Hahn",
    category: "Elite",
    duration: "3 years",
    birthDate: "25 Nov, 1965",
    email: "Madonna@gmail.com",
    phone: "+323(29)-896-52-13",
    address: "Block A, Demo Park",
    status: "InActive",
    c_role: "Swimmer",
  },
  {
    name: "Waylon Kihn",
    category: "Elite",
    duration: "3 years",
    birthDate: "25 Nov, 1975",
    email: "Waylon@gmail.com",
    phone: "+323(29)-420-45-65",
    address: "Block A, Demo Park",
    status: "Active",
    c_role: "Swimmer",
  },
  {
    name: "Jaunita Lindgren",
    category: "Elite",
    duration: "3 years",
    birthDate: "25 Nov, 1945",
    email: "Jaunita@gmail.com",
    phone: "+323(29)-789-45-89",
    address: "Block A, Demo Park",
    status: "InActive",
    c_role: "Swimmer",
  },
  {
    name: "Lenora MacGyver",
    category: "Intermediate",
    duration: "3 years",
    birthDate: "25 Nov, 1998",
    email: "Lenora@gmail.com",
    phone: "+323(29)-789-12-75",
    address: "Block A, Demo Park",
    status: "Active",
    c_role: "Swimmer",
  },
  {
    name: "Chelsey Hackett",
    category: "Intermediate",
    duration: "3 years",
    birthDate: "25 Nov, 1968",
    email: "Chelsey@gmail.com",
    phone: "+323(29)-963-14-52",
    address: "Block A, Demo Park",
    status: "InActive",
    c_role: "Swimmer",
  },
  {
    name: "Tatyana Metz",
    category: "Intermediate",
    duration: "3 years",
    birthDate: "25 Nov, 1984",
    email: "Tatyana@gmail.com",
    phone: "+323(29)-856-75-12",
    address: "Block A, Demo Park",
    status: "Active",
    c_role: "Swimmer",
  },
  {
    name: "Oleta Harvey",
    category: "Intermediate",
    duration: "3 years",
    birthDate: "25 Nov, 1989",
    email: "Oleta@gmail.com",
    phone: "+323(29)-963-15-95",
    address: "Block A, Demo Park",
    status: "InActive",
    c_role: "Swimmer",
  },
  {
    name: "Meda Ebert",
    category: "Intermediate",
    duration: "3 years",
    birthDate: "25 Nov, 1988",
    email: "Meda@gmail.com",
    phone: "+323(29)-258-62-32",
    address: "Block A, Demo Park",
    status: "InActive",
    c_role: "Swimmer",
  },
  {
    name: "Elissa Stroman",
    category: "Intermediate",
    duration: "3 years",
    birthDate: "25 Nov, 1998",
    email: "Elissa@gmail.com",
    phone: "+323(29)-856-41-44",
    address: "Block A, Demo Park",
    status: "Active",
    c_role: "Swimmer",
  },
  {
    name: "Sid Swaniawski",
    category: "",
    duration: "3 years",
    birthDate: "25 Nov, 1997",
    email: "Sid@gmail.com",
    phone: "+323(29)-147-75-56",
    address: "Block A, Demo Park",
    status: "InActive",
    c_role: "Guardian",
  },
  {
    name: "Madonna Hahn",
    category: "",
    duration: "3 years",
    birthDate: "25 Nov, 1964",
    email: "Madonna@gmail.com",
    phone: "+323(29)-863-25-13",
    address: "Block A, Demo Park",
    status: "Active",
    c_role: "Guardian",
  },
  {
    name: "Waylon Kihn",
    category: "",
    duration: "3 years",
    birthDate: "25 Nov, 1945",
    email: "Waylon@gmail.com",
    phone: "+323(29)-896-75-25",
    address: "Block A, Demo Park",
    status: "InActive",
    c_role: "Guardian",
  },
  {
    name: "Jaunita Lindgren",
    category: "",
    duration: "3 years",
    birthDate: "25 Nov, 1989",
    email: "Jaunita@gmail.com",
    phone: "+323(29)-789-12-45",
    address: "Block A, Demo Park",
    status: "Active",
    c_role: "Guardian",
  },
  {
    name: "Lenora MacGyver",
    category: "",
    duration: "3 years",
    birthDate: "25 Nov, 1985",
    email: "Lenora@gmail.com",
    phone: "+323(29)-856-75-12",
    address: "Block A, Demo Park",
    status: "InActive",
    c_role: "Guardian",
  },
];

// table header
const columns: Column<(typeof EMPLOYEE_RECORDS)[number]>[] = [
  {
    id: "name",
    Header: "Members Name",
    accessor: "name",
  },
  {
    id: "category",
    Header: "Category",
    accessor: "category",
  },
  {
    id: "birthday",
    Header: "Date of Birth",
    accessor: "birthDate",
  },
  {
    id: "Contact Email",
    Header: "Email",
    accessor: "email",
  },
  {
    id: "address",
    Header: "Home Address",
    accessor: "address",
  },
  {
    id: "status",
    Header: "Status",
    accessor: "status",
  },
  {
    id: "c_role",
    Header: "Club Role",
    accessor: "c_role",
  },
];

const MembersTable = () => {
  const tableInstance = useTable(
    {
      columns,
      data: EMPLOYEE_RECORDS,
      defaultColumn: {
        Filter: ColumnFilter,
      },
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination,
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state,
    setGlobalFilter,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    setPageSize,
    gotoPage,
  } = tableInstance;

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <section className="data-table-common rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
      <div className="flex justify-between px-7.5 py-4.5">
        <div className="relative z-20 w-full max-w-[414px]">
          <input
            type="text"
            value={globalFilter || ""}
            onChange={(e) => setGlobalFilter(e.target.value)}
            className="w-full rounded-lg border border-stroke bg-transparent px-5 py-2.5 outline-none focus:border-primary dark:border-dark-3 dark:bg-dark-2 dark:focus:border-primary"
            placeholder="Search here..."
          />

          <button className="absolute right-0 top-0 flex h-11.5 w-11.5 items-center justify-center rounded-r-md bg-primary text-white">
            <SearchIcon className="size-4.5" />
          </button>
        </div>

        <div className="flex items-center font-medium">
          <p className="pl-2 font-medium text-dark dark:text-current">
            Per Page:
          </p>
          <select
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
            className="bg-transparent pl-2.5"
          >
            {[5, 10, 20, 50].map((page) => (
              <option key={page} value={page}>
                {page}
              </option>
            ))}
          </select>
        </div>
      </div>

      <table
        {...getTableProps()}
        className="datatable-table datatable-one w-full table-auto !border-collapse overflow-hidden break-words px-4 md:table-fixed md:overflow-auto md:px-8"
      >
        <thead className="border-separate px-4">
          {headerGroups.map((headerGroup, headerGroupIndex) => (
            <tr
              className="border-t border-stroke dark:border-dark-3"
              {...headerGroup.getHeaderGroupProps()}
              key={`headerGroup-${headerGroupIndex}`}
            >
              {headerGroup.headers.map((column, columnIndex) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  key={`header-${headerGroupIndex}-${columnIndex}`}
                >
                  <div>
                    <div className="flex items-center">
                      <span> {column.render("Header")}</span>

                      <div className="ml-2 inline-flex flex-col space-y-[2px]">
                        <PointerUp />

                        <PointerUp className="rotate-180" />
                      </div>
                    </div>

                    {column.canFilter ? column.render("Filter") : null}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.length === 0 && (
            <tr>
              <td colSpan={6} className="py-12 text-center">
                No data found
              </td>
            </tr>
          )}

          {page.map((row, rowIndex) => {
            prepareRow(row);
            return (
              <tr
                className="border-t border-stroke dark:border-dark-3"
                {...row.getRowProps()}
                key={`row-${rowIndex}`}
              >
                {row.cells.map((cell, cellIndex) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      key={`cell-${rowIndex}-${cellIndex}`}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="flex justify-between px-7.5 py-7">
        <div className="flex items-center">
          <button
            className="flex items-center justify-center rounded-[3px] p-[7px] hover:bg-primary hover:text-white disabled:pointer-events-none"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            <ChevronLeft width={18} height={18} />
          </button>

          {pageOptions.map((_page, index) => (
            <button
              key={`page-${index}`}
              onClick={() => {
                gotoPage(index);
              }}
              className={`${
                pageIndex === index && "bg-primary text-white"
              } mx-1 flex items-center justify-center rounded-[3px] p-1.5 px-[15px] font-medium hover:bg-primary hover:text-white`}
            >
              {index + 1}
            </button>
          ))}

          <button
            className="flex items-center justify-center rounded-[3px] p-[7px] hover:bg-primary hover:text-white disabled:pointer-events-none"
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            <ChevronRight width={18} height={18} />
          </button>
        </div>
        <p className="font-medium">
          Showing {pageIndex + 1} 0f {pageOptions.length} pages
        </p>
      </div>
    </section>
  );
};

export default MembersTable;
