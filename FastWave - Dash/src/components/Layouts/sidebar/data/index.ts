import { title } from "process";
import * as Icons from "../icons";
import { UI_ELEMENTS } from "./ui-elements-list";

export const NAV_DATA = [
  {
    items: [
      {
        title: "Dashboard",
        icon: Icons.HomeIcon,
        items: [

          {
            title: "FastWave DashBoard",
            url: "/",
          },
          {
            title: "Calendar",
            url: "/calendar", 
            icon: Icons.Calendar,
            items: [],
          },
          {
            title: "Profile",
            url: "/profile",
            icon: Icons.User,
            items: [],
          },
        ], 
      },

      {
        title: "Tasks",
        icon: Icons.CheckList,
        items: [
          {
            title: "List",
            url: "/tasks/task-list",
            
          },
          {
            title: "Kanban",
            url: "/tasks/task-kanban",
            
          },
        ],
      },
      {
        title: "Manage Club",
        icon: Icons.Alphabet,
        items: [
          {
            title: "Add Member",
            url: "/forms/form-elements",
          },
          {
            title: "Add Group",
            url: "/forms/pro-form-elements",
          },
          {
            title: "Add Group",
            url: "/forms/form-layout",
          },
          {
            title: "Add Member",
            url: "/forms/pro-form-layout",
          },
        ],
      },
      {
        title: "Event Entries",
        url: "/tables",
        icon: Icons.Table,
        items: [
          {
            title: "Tables",
            url: "/tables",
          },
          {
            title: "Swimmers Tables",
            url: "/tables/pro-tables",
           
          },
          {
            title: "Events Table",
            url: "/pages/data-tables",
          },
        ],
      },
      {
        title: "My Club",
        icon: Icons.Alphabet,
        items: [
          {
            title: "Settings",
            url: "/pages/settings",
          },
          {
            title: "Document Manager",
            url: "/pages/file-manager",
            
          },
         
          {
            title: "Error Page",
            url: "/pages/error-page",
            
          },
          {
            title: "Coaching Teams",
            url: "/pages/team",
            
          },

        ],
      },

      {
        title: "Club Invoicing",
        icon: Icons.PieChart,
        items: [
            {
              title: "Set-Up Fees",
              url: "/pages/pricing-tables",
              
            },
            {
              title: "Invoice",
              url: "/invoice",
            },
        ],
      },
      {

        title: "Communications",
        icon: Icons.Inbox,
        items: [

          {
            title: "Inbox",
            icon: Icons.Inbox,
            url: "/message",
            
          },

          {
            title: "Messages",
            icon: Icons.Chat,
            url: "/inbox",
            
          },

        ],

      },
      {

        title: "Support",
        icon: Icons.ChevronUp,
        items: [

          {
            title: "Video Help!",
            url: "/videos",
            
          },

          {
            title: "Document Help",
            url: "/",
            
          },

        ],

      },
      {
        title: "Authentication Tools",
        icon: Icons.Authentication,
        items: [
          {
            title: "Sign In",
            url: "/auth/sign-in",
          },
          {
            title: "Sign Up",
            url: "/auth/sign-up",
            
          },
          {
            title: "Reset Password",
            url: "/auth/forgot-password",
           
          },
          {
            title: "Set-up 2 Step Verification",
            url: "/auth/two-step-verification",
            
          },
        
        ],
      },
    ],
    },
];
