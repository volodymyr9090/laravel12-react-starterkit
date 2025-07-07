# Laravel 12 + React Starter Kit 🇮🇩 🇵🇸

Starter kit modern berbasis **Laravel 12**, **React (Inertia.js + TypeScript)**, **TailwindCSS**, dan **ShadCN UI**. Cocok digunakan untuk membangun aplikasi dashboard admin, manajemen user, pengaturan dinamis, dan kebutuhan SPA modern lainnya.

Dikembangkan dan disesuaikan oleh **@yogijowo**.

---

## ✨ Fitur Utama

- 🔐 **Autentikasi** (login, register, reset password)
- 👥 **Manajemen Role & Permission** (Spatie)
- 📂 **Manajemen Menu Dinamis** berbasis role
- ⚙️ **Halaman Pengaturan Aplikasi** (nama, logo, SEO, warna)
- 🎨 **UI Modern**: ShadCN UI v4 + TailwindCSS + Dark/Light mode
- ⚡️ **SPA Responsif**: React 19 + Inertia.js + TypeScript

---

## 🧱 Teknologi yang Digunakan

| Kebutuhan     | Teknologi                       |
| ------------- | ------------------------------- |
| Backend       | Laravel 12                      |
| Frontend      | React + Inertia.js + TypeScript |
| UI Components | ShadCN UI v4                    |
| CSS Framework | TailwindCSS                     |
| Hak Akses     | Spatie Laravel Permission       |
| Layout        | Sidebar + Header Dinamis        |
| DBMS          | MySQL                           |

---

## 📁 Struktur Fitur

### 🔐 Autentikasi

- Login, Register, Reset Password
- Layout responsif: card / split / simple

### 👤 Manajemen User

- CRUD User
- Assign Role ke User

### 🧩 Role & Permission

- CRUD Role dan Permission
- Assign Permission ke Role & Role ke User

### 📁 Menu Dinamis

- Tabel `menus`: id, title, icon, route, parent_id, role_id, order
- Support submenu (nested), berdasarkan role
- Ditampilkan di sidebar React secara dinamis

### ⚙️ Pengaturan Aplikasi

- Tabel `settingapp`: nama_app, deskripsi, logo, favicon, warna, SEO
- Ditampilkan di layout React + disimpan via Inertia

---

## 🛠️ Instalasi

```bash
git clone https://github.com/yogijowo/laravel12-react-starterkit.git
cd laravel12-react-starterkit
cp .env.example .env
composer install
php artisan key:generate
php artisan migrate
npm install
npm run dev
```

---

## 🧪 Testing & Reordering Menu

- Drag & drop untuk menyusun urutan menu
- Menu ditampilkan sesuai urutan dan role
- Simpan urutan menu melalui tombol `Simpan Perubahan`

---

## 💡 Konvensi Folder Frontend

```
resources/js/
├── components/        # Komponen UI reusable
├── hooks/             # React hooks custom
├── layouts/           # Layout auth & app
├── lib/               # Utility / mapping
├── pages/             # Halaman sesuai route
└── types/             # Tipe TypeScript
```

---

## 🧠 Catatan Pengembang

- Sidebar dinamis berdasarkan role
- Drag & drop reorder menu dengan `@dnd-kit`
- Theme dark/light tersimpan via state
- Role & permission dari Spatie Permission (v5)
- Menu yang tampil di sidebar terfilter otomatis

---

## 🧑‍💻 Kontribusi

Pull request, diskusi, dan saran sangat terbuka. Pastikan untuk melakukan `lint` dan `test` sebelum push.

---

## 📄 Lisensi

Proyek ini dirilis dengan [MIT License](https://opensource.org/licenses/MIT).
