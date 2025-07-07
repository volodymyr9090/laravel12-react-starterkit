import React from 'react';
import { Head, router, Link, usePage } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { type BreadcrumbItem } from '@/types';
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from '@/components/ui/select';
import { Plus, Edit, Trash2 } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from '@/components/ui/alert-dialog';
import { toast } from 'sonner';
import { type Permission } from '@/types';

interface Props {
  permissions: {
    data: Permission[];
    current_page: number;
    last_page: number;
    links: { url: string | null; label: string; active: boolean }[];
  };
  groups: string[];
  filters: {
    group?: string;
    search?: string;
  };
}

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Manajemen Permission',
    href: '/permissions',
  },
];


export default function PermissionIndex({ permissions, groups, filters }: Props) {
  const handleDelete = (id: number) => {
    router.delete(`/permissions/${id}`, {
      onSuccess: () => toast.success('Permission berhasil dihapus'),
      onError: () => toast.error('Gagal menghapus permission'),
    });
  };

  const handleFilterChange = (key: string, value: string) => {
    const actualValue = value === '__ALL__' ? '' : value;
    router.get('/permissions', { ...filters, [key]: actualValue }, { preserveScroll: true });
  };

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Manajemen Permission" />

      <div className="flex-1 p-4 md:p-6">
        <Card>
          <CardHeader className="pb-3 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <CardTitle className="text-2xl font-bold">Permission</CardTitle>
              <p className="text-muted-foreground text-sm">Kelola izin akses sistem</p>
            </div>
            <Link href="/permissions/create">
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Tambah Permission
              </Button>
            </Link>
          </CardHeader>

          <Separator />

          <CardContent className="pt-6 space-y-6">
            {/* Filter */}
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <Input
                type="text"
                placeholder="Cari permission..."
                defaultValue={filters.search}
                onBlur={(e) => handleFilterChange('search', e.target.value)}
              />
              <Select
                value={filters.group || '__ALL__'}
                onValueChange={(value) => handleFilterChange('group', value)}
              >
                <SelectTrigger className="md:w-64">
                  <SelectValue placeholder="Semua Group" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="__ALL__">Semua Group</SelectItem>
                  {groups.map((group) => (
                    <SelectItem key={group} value={group}>
                      {group}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* List Permission */}
            <div className="space-y-3">
              {permissions.data.length === 0 ? (
                <p className="text-muted-foreground text-center">Tidak ada data.</p>
              ) : (
                permissions.data.map((permission) => (
                  <div
                    key={permission.id}
                    className="flex items-center justify-between border px-4 py-3 rounded-lg shadow-sm"
                  >
                    <div className="font-medium text-sm">{permission.name}</div>
                    <div className="flex items-center gap-2">
                      <Link href={`/permissions/${permission.id}/edit`}>
                        <Button variant="ghost" size="icon">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </Link>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant="ghost" size="icon" className="text-destructive hover:text-red-600">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Hapus permission ini?</AlertDialogTitle>
                            <AlertDialogDescription>
                              Permission "{permission.name}" akan dihapus secara permanen.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Batal</AlertDialogCancel>
                            <AlertDialogAction
                              className="bg-destructive hover:bg-destructive/90"
                              onClick={() => handleDelete(permission.id)}
                            >
                              Hapus
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Pagination */}
            <div className="flex justify-center pt-6 flex-wrap gap-2">
              {permissions.links.map((link, i) => (
                <Button
                  key={i}
                  disabled={!link.url}
                  variant={link.active ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => router.visit(link.url || '', { preserveScroll: true })}
                >
                  <span dangerouslySetInnerHTML={{ __html: link.label }} />
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
