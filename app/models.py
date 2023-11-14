from .conecction import redis
from aredis_om import HashModel

class Todo(HashModel):
    title: str
    description: str
    completed: bool
    time: str

    class Meta:
        database = redis
