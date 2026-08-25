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
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-semibold">Designs library</h1>
            <p className="text-gray-600 text-sm mt-1">Internal template catalog — alpha lab</p>
          </div>
          <Link href="/" className="text-sm underline">Back</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {templates.map((t) => (
            <Link key={t.id} href={`/designs/${t.id}`} className="bg-white shadow rounded p-4 hover:shadow-lg transition">
              <div className="text-sm font-medium">{t.name}</div>
              <div className="text-xs text-gray-500 mt-1">{t.description}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
