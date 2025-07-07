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
  import { ChevronDown } from 'lucide-react';
  
  interface MenuItem {
    id: number;
    title: string;
    route: string | null;
    icon: string;
    children?: MenuItem[];
  }
  
  function RenderMenu({ items, level = 0 }: { items: MenuItem[]; level?: number }) {
    const { url: currentUrl } = usePage();
  
    return (
      <>
        {items.map((menu) => {
          const Icon = iconMapper(menu.icon) as LucideIcon;
          const hasChildren = menu.children && menu.children.length > 0;
  
          const isActive = menu.route && currentUrl.startsWith(menu.route);
          const indentClass = `pl-${Math.min(4 + level * 4, 12)}`;
  
          const activeClass = isActive
            ? 'bg-muted text-foreground font-semibold'
            : 'text-muted-foreground';
  
          return (
            <SidebarMenuItem key={menu.id}>
              {hasChildren ? (
                <>
                  <SidebarMenuButton className={`${indentClass} ${activeClass}`}>
                    <Icon className="size-4 mr-2" />
                    <span className="flex-1">{menu.title}</span>
                    <ChevronDown className="size-4 opacity-50" />
                  </SidebarMenuButton>
                  <SidebarMenu>
                    <RenderMenu items={menu.children!} level={level + 1} />
                  </SidebarMenu>
                </>
              ) : (
                <SidebarMenuButton asChild className={`${indentClass} ${activeClass}`}>
                  <Link href={menu.route || '#'}>
                    <Icon className="size-4 mr-2" />
                    {menu.title}
                  </Link>
                </SidebarMenuButton>
              )}
            </SidebarMenuItem>
          );
        })}
      </>
    );
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
            <RenderMenu items={menus} />
          </SidebarMenu>
        </SidebarContent>
  
        <SidebarFooter>
          <NavFooter items={footerNavItems} className="mt-auto" />
          <NavUser />
        </SidebarFooter>
      </Sidebar>
    );
  }
  