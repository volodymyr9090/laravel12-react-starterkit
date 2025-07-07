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
      <div className="flex-1 p-4 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Manajemen Role</h1>
          <Link href="/roles/create">
            <Button>+ Tambah Role</Button>
          </Link>
        </div>

        <div className="grid gap-4">
          {roles.length === 0 && (
            <p className="text-muted-foreground">Belum ada data role.</p>
          )}

          {roles.map((role) => (
            <Card key={role.id} className="border shadow-sm">
              <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <CardTitle className="text-base font-semibold">{role.name}</CardTitle>
                <div className="flex gap-2">
                  <Link href={`/roles/${role.id}/edit`}>
                    <Button size="sm" variant="outline">Edit</Button>
                  </Link>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button size="sm" variant="destructive">Hapus</Button>
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
                        <AlertDialogAction onClick={() => handleDelete(role.id)} disabled={processing}>
                          Ya, Hapus
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p><strong>Permissions:</strong></p>
                {role.permissions.length > 0 ? (
                  <div className="flex flex-wrap gap-1">
                    {role.permissions.map((permission) => (
                      <Badge key={permission.id} variant="secondary" className="mr-1">{permission.name}</Badge>
                    ))}
                  </div>
                ) : (
                  <p>Tidak ada permission</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
