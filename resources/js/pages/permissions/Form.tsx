import React from 'react';
import { Head, Link, router, useForm } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Save, ArrowLeft } from 'lucide-react';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { BreadcrumbItem } from '@/types';

interface PermissionFormProps {
  permission?: {
    id: number;
    name: string;
    group: string | null;
  };
  groups?: string[];
}

export default function PermissionForm({ permission, groups = [] }: PermissionFormProps) {
  const isEdit = !!permission;

  const { data, setData, processing, errors, reset } = useForm({
    name: permission?.name || '',
    group: permission?.group || '',
    newGroup: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      name: data.name,
      group: data.newGroup.trim() !== '' ? data.newGroup.trim() : data.group,
    };

    if (isEdit) {
      router.put(`/permissions/${permission?.id}`, payload);
    } else {
      router.post('/permissions', payload);
    }
  };

  const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Manajemen Permission', href: '/permissions' },
    { title: isEdit ? 'Edit Permission' : 'Tambah Permission', href: '#' },
  ];

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title={isEdit ? 'Edit Permission' : 'Tambah Permission'} />

      <div className="flex-1 p-4 md:p-6 max-w-xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              {isEdit ? 'Edit Permission' : 'Tambah Permission'}
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              {isEdit ? 'Ubah detail permission' : 'Buat permission baru'}
            </p>
          </CardHeader>

          <Separator />

          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nama Permission */}
              <div className="space-y-2">
                <Label htmlFor="name">Nama Permission</Label>
                <Input
                  id="name"
                  placeholder="contoh: manage-users"
                  value={data.name}
                  onChange={(e) => setData('name', e.target.value)}
                  className={errors.name ? 'border-red-500' : ''}
                />
                {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
              </div>

              {/* Pilih Group */}
              <div className="space-y-2">
                <Label htmlFor="group">Pilih Group</Label>
                <Select value={data.group || ''} onValueChange={(val) => setData('group', val)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih group..." />
                  </SelectTrigger>
                  <SelectContent>
                    {groups.map((group) => (
                      <SelectItem key={group} value={group}>
                        {group}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.group && <p className="text-sm text-red-500">{errors.group}</p>}
              </div>

              {/* Group Baru */}
              <div className="space-y-2">
                <Label htmlFor="newGroup">Atau ketik group baru</Label>
                <Input
                  id="newGroup"
                  placeholder="contoh: Tender / Artikel / User"
                  value={data.newGroup}
                  onChange={(e) => setData('newGroup', e.target.value)}
                />
              </div>

              <Separator />

              {/* Tombol Aksi */}
              <div className="flex items-center justify-between pt-2">
                <Link href="/permissions">
                  <Button type="button" variant="secondary">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Kembali
                  </Button>
                </Link>
                <Button type="submit" disabled={processing}>
                  <Save className="mr-2 h-4 w-4" />
                  {processing
                    ? isEdit
                      ? 'Menyimpan...'
                      : 'Menambahkan...'
                    : isEdit
                    ? 'Simpan Perubahan'
                    : 'Tambah'}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
