import React from 'react';
import { useForm, Link } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { type BreadcrumbItem } from '@/types';

interface MenuFormProps {
  menu?: {
    id: number;
    title: string;
    route: string;
    icon: string;
    parent_id: number | null;
    roles: string[];
  };
  parentMenus: { id: number; title: string }[];
  roles: string[];
}

export default function MenuForm({ menu, parentMenus, roles }: MenuFormProps) {
  const isEdit = !!menu;

  const { data, setData, post, put, processing, errors } = useForm({
    title: menu?.title || '',
    route: menu?.route || '',
    icon: menu?.icon || '',
    parent_id: menu?.parent_id !== null ? String(menu?.parent_id) : '',
    roles: menu?.roles || [],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    const parsedParentId = data.parent_id === '' ? null : Number(data.parent_id);
    setData('parent_id', parsedParentId?.toString() || '');

    isEdit
      ? put(`/menus/${menu?.id}`)
      : post('/menus');
  };
  
  const toggleRole = (role: string) => {
    setData('roles', data.roles.includes(role)
      ? data.roles.filter(r => r !== role)
      : [...data.roles, role]);
  };

  const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Manajemen Menu', href: '/menus' },
    { title: isEdit ? 'Edit Menu' : 'Tambah Menu', href: '#' },
  ];

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title={isEdit ? 'Edit Menu' : 'Tambah Menu'} />
      <div className="flex-1 p-4">
        <Card className="max-w-xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              {isEdit ? 'Edit Menu' : 'Tambah Menu'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="title">Judul Menu</Label>
                <Input id="title" value={data.title} onChange={e => setData('title', e.target.value)} />
                {errors.title && <p className="text-sm text-red-500 mt-1">{errors.title}</p>}
              </div>

              <div>
                <Label htmlFor="route">Route</Label>
                <Input id="route" value={data.route} onChange={e => setData('route', e.target.value)} />
                {errors.route && <p className="text-sm text-red-500 mt-1">{errors.route}</p>}
              </div>

              <div>
                <Label htmlFor="icon">Icon (Lucide)</Label>
                <Input id="icon" value={data.icon} onChange={e => setData('icon', e.target.value)} />
                {errors.icon && <p className="text-sm text-red-500 mt-1">{errors.icon}</p>}
              </div>

              <div>
                <Label htmlFor="parent_id">Parent Menu</Label>
                <select
                  id="parent_id"
                  value={data.parent_id}
                  onChange={(e) => setData('parent_id', e.target.value)}
                  className="w-full border rounded px-3 py-2"
                >
                  <option value="">— Tidak ada —</option>
                  {parentMenus.map((m) => (
                    <option key={m.id} value={String(m.id)}>{m.title}</option>
                  ))}
                </select>
              </div>

              <Separator />

              <div>
                <Label>Role yang dapat melihat</Label>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {roles.map((role) => (
                    <label key={role} className="flex items-center gap-2">
                      <Checkbox
                        checked={data.roles.includes(role)}
                        onCheckedChange={() => toggleRole(role)}
                      />
                      <span className="text-sm">{role}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-4">
                <Link href="/menus">
                  <Button type="button" variant="secondary">Batal</Button>
                </Link>
                <Button type="submit" disabled={processing}>
                  {isEdit ? 'Simpan Perubahan' : 'Simpan'}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
