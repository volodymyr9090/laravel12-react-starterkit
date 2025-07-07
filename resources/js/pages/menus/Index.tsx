import React, { useState } from 'react';
import { Head, router } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import SortableMenuItem from '@/pages/menus/SortableMenuItem';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface MenuItem {
  id: number;
  title: string;
  parent_id?: number;
  order: number;
  children?: MenuItem[];
}

interface Props {
  menus: MenuItem[];
}

export default function MenuIndex({ menus: initialMenus }: Props) {
  const [menus, setMenus] = useState<MenuItem[]>(initialMenus);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor)
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = menus.findIndex((m) => m.id === Number(active.id));
    const newIndex = menus.findIndex((m) => m.id === Number(over.id));

    setMenus((prev) => arrayMove(prev, oldIndex, newIndex));
  };

  const handleSave = () => {
    router.post('/menus/reorder', { menus: menus.map(menu => menu.id) });
  };

  return (
    <AppLayout title="Manajemen Menu">
      <Head title="Manajemen Menu" />
      <div className="flex-1 p-4">
        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Manajemen Menu (Drag & Drop)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-end mb-6">
              <Button onClick={handleSave}>Simpan Perubahan</Button>
            </div>

            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
            >
              <SortableContext
                items={menus.map((m) => m.id.toString())}
                strategy={verticalListSortingStrategy}
              >
                <div className="space-y-2">
                  {menus.map((menu) => (
                    <SortableMenuItem key={menu.id} id={menu.id.toString()} title={menu.title} />
                  ))}
                </div>
              </SortableContext>
            </DndContext>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
