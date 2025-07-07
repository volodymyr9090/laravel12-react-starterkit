import React, { useState } from 'react';
import { Head, router, Link } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { type BreadcrumbItem } from '@/types'
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
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { toast } from 'sonner'
import { Edit, Trash2 } from 'lucide-react';

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

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Manajemen Menu',
        href: '/menus',
    },
];

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

    const handleDelete = (id: number) => {
        router.delete(`/menus/${id}`, {
            onSuccess: () => {
                setMenus(menus.filter(menu => menu.id !== id));
                toast.success('Menu berhasil dihapus.');
            },
            onError: () => {
                toast.error('Gagal menghapus menu.');
            },
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Manajemen Menu" />

            <div className="flex-1 p-4">
                <Card className="w-full">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold">Manajemen Menu (Drag & Drop)</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center justify-end">
                            <Link href="/menus/create">
                                <Button>Tambah Menu</Button>
                            </Link>
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
                                        <div key={menu.id} className="flex items-center justify-between rounded border bg-white px-4 py-2 shadow-sm dark:bg-muted">
                                            <SortableMenuItem id={menu.id.toString()} title={menu.title} />
                                            <div className="flex items-center gap-2">
                                                <Link href={`/menus/${menu.id}/edit`}>
                                                    <Button variant="ghost" size="icon">
                                                        <Edit className="h-4 w-4" />
                                                    </Button>
                                                </Link>
                                                <AlertDialog>
                                                    <AlertDialogTrigger asChild>
                                                        <Button variant="ghost" size="icon" className="text-red-500 hover:bg-red-50">
                                                            <Trash2 className="h-4 w-4" />
                                                        </Button>
                                                    </AlertDialogTrigger>
                                                    <AlertDialogContent>
                                                        <AlertDialogHeader>
                                                            <AlertDialogTitle>Apakah Anda yakin?</AlertDialogTitle>
                                                            <AlertDialogDescription>
                                                                Tindakan ini tidak dapat dibatalkan. Menu ini akan dihapus secara permanen.
                                                            </AlertDialogDescription>
                                                        </AlertDialogHeader>
                                                        <AlertDialogFooter>
                                                            <AlertDialogCancel>
                                                                Batal
                                                            </AlertDialogCancel>
                                                            <AlertDialogAction onClick={() => handleDelete(menu.id)}>
                                                                Hapus
                                                            </AlertDialogAction>
                                                        </AlertDialogFooter>
                                                    </AlertDialogContent>
                                                </AlertDialog>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </SortableContext>
                        </DndContext>
                        <div className="flex justify-end">
                            <Button onClick={handleSave}>Simpan Perubahan</Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
