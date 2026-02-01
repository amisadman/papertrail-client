import { Sidebar1 } from "@/components/layout/AppSidebar";

export default function DashboardLayout({
  children,
  admin,
  user,
}: {
  children: React.ReactNode;
  admin: React.ReactNode;
  user: React.ReactNode;
}) {
  return (
    <Sidebar1 admin={admin} user={user}>
      {children}
    </Sidebar1>
  );
}
