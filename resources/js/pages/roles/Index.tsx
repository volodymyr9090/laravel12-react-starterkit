import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { type BreadcrumbItem } from '@/types';
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction,
} from '@/components/ui/alert-dialog';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Manajemen Role',
    href: '/roles',
  },
];

interface Permission {
  id: number;
  name: string;
  group: string;
}

interface Role {
  id: number;
  name: string;
  permissions: Permission[];
}

interface Props {
  roles: Role[];
  groupedPermissions: Record<string, Permission[]>;
}

export default function RoleIndex({ roles }: Props) {
  const { delete: destroy, processing } = useForm();

  const handleDelete = (id: number) => {
    destroy(`/roles/${id}`);
  };

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Manajemen Role" />
      <div className="flex-1 space-y-6 p-4 md:p-6">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Manajemen Role</h1>
            <p className="text-muted-foreground">
              Kelola role dan permission untuk sistem
            </p>
          </div>
          <Link href="/roles/create">
            <Button className="w-full md:w-auto">
              <span className="hidden md:inline">+ Tambah Role</span>
              <span className="md:hidden">+ Tambah</span>
            </Button>
          </Link>
        </div>

        <div className="space-y-4">
          {roles.length === 0 && (
            <Card>
              <CardContent className="py-6 text-center text-muted-foreground">
                Belum ada data role.
              </CardContent>
            </Card>
          )}

          {roles.map((role) => (
            <Card key={role.id} className="border shadow-sm">
              <CardHeader className="space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
                <div className="space-y-1">
                  <CardTitle className="text-base font-semibold">
                    {role.name}
                  </CardTitle>
                  <div className="text-sm text-muted-foreground">
                    {role.permissions.length} permissions
                  </div>
                </div>
                <div className="flex gap-2">
                  <Link href={`/roles/${role.id}/edit`} className="w-1/2 md:w-auto">
                    <Button size="sm" variant="outline" className="w-full">
                      Edit
                    </Button>
                  </Link>
                  <AlertDialog>
                    <AlertDialogTrigger asChild className="w-1/2 md:w-auto">
                      <Button size="sm" variant="destructive" className="w-full">
                        Hapus
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Yakin ingin menghapus?</AlertDialogTitle>
                        <AlertDialogDescription>
                          Role <strong>{role.name}</strong> akan dihapus permanen.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Batal</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => handleDelete(role.id)}
                          disabled={processing}
                        >
                          Ya, Hapus
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </CardHeader>
              {role.permissions.length > 0 && (
                <CardContent className="border-t pt-4">
                  <p className="mb-2 text-sm font-medium text-muted-foreground">
                    Daftar Permission:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {role.permissions.map((permission) => (
                      <Badge
                        key={permission.id}
                        variant="secondary"
                        className="font-normal"
                      >
                        {permission.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}