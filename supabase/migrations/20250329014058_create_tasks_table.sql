create table if not exists public.tasks (
    id uuid primary key default gen_random_uuid(),
    title text not null,
    description text,
    due_date timestamptz,
    priority text default 'Medium',
    status text default 'Not Started',
    assigned_to uuid references auth.users (id),
    parent_task_id uuid references public.tasks (id) on delete cascade,
    project_id uuid not null references public.projects (id) on delete cascade,
    section_id uuid references public.sections (id) on delete cascade,
    created_at timestamptz default now(),
    edited_at timestamptz default now(),
    creator uuid references auth.users (id),
    editor uuid references auth.users (id)
    );
