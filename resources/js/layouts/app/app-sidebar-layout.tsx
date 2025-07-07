import { AppContent } from '@/components/app-content';
import { AppShell } from '@/components/app-shell';
import { AppSidebar } from '@/components/app-sidebar';
import { AppSidebarHeader } from '@/components/app-sidebar-header';
import { type BreadcrumbItem } from '@/types';
import { Toaster } from '@/components/ui/sonner';
import { Head } from '@inertiajs/react';

interface Props {
  children: React.ReactNode;
  breadcrumbs?: BreadcrumbItem[];
  title?: string;
}

export default function AppSidebarLayout({ children, breadcrumbs = [], title = 'Dashboard' }: Props) {
  return (
    <>
      <Head title={title} />
      <AppShell variant="sidebar">
        <AppSidebar />
        <AppContent variant="sidebar">
          <AppSidebarHeader breadcrumbs={breadcrumbs} />
          {children}
        </AppContent>
      </AppShell>
      <Toaster />
    </>
  );
}
