create table if not exists public.sections (
    id uuid primary key default gen_random_uuid(),
    title text not null,
    sort_order int default 0,
    project_id uuid not null references public.projects (id) on delete cascade,
    created_at timestamptz default now(),
    edited_at timestamptz default now(),
    creator uuid references auth.users (id),
    editor uuid references auth.users (id)
    );
