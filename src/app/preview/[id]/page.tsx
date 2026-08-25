import { notFound } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

async function getInvitation(id: string) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return null;
  const { createClient } = require('@supabase/supabase-js');
  const client = createClient(url, key);
  const { data } = await client.from('invitations').select('*').eq('id', id).maybeSingle();
  return data;
}

export default async function PreviewPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const data = await getInvitation(id);

  if (!data) {
    notFound();
  }

  const designs = data.designs || [];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-semibold">Preview</h1>
            <p className="text-gray-600 text-sm mt-1">ID: {data.id}</p>
          </div>
          <a href="/" className="text-sm underline">Back</a>
        </div>

        <div className="bg-white shadow rounded p-6 mb-6">
          <h2 className="text-lg font-semibold mb-2">{data.names}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
            <div>
              <span className="block text-xs uppercase text-gray-400">Type</span>
              {data.ceremony_type}
            </div>
            <div>
              <span className="block text-xs uppercase text-gray-400">Date</span>
              {data.date}
            </div>
            <div>
              <span className="block text-xs uppercase text-gray-400">Time</span>
              {data.time}
            </div>
            <div>
              <span className="block text-xs uppercase text-gray-400">Venue</span>
              {data.venue}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {designs.length === 0 && (
            <div className="col-span-full bg-white shadow rounded p-8 text-center text-gray-500">
              No previews yet. Processing is async — check back later.
            </div>
          )}
          {designs.map((design: any) => (
            <div key={design.id} className="bg-white shadow rounded p-4">
              <div className="text-sm font-medium mb-2">{design.template_id}</div>
              {design.url ? (
                <img src={design.url} alt="design" className="w-full rounded" />
              ) : (
                <div className="h-64 bg-gray-100 rounded flex items-center justify-center text-gray-500">
                  {design.status === 'generating' ? 'Generating...' : 'Not available yet'}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
