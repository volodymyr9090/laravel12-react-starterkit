import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
  } from '@/components/ui/sidebar';
  
  import { usePage, Link } from '@inertiajs/react';
  import AppLogo from './app-logo';
  import { NavFooter } from '@/components/nav-footer';
  import { NavUser } from '@/components/nav-user';
  import { iconMapper } from '@/lib/iconMapper';
  import type { LucideIcon } from 'lucide-react';
  
  interface MenuItem {
    id: number;
    title: string;
    route: string | null;
    icon: string;
    children?: MenuItem[];
  }
  
  export function AppSidebar() {
    const { menus = [] } = usePage().props as { menus?: MenuItem[] };
  
    const footerNavItems = [
      {
        title: 'Repository',
        url: 'https://github.com/laravel/react-starter-kit',
        icon: iconMapper('Folder') as LucideIcon,
      },
      {
        title: 'Documentation',
        url: 'https://laravel.com/docs/starter-kits',
        icon: iconMapper('BookOpen') as LucideIcon,
      },
    ];
  
    return (
      <Sidebar collapsible="icon" variant="inset">
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild>
                <Link href="/dashboard" prefetch>
                  <AppLogo />
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
  
        <SidebarContent>
          <SidebarMenu>
            {menus.map((menu) => {
              const Icon = iconMapper(menu.icon) as LucideIcon;
              const hasChildren = menu.children && menu.children.length > 0;
  
              return (
                <SidebarMenuItem key={menu.id}>
                  {hasChildren ? (
                    <>
                      <SidebarMenuButton>
                        <Icon className="size-4 mr-2" />
                        {menu.title}
                      </SidebarMenuButton>
                      <SidebarMenu>
                        {menu.children?.map((child) => {
                          const ChildIcon = iconMapper(child.icon) as LucideIcon;
                          return (
                            <SidebarMenuItem key={child.id}>
                              <SidebarMenuButton asChild>
                                <Link href={child.route || '#'}>
                                  <ChildIcon className="size-4 mr-2" />
                                  {child.title}
                                </Link>
                              </SidebarMenuButton>
                            </SidebarMenuItem>
                          );
                        })}
                      </SidebarMenu>
                    </>
                  ) : (
                    <SidebarMenuButton asChild>
                      <Link href={menu.route || '#'}>
                        <Icon className="size-4 mr-2" />
                        {menu.title}
                      </Link>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarContent>
  
        <SidebarFooter>
          <NavFooter items={footerNavItems} className="mt-auto" />
          <NavUser />
        </SidebarFooter>
      </Sidebar>
    );
  }  
