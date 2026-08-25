'use client';

import { useState } from 'react';

const supabasePromise = import('@supabase/supabase-js');

const styles = [
  { id: 'minimal-light', label: 'Minimal light' },
  { id: 'classic-gold', label: 'Classic gold' },
  { id: 'colorful-fiesta', label: 'Colorful fiesta' },
  { id: 'traditional-african', label: 'Traditional african' },
  { id: 'modern-dark', label: 'Modern dark' },
];

export default function NewInvitationPage() {
  const [form, setForm] = useState({
    ceremony_type: 'civil_religious',
    names: '',
    date: '',
    time: '',
    venue: '',
    guest_count: 50,
    colors: ['#2563eb', '#f59e0b'],
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState<string | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { createClient } = await supabasePromise;
      const client = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL || '',
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
      );
      const { data, error } = await client
        .from('invitations')
        .insert({
          ceremony_type: form.ceremony_type,
          names: form.names,
          date: form.date,
          time: form.time,
          venue: form.venue,
          guest_count: form.guest_count,
          colors: form.colors,
          status: 'pending',
          designs: [],
        })
        .select('id')
        .single();

      if (error) {
        console.error(error);
        alert('Submission failed');
      } else {
        setSubmitted(data.id);
      }
    } catch (err) {
      console.error(err);
      alert('Server error');
    }
    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="bg-white shadow rounded p-8 max-w-md w-full text-center">
          <h1 className="text-xl font-semibold mb-2">Request received</h1>
          <p className="text-gray-600 mb-4">
            Your invitation is being processed. You can view previews later using this ID.
          </p>
          <p className="font-mono text-sm bg-gray-100 p-3 rounded">{submitted}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-xl mx-auto bg-white shadow rounded p-8">
        <h1 className="text-2xl font-semibold mb-6">New invitation</h1>
        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Ceremony type</label>
            <select
              className="w-full border rounded p-2"
              value={form.ceremony_type}
              onChange={(e) => setForm({ ...form, ceremony_type: e.target.value })}
            >
              <option value="civil_religious">Civil / Religious wedding</option>
              <option value="traditional_dot">Traditional dot</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Names</label>
            <input className="w-full border rounded p-2" value={form.names} onChange={(e) => setForm({ ...form, names: e.target.value })} required />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Date</label>
              <input type="date" className="w-full border rounded p-2" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Time</label>
              <input type="time" className="w-full border rounded p-2" value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} required />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Venue</label>
            <input className="w-full border rounded p-2" value={form.venue} onChange={(e) => setForm({ ...form, venue: e.target.value })} required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Guest count</label>
            <input type="number" className="w-full border rounded p-2" value={form.guest_count} onChange={(e) => setForm({ ...form, guest_count: parseInt(e.target.value || '0') })} required />
          </div>
          <button disabled={loading} className="w-full bg-black text-white rounded p-3" type="submit">
            {loading ? 'Submitting...' : 'Submit request'}
          </button>
        </form>
      </div>
    </div>
  );
}
