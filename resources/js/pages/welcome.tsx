import { Head, Link, usePage } from '@inertiajs/react';
import { type SharedData } from '@/types';

export default function Welcome() {
  const { auth } = usePage<SharedData>().props;

  return (
    <>
      <Head title="Welcome" />
      <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-background text-foreground">
        <div className="w-full max-w-2xl text-center space-y-6">
          <h1 className="text-4xl font-bold tracking-tight">
            Laravel 12 + React Starter Kit
          </h1>
          <p className="text-muted-foreground">
            Build powerful modern apps with authentication, roles, menus, settings, and a clean UI out of the box.
          </p>

          {auth.user ? (
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center px-6 py-2 rounded-md bg-primary text-white hover:bg-primary/90 transition"
            >
              Go to Dashboard
            </Link>
          ) : (
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                href="/login"
                className="px-5 py-2 rounded-md border border-border hover:bg-muted transition"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="px-5 py-2 rounded-md bg-primary text-white hover:bg-primary/90 transition"
              >
                Register
              </Link>
            </div>
          )}

          <div className="pt-4 space-y-2 text-sm text-muted-foreground">
            <p>
              Baca <a href="https://laravel.com/docs" target="_blank" className="text-primary underline">dokumentasi Laravel</a> atau
              tonton <a href="https://laracasts.com" target="_blank" className="text-primary underline">tutorial di Laracasts</a>.
            </p>
            <p>
              Ingin deploy cepat? <a href="https://cloud.laravel.com" target="_blank" className="underline">Laravel Cloud</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
