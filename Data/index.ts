export type NavItem = {
  name: string;
  link: string;
};

export const navItems: NavItem[] = [
  { name: "Home", link: "/" },
  { name: "About", link: "/#about" },
  { name: "Rooms", link: "/Rooms" },
  { name: "Restaurant", link: "/Restaurant" },
  { name: "Conference hall", link: "/#conference-hall" },
  { name: "Contacts", link: "/#contacts" },
];
