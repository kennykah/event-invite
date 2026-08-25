import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { data, error } = await supabase
      .from('invitations')
      .insert({
        ceremony_type: body.ceremony_type,
        names: body.names,
        date: body.date,
        time: body.time,
        venue: body.venue,
        guest_count: body.guest_count,
        colors: body.colors || [],
        status: 'pending',
        designs: [],
      })
      .select()
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
