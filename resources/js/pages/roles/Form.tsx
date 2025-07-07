import React from 'react';
import { useForm, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

interface Permission {
  id: number;
  name: string;
  group: string;
}

interface Role {
  id?: number;
  name: string;
  permissions?: Permission[];
}

interface Props {
  role?: Role;
  groupedPermissions: Record<string, Permission[]>;
}

export default function RoleForm({ role, groupedPermissions }: Props) {
  const isEdit = !!role;

  const { data, setData, post, put, processing, errors } = useForm({
    name: role?.name || '',
    permissions: role?.permissions?.map((p) => p.name) || [],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    isEdit ? put(`/roles/${role?.id}`) : post('/roles');
  };

  const togglePermission = (perm: string) => {
    setData('permissions', data.permissions.includes(perm)
      ? data.permissions.filter((p) => p !== perm)
      : [...data.permissions, perm]
    );
  };

  const toggleGroup = (group: string, perms: Permission[]) => {
    const allChecked = perms.every(perm => data.permissions.includes(perm.name));
    if (allChecked) {
      // Uncheck all
      setData('permissions', data.permissions.filter(p => !perms.map(perm => perm.name).includes(p)));
    } else {
      // Check all
      const newPermissions = [...data.permissions];
      perms.forEach(perm => {
        if (!newPermissions.includes(perm.name)) {
          newPermissions.push(perm.name);
        }
      });
      setData('permissions', newPermissions);
    }
  };


  return (
    <AppLayout>
      <Head title={isEdit ? 'Edit Role' : 'Tambah Role'} />
      <div className="flex-1 p-4">
        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              {isEdit ? 'Edit Role' : 'Tambah Role'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Nama Role</Label>
                <Input
                  id="name"
                  className="mt-1"
                  value={data.name}
                  onChange={(e) => setData('name', e.target.value)}
                />
                {errors.name && (
                  <p className="text-sm text-red-500 mt-1">{errors.name}</p>
                )}
              </div>

              <Separator />

              <div className="space-y-5">
                <h2 className="text-lg font-semibold">Permissions</h2>

                {Object.entries(groupedPermissions).map(([group, perms]) => {
                  const allChecked = perms.every(perm => data.permissions.includes(perm.name));

                  return (
                    <div key={group} className="bg-muted/40 p-4 rounded-md border">
                      <label className="flex items-center gap-2">
                        <Checkbox
                          checked={allChecked}
                          onCheckedChange={() => toggleGroup(group, perms)}
                        />
                        <h3 className="text-md font-medium mb-2 text-muted-foreground uppercase tracking-wide cursor-pointer" onClick={() => toggleGroup(group, perms)}>
                          {group}
                        </h3>
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                        {perms.map((perm) => (
                          <label key={perm.id} className="flex items-center gap-2">
                            <Checkbox
                              checked={data.permissions.includes(perm.name)}
                              onCheckedChange={() => togglePermission(perm.name)}
                            />
                            <span className="text-sm text-gray-800 dark:text-gray-200">{perm.name}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>

              <Separator />

              <div className="flex items-center justify-end gap-2 pt-2">
                <Button type="submit" disabled={processing}>
                  {isEdit ? 'Simpan Perubahan' : 'Simpan Role'}
                </Button>
                <Link href="/roles">
                  <Button type="button" variant="secondary">
                    Kembali
                  </Button>
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
