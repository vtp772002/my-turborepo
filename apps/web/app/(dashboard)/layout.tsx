import DashboardLayout from '@/components/dashboard/DashboardLayout';
import '../app.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
