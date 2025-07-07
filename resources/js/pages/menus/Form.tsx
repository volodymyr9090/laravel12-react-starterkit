import React from 'react';
import { useForm, Link, Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { type BreadcrumbItem } from '@/types';
import IconPicker from '@/components/ui/icon-picker';

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

  const { data, setData, post, put, processing, errors, reset } = useForm({
    title: menu?.title || '',
    route: menu?.route || '',
    icon: menu?.icon || '',
    parent_id: menu?.parent_id ?? null,
    roles: menu?.roles || [],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isEdit) {
      put(`/menus/${menu?.id}`);
    } else {
      post('/menus', {
        onSuccess: () => reset(),
      });
    }
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
      <Head title={isEdit ? (menu ? 'Edit Menu' : 'Tambah Menu') : 'Tambah Menu'} />
      <div className="flex-1 p-4 md:p-6">
        <Card className="max-w-2xl mx-auto">
          <CardHeader className="pb-3">
            <CardTitle className="text-2xl font-bold tracking-tight">
              {isEdit ? 'Edit Menu' : 'Tambah Menu Baru'}
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              {isEdit ? 'Perbarui detail menu' : 'Buat menu baru untuk sistem'}
            </p>
          </CardHeader>

          <Separator />

          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="title">Judul Menu *</Label>
                  <Input
                    id="title"
                    value={data.title}
                    onChange={e => setData('title', e.target.value)}
                    placeholder="Contoh: Dashboard"
                    className={errors.title ? 'border-red-500' : ''}
                  />
                  {errors.title && <p className="text-sm text-red-500">{errors.title}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="route">Route</Label>
                  <Input
                    id="route"
                    value={data.route}
                    onChange={e => setData('route', e.target.value)}
                    placeholder="Contoh: dashboard.index"
                    className={errors.route ? 'border-red-500' : ''}
                  />
                  {errors.route && <p className="text-sm text-red-500">{errors.route}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="icon">Icon (Lucide)</Label>
                  <IconPicker
                    value={data.icon}
                    onChange={(val) => setData('icon', val)}
                  />
                  {errors.icon && <p className="text-sm text-red-500">{errors.icon}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="parent_id">Parent Menu</Label>
                  <Select
                    value={data.parent_id === null ? 'none' : String(data.parent_id)}
                    onValueChange={(value) =>
                      setData('parent_id', value === 'none' ? null : Number(value))
                    }
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Pilih parent menu" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">— Tidak ada —</SelectItem>
                      {parentMenus.map((m) => (
                        <SelectItem key={m.id} value={String(m.id)}>
                          {m.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Separator />

              <div className="space-y-3">
                <Label>Role yang dapat melihat</Label>
                <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                  {roles.map((role) => (
                    <label key={role} className="flex items-center space-x-2">
                      <Checkbox
                        checked={data.roles.includes(role)}
                        onCheckedChange={() => toggleRole(role)}
                        id={`role-${role}`}
                      />
                      <span className="text-sm font-medium leading-none">
                        {role}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <Separator />

              <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end">
                <Link href="/menus" className="w-full sm:w-auto">
                  <Button type="button" variant="secondary" className="w-full">
                    Batal
                  </Button>
                </Link>
                <Button type="submit" disabled={processing} className="w-full sm:w-auto">
                  {processing ? (
                    <span className="flex items-center gap-2">
                      <span className="animate-spin">↻</span>
                      {isEdit ? 'Menyimpan...' : 'Membuat...'}
                    </span>
                  ) : isEdit ? (
                    'Simpan Perubahan'
                  ) : (
                    'Buat Menu'
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
