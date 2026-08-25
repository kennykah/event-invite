import Link from 'next/link';

const templates = [
  { id: 'minimal-light', name: 'Minimal light', description: 'Clean white layout with neutral palette.', file: 'minimal-light.html' },
  { id: 'classic-gold', name: 'Classic gold', description: 'Warm parchment tones with gold accents.', file: 'classic-gold.html' },
  { id: 'colorful-fiesta', name: 'Colorful fiesta', description: 'Bold gradient header for celebratory events.', file: 'colorful-fiesta.html' },
  { id: 'traditional-dot', name: 'Traditional dot', description: 'Dark earth-tone layout for traditional ceremonies.', file: 'traditional-dot.html' },
  { id: 'modern-dark', name: 'Modern dark', description: 'Dark editorial style with sharp typography.', file: 'modern-dark.html' },
];

export default function DesignsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white">
        <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold tracking-tight">Designs library</h1>
            <p className="text-sm text-gray-500 mt-1">Internal template catalog — alpha lab</p>
          </div>
          <Link href="/" className="text-sm underline">Home</Link>
        </div>
      </header>
      <main className="max-w-5xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {templates.map((t) => (
            <Link key={t.id} href={`/designs/${t.id}`} className="block bg-white border rounded-lg p-5 hover:shadow-md transition">
              <div className="text-sm font-medium">{t.name}</div>
              <div className="text-xs text-gray-500 mt-1">{t.description}</div>
              <div className="mt-3 text-xs text-gray-400">Open preview</div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
