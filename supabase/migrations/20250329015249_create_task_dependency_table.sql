create table if not exists public.task_dependencies (
    task_id uuid references public.tasks (id) on delete cascade,
    depends_on_id uuid references public.tasks (id) on delete cascade,
    primary key (task_id, depends_on_id)
    );