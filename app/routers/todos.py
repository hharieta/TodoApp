from fastapi import APIRouter, status
from ..models import Todo
from aredis_om import NotFoundError

router = APIRouter(
    tags=["Todos"]
)




@router.post("/todos", status_code=status.HTTP_201_CREATED)
async def create_todo(todo: Todo):
    todo.completed = int(todo.completed)
    new_todo = await todo.save()

    return new_todo