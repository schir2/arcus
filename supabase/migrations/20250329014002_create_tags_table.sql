create table if not exists public.tag (
    id uuid primary key default gen_random_uuid(),
    name text not null,
    color text default '#FFFFFF',
    created_at timestamptz default now(),
    edited_at timestamptz default now(),
    creator uuid references auth.users (id),
    editor uuid references auth.users (id)
    );
