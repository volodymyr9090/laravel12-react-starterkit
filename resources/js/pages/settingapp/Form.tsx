import React, { useEffect, useRef } from 'react';
import { useForm, usePage, router } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { Separator } from '@/components/ui/separator';
import { BreadcrumbItem } from '@/types';

const DEFAULT_WARNA = '#181818';

interface SettingApp {
  nama_app: string;
  deskripsi: string;
  warna: string;
  logo: string;
  favicon: string;
  seo: {
    title?: string;
    description?: string;
    keywords?: string;
  };
}

interface Props {
  setting: SettingApp | null;
}

const breadcrumbs: BreadcrumbItem[] = [
  { title: 'Pengaturan', href: '/setting' },
];

export default function SettingForm({ setting }: Props) {
  const { data, setData, post, processing, errors } = useForm({
    nama_app: setting?.nama_app || '',
    deskripsi: setting?.deskripsi || '',
    warna: setting?.warna || '#0ea5e9',
    seo: {
      title: setting?.seo?.title || '',
      description: setting?.seo?.description || '',
      keywords: setting?.seo?.keywords || '',
    },
    logo: null as File | null,
    favicon: null as File | null,
  });

  const logoPreview = useRef<string | null>(setting?.logo ? `/storage/${setting.logo}` : null);
  const faviconPreview = useRef<string | null>(setting?.favicon ? `/storage/${setting.favicon}` : null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    post('/setting', {
      forceFormData: true,
      preserveScroll: true,
    });
  };

  return (
    <AppLayout breadcrumbs={breadcrumbs} title="Pengaturan Aplikasi">
      <Head title="Pengaturan Aplikasi" />
      <div className="flex-1 p-4 md:p-6">
        <Card className="max-w-4xl mx-auto">
          <CardHeader className="pb-3">
            <CardTitle className="text-2xl font-bold tracking-tight">
              Pengaturan Aplikasi
            </CardTitle>
          </CardHeader>
          <Separator />
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nama App */}
              <div>
                <Label htmlFor="nama_app">Nama Aplikasi</Label>
                <Input
                  id="nama_app"
                  value={data.nama_app}
                  onChange={(e) => setData('nama_app', e.target.value)}
                  className={errors.nama_app ? 'border-red-500' : ''}
                />
                {errors.nama_app && <p className="text-sm text-red-500">{errors.nama_app}</p>}
              </div>

              {/* Deskripsi */}
              <div>
                <Label htmlFor="deskripsi">Deskripsi</Label>
                <Textarea
                  id="deskripsi"
                  value={data.deskripsi}
                  onChange={(e) => setData('deskripsi', e.target.value)}
                />
              </div>

              {/* Warna Tema */}
              <div>
                <Label htmlFor="warna">Warna Utama</Label>
                <Input
                    id="warna"
                    type="color"
                    value={data.warna}
                    onChange={(e) => setData('warna', e.target.value)}
                    className="w-20 p-1"
                />
               <Button
                type="button"
                variant="secondary"
                size="sm"
                onClick={() => setData('warna', DEFAULT_WARNA)}
                className="mt-2"
                >
                Reset ke Warna Default
                </Button>
                </div>

              {/* Logo Upload */}
              <div>
                <Label htmlFor="logo">Logo (Max 2MB)</Label>
                <Input
                  id="logo"
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0] || null;
                    setData('logo', file);
                    if (file) logoPreview.current = URL.createObjectURL(file);
                  }}
                />
                {logoPreview.current && (
                  <img src={logoPreview.current} alt="Preview Logo" className="mt-2 h-16" />
                )}
              </div>

              {/* Favicon Upload */}
              <div>
                <Label htmlFor="favicon">Favicon (Max 1MB)</Label>
                <Input
                  id="favicon"
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0] || null;
                    setData('favicon', file);
                    if (file) faviconPreview.current = URL.createObjectURL(file);
                  }}
                />
                {faviconPreview.current && (
                  <img src={faviconPreview.current} alt="Preview Favicon" className="mt-2 h-10" />
                )}
              </div>

              {/* SEO Fields */}
              <Separator />
              <h3 className="text-lg font-semibold">SEO</h3>
              <div>
                <Label htmlFor="seo_title">Judul SEO</Label>
                <Input
                  id="seo_title"
                  value={data.seo.title}
                  onChange={(e) => setData('seo', { ...data.seo, title: e.target.value })}
                />
              </div>

              <div>
                <Label htmlFor="seo_description">Deskripsi SEO</Label>
                <Textarea
                  id="seo_description"
                  value={data.seo.description}
                  onChange={(e) => setData('seo', { ...data.seo, description: e.target.value })}
                />
              </div>

              <div>
                <Label htmlFor="seo_keywords">Keyword SEO (pisahkan dengan koma)</Label>
                <Input
                  id="seo_keywords"
                  value={data.seo.keywords}
                  onChange={(e) => setData('seo', { ...data.seo, keywords: e.target.value })}
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4 flex justify-end">
                <Button type="submit" disabled={processing}>
                  {processing ? 'Menyimpan...' : 'Simpan Pengaturan'}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
