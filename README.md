# event-invite

Digital invitation platform — weddings, traditional ceremonies, events. RDC-first MVP.

## Status

Alpha / internal lab. Submissions are processed asynchronously; previews are not instant.

## Project structure

```
src/
  app/
    api/submit/route.ts        # POST new invitation
    invitations/new/page.tsx   # Form
    preview/[id]/page.tsx      # Preview viewer
    page.tsx                   # Homepage
  lib/supabase.ts              # Supabase client
  types/invitation.ts          # TS types
templates/
  minimal-light.html
  traditional-dot.html
```

## Setup

1. Create Supabase project.
2. Create table `invitations` with columns:
   - `id uuid primary key default gen_random_uuid()`
   - `created_at timestamptz default now()`
   - `status text default 'pending'`
   - `ceremony_type text`
   - `names text`
   - `date text`
   - `time text`
   - `venue text`
   - `guest_count int`
   - `colors text[]`
   - `photos text[]`
   - `designs jsonb`
3. Set env vars:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Run `npm install`
5. Run `npm run dev`

## Roadmap

- [x] Form + Supabase integration
- [x] 2 initial templates
- [ ] 3 additional templates
- [ ] Templates registry + metadata
- [ ] Image upload + Supabase Storage
- [ ] Async processing / worker for design generation
- [ ] RSVP mini-feature
- [ ] Share by link / WhatsApp
