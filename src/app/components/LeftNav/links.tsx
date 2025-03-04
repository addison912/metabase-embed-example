import {
  ChartPieIcon,
  AcademicCapIcon,
  ChatBubbleLeftIcon,
  ViewColumnsIcon,
  FolderIcon,
  Cog6ToothIcon,
  UserCircleIcon,
  LifebuoyIcon,
  RocketLaunchIcon,
  ArrowLeftStartOnRectangleIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import { DocumentationIcon, TaskListIcon } from "../icons/UiIcons";
import { useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import type { MenuItem } from "@/types/ui";
import Icon from "../Icon";

type LeftNavLinks = {
  upperMenuItems: MenuItem[];
  lowerMenuItems: MenuItem[];
};

export const getLinks = (role: string): LeftNavLinks => {
  const { signOut } = useClerk();
  const router = useRouter();
  function handleSignOut() {
    signOut();
    router.push("/");
  }

  const EssaysIcon = () => (
    <Icon className="-ml-[2px] text-gray-400" symbol="contract_edit" />
  );

  const studentUpper: MenuItem[] = [
    {
      name: "Dashboard",
      icon: ChartPieIcon,
      href: "/student",
    },
    {
      name: "Essays",
      icon: DocumentTextIcon,
      href: "/student/essay",
    },
    {
      name: "Schools",
      icon: AcademicCapIcon,
      href: "/student/schools",
    },
    {
      name: "Checklist",
      icon: TaskListIcon,
      href: "/student/tasks",
    },
    {
      name: "Messages",
      icon: ChatBubbleLeftIcon,
      href: "/student/messages",
      after: (
        <span className="ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-cyan-600 p-3 text-sm font-medium text-white">
          4
        </span>
      ),
    },
    {
      name: "Counselors",
      icon: UserCircleIcon,
      href: "/student/counselors",
    },
    {
      name: "Documents",
      icon: FolderIcon,
      href: "/student/docs",
    },
    {
      name: "Kanban",
      icon: ViewColumnsIcon,
      href: "#",
      after: (
        <span className="ms-3 inline-flex items-center justify-center rounded-full bg-orange-800 px-2 text-sm font-medium dark:text-gray-200">
          Pro
        </span>
      ),
    },
    {
      name: "Sign Out",
      icon: ArrowLeftStartOnRectangleIcon,
      onClick: () => handleSignOut(),
    },
  ];

  const studentLower: MenuItem[] = [
    {
      name: "Upgrade to Pro",
      icon: RocketLaunchIcon,
      href: "/account/upgrade",
    },
    {
      name: "Documentation",
      icon: DocumentationIcon,
      href: "/docs",
    },
    {
      name: "Help",
      icon: LifebuoyIcon,
      href: "/help",
    },
    {
      name: "Account Settings",
      icon: Cog6ToothIcon,
      href: "/profile",
    },
  ];

  let links: LeftNavLinks = { upperMenuItems: [], lowerMenuItems: [] };
  if (role === "student") {
    links = { upperMenuItems: studentUpper, lowerMenuItems: studentLower };
  }
  return links;
};
