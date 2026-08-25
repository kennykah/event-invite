'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function PreviewPage({ params }: { params: { id: string } }) {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const load = async () => {
      const { data } = await supabase.from('invitations').select('*').eq('id', params.id).single();
      setData(data);
    };
    load();
  }, [params.id]);

  if (!data) return <div className="p-6">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-semibold mb-4">Preview — {data.names}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {(data.designs || []).map((design: any) => (
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
