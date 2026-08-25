import Link from 'next/link';

const templates = [
  { id: 'minimal-light', name: 'Minimal light', style: 'Clean white, neutral palette' },
  { id: 'classic-gold', name: 'Classic gold', style: 'Warm parchment, gold accents' },
  { id: 'colorful-fiesta', name: 'Colorful fiesta', style: 'Bold gradient, celebratory' },
  { id: 'traditional-dot', name: 'Traditional dot', style: 'Dark earth tones' },
  { id: 'modern-dark', name: 'Modern dark', style: 'Dark editorial, sharp type' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white">
        <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold tracking-tight">event-invite</h1>
            <p className="text-sm text-gray-500 mt-1">Digital invitation platform — weddings, traditional ceremonies, events. RDC-first MVP.</p>
          </div>
          <nav className="flex gap-3">
            <Link href="/invitations/new" className="bg-black text-white px-4 py-2 rounded text-sm">New invitation</Link>
            <Link href="/designs" className="border border-gray-300 px-4 py-2 rounded text-sm">Designs</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">How it works</h2>
          <p className="text-gray-600 max-w-2xl">Submit your event details. We generate multiple invitation designs asynchronously. You choose and share.</p>
        </section>

        <section className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">Template library</h2>
            <Link href="/designs" className="text-sm underline">View all</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {templates.map((t) => (
              <Link key={t.id} href={`/designs/${t.id}`} className="block bg-white border rounded-lg p-5 hover:shadow-md transition">
                <div className="text-sm font-medium">{t.name}</div>
                <div className="text-xs text-gray-500 mt-1">{t.style}</div>
                <div className="mt-3 text-xs text-gray-400">Open preview</div>
              </Link>
            ))}
          </div>
        </section>

        <section className="bg-white border rounded-lg p-6">
          <h3 className="font-semibold mb-2">Start now</h3>
          <p className="text-sm text-gray-600 mb-4">Create a new invitation request. Processing is async in this alpha.</p>
          <Link href="/invitations/new" className="inline-block bg-black text-white px-5 py-2.5 rounded text-sm">New invitation</Link>
        </section>
      </main>
    </div>
  );
}
