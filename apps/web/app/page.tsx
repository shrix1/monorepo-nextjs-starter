import { Button } from "@repo-name/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="max-w-2xl text-center">
        <h1 className="mb-6 text-4xl font-bold">Turborepo with Next.js and shadcn/ui</h1>
        <div className="mb-8">
          <p className="mb-3 text-lg font-medium">Packages installed:</p>
          <ul className="space-y-2 text-gray-600">
            <li>@repo-name/ui</li>
            <li>@repo-name/tailwind-config</li>
            <li>@repo-name/typescript-config</li>
          </ul>
        </div>
        <Button size="lg" className="font-medium">
          check ui
        </Button>
      </div>
    </main>
  );
}
