import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';

const templatesDir = path.join(process.cwd(), 'templates');

export async function generateStaticParams() {
  const files = fs.readdirSync(templatesDir).filter((f) => f.endsWith('.html'));
  return files.map((f) => ({ slug: f.replace(/\.html$/, '') }));
}

export default async function DesignPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const filePath = path.join(templatesDir, `${slug}.html`);
  let html = '';

  try {
    html = fs.readFileSync(filePath, 'utf8');
  } catch {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-semibold mb-4">Design not found</h1>
          <a href="/designs" className="underline">Back to designs</a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold">{slug}</h1>
          <a href="/designs" className="text-sm underline">Back to designs</a>
        </div>
        <div
          className="bg-white shadow rounded"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  );
}
