import {
    AlarmClockCheck,
    CalendarCheck,
    Home,
    Lock,
    LucideIcon,
    Video,
} from "lucide-react";

type sidebarLink = {
  icon: LucideIcon;
  route: string;
  label: string;
};
export const sidebarLinks: sidebarLink[] = [
  {
    icon: Home,
    route: "/",
    label: "Home",
  },

  {
    icon: AlarmClockCheck,
    route: "/upcoming",
    label: "Upcoming",
  },
  {
    icon: CalendarCheck,
    route: "/previous",
    label: "Previous",
  },
  {
    icon: Video,
    route: "/recordings",
    label: "Recordings",
  },
  {
    icon: Lock,
    route: "/personal-room",
    label: "Personal Room",
  },
];

export const avatarImages = [
  "/images/avatar-1.jpeg",
  "/images/avatar-2.jpeg",
  "/images/avatar-3.png",
  "/images/avatar-4.png",
  "/images/avatar-5.png",
];
