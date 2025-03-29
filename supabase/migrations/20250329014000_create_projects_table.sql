create table if not exists public.projects (
    id uuid primary key default gen_random_uuid(),
    name text not null,
    description text,
    start_date timestamptz,
    end_date timestamptz,
    status text default 'Not Started',
    priority text default 'Medium',
    starred boolean default false,
    icon text default 'folder',
    created_at timestamptz default now(),
    edited_at timestamptz default now(),
    creator uuid references auth.users (id),
    editor uuid references auth.users (id)
    );