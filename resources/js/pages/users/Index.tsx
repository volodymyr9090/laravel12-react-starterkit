import React from 'react';
import { Head, Link, router, useForm } from '@inertiajs/react';
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
    title: 'Manajemen Pengguna',
    href: '/users',
  },
];

interface User {
  id: number;
  name: string;
  email: string;
  roles: {
    id: number;
    name: string;
  }[];
}

interface Props {
  users: {
    data: User[];
    current_page: number;
    last_page: number;
    links: { url: string | null; label: string; active: boolean }[];
  };
}

export default function UserIndex({ users }: Props) {
  const { delete: destroy, processing } = useForm();

  const handleDelete = (id: number) => {
    destroy(`/users/${id}`);
  };

  const handleResetPassword = (id: number) => {
    router.put(`/users/${id}/reset-password`, {}, { preserveScroll: true });
  };

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Manajemen Pengguna" />
      <div className="flex-1 space-y-6 p-4 md:p-6">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Manajemen Pengguna</h1>
            <p className="text-muted-foreground">
              Kelola data pengguna dan peran mereka dalam sistem.
            </p>
          </div>
          <Link href="/users/create">
            <Button className="w-full md:w-auto">
              <span className="hidden md:inline">+ Tambah Pengguna</span>
              <span className="md:hidden">+ Tambah</span>
            </Button>
          </Link>
        </div>

        <div className="space-y-4">
          {users.data.length === 0 && (
            <Card>
              <CardContent className="py-6 text-center text-muted-foreground">
                Belum ada data pengguna.
              </CardContent>
            </Card>
          )}

          {users.data.map((user) => (
            <Card key={user.id} className="border shadow-sm">
              <CardHeader className="space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
                <div className="space-y-1">
                  <CardTitle className="text-base font-semibold">
                    {user.name}
                  </CardTitle>
                  <div className="text-sm text-muted-foreground">{user.email}</div>
                </div>
                <div className="flex flex-col gap-2 md:flex-row">
                  <Link href={`/users/${user.id}/edit`} className="md:w-auto">
                    <Button size="sm" variant="outline" className="w-full">
                      Edit
                    </Button>
                  </Link>

                  {/* 🔐 Reset Password Button */}
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button size="sm" variant="secondary" className="w-full">
                        Reset Password
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Reset Password?</AlertDialogTitle>
                        <AlertDialogDescription>
                          Password untuk <strong>{user.name}</strong> akan direset menjadi:
                          <br />
                          <code className="font-mono bg-muted px-2 py-1 rounded text-sm">ResetPasswordNya</code>
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Batal</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => handleResetPassword(user.id)}
                          disabled={processing}
                        >
                          Ya, Reset
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>

                  {/* 🗑️ Hapus Button */}
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button size="sm" variant="destructive" className="w-full">
                        Hapus
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Yakin ingin menghapus?</AlertDialogTitle>
                        <AlertDialogDescription>
                          Pengguna <strong>{user.name}</strong> akan dihapus permanen.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Batal</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => handleDelete(user.id)}
                          disabled={processing}
                        >
                          Ya, Hapus
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </CardHeader>

              {user.roles.length > 0 && (
                <CardContent className="border-t pt-4">
                  <p className="mb-2 text-sm font-medium text-muted-foreground">
                    Role:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {user.roles.map((role) => (
                      <Badge key={role.id} variant="secondary" className="font-normal">
                        {role.name}
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
