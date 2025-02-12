import { group } from "console";

export async function getLeadReportData() {
  // Fake delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return [
    {
      avatar: "/images/user/user-17.png",
      name: "Charlie Donin",
      email: "wdavis@aol.com",
      swimirelandid: "12313232",
      group: "Performance",
      status: "Active",
    },
    {
      avatar: "/images/user/user-15.png",
      name: "Makenna Carder",
      email: "ltorres@aol.com",
      swimirelandid: "12376598",
      group: "Beginner",
      status: "Active",
    },
    {
      avatar: "/images/user/user-19.png",
      name: "Talan Dokidis",
      email: "rtaylor@aol.com",
      swimirelandid: "98745612", 
      group: "Performance ",
      status: "Active",
    },
    {
      avatar: "/images/user/user-14.png",
      name: "Cheyenne Levin",
      email: "ebrown@aol.com",
      swimirelandid: "09236512",
      group: "Performamce",
      status: "Active",
    },
    {
      avatar: "/images/user/user-21.png",
      name: "James Aminoff",
      email: "slee@aol.com",
      swimirelandid: "43876915", 
      group: "Performance",
      status: "Active",
    },
  ];
}

export async function getTodoList() {
  // Fake delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return [
    {
      logo: "/images/todo/dribble.svg",
      title: "Gerry Ryan Invitational",
      datetime: {
        start: "2025-01-17T09:00:00.000Z",
        end: "2025-01-19T18:00:00.000Z",
      },
      status: "Completed",
    },
    {
      logo: "/images/todo/uideck.svg",
      title: "Sundays Well Masters",
      datetime: {
        start: "2025-02-15T09:00:00.000Z",
        end: "2025-02-15T18:00:00.000Z",
      },
      status: "Upcoming",
    },
    {
      logo: "/images/todo/dribble.svg",
      title: "Swim Munster Annual Regional Conference",
      datetime: {
        start: "2025-02-15T17:30:00.000Z",
        end: "2025-02-15T20:00:00.000Z",
      },
      status: "Upcoming",
    },
    {
      logo: "/images/todo/uideck.svg",
      title: "Ennis Invitational ",
      datetime: {
        start: "2025-02-21T09:00:00.000Z",
        end: "2025-02-21T17:00:00.000Z",
      },
      status: "Upcoming",
    },
  ];
}
