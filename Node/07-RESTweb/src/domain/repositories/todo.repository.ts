import { TodoEntity } from "../entities/todo.entity";
import { CreateTodoDto } from '../dtos/todos/create-todo.dto';
import { UpdateTodoDto } from '../dtos/todos/update-todo.dto';


export abstract class TodoRepository {
    
    // TODO: paginacion
    abstract getAll(): Promise<TodoEntity[]>

    abstract getById( id: number ): Promise<TodoEntity>

    abstract create( createTodoDto: CreateTodoDto ): Promise<TodoEntity>

    abstract updateById( updateTodoDto: UpdateTodoDto): Promise<TodoEntity>

    abstract deleteById( id: number ): Promise<TodoEntity>
}