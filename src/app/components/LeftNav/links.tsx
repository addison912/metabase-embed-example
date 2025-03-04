import {
  ChartBarSquareIcon,
  Cog6ToothIcon,
  LifebuoyIcon,
  ArrowLeftStartOnRectangleIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/solid";
import { useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import type { MenuItem } from "@/types/ui";
import Icon from "../Icon";

type LeftNavLinks = {
  upperMenuItems: MenuItem[];
  lowerMenuItems: MenuItem[];
};

export const getLinks = (): LeftNavLinks => {
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
      icon: ChartBarSquareIcon,
      href: "/analytics",
    },
    {
      name: "Question",
      icon: QuestionMarkCircleIcon,
      href: "/analytics/question",
    },

    {
      name: "Sign Out",
      icon: ArrowLeftStartOnRectangleIcon,
      onClick: () => handleSignOut(),
    },
  ];

  const studentLower: MenuItem[] = [
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

  let links = { upperMenuItems: studentUpper, lowerMenuItems: studentLower };

  return links;
};
