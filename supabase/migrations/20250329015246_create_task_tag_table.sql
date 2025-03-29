create table if not exists public.task_tags (
    task_id uuid references public.tasks (id) on delete cascade,
    tag_id uuid references public.tags (id) on delete cascade,
    primary key (task_id, tag_id)
    );