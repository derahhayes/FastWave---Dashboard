import { title } from "process";
import * as Icons from "../icons";
import { UI_ELEMENTS } from "./ui-elements-list";


export const NAV_DATA = [
  {
    label: "Main Dashboard",

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
        title: "My Gala",
        icon: Icons.CheckList,
        items: [
        
          {
            title: "Gala Tasks",
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
            url: "/forms/Add_member",
          },
          {
            title: "Add Group",
            url: "/forms/Add_swimgroup",
          },
        ],
      },
      {
        title: "Event Entries",
        url: "/tables",
        icon: Icons.Table,
        items: [
          {
            title: "Create Event",
            url: "/forms/Add_event",
          },
          {
            title: "Enter Events",
            url: "/tables/pro-tables",
            isPro: false,
           
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
            title: "Coaching Reports",
            url: "/charts/advanced-chart",
            
          },
          {
            title: "Create Gala Pack",
            url: "/forms/Add_hytek",
            
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
            url: "/messages",
            
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
