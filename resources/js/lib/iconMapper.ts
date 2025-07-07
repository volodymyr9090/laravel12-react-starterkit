import {
    LayoutGrid,
    Users,
    Folder,
    BookOpen,
    Settings,
    List,
    Settings2,
  } from 'lucide-react';
  
  const icons = {
    LayoutGrid,
    Users,
    Folder,
    BookOpen,
    Settings,
    List,
    Settings2,
  };
  
  export function iconMapper(name?: string) {
    return icons[name as keyof typeof icons] || LayoutGrid;
  }
  