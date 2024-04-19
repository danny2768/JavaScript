import { TodoEntity, CreateTodoDto, UpdateTodoDto, TodoDatasource } from '../../domain';
import { TodoRepository } from '../../domain/repositories/todo.repository';

export class TodoRepositoryImpl implements TodoRepository {
    
    constructor(
        private readonly datasource: TodoDatasource,
    ) {}

    getAll(): Promise<TodoEntity[]> {
        return this.datasource.getAll();
    }
    
    getById(id: number): Promise<TodoEntity | undefined> {
        return this.datasource.getById(id);
    }

    create(createTodoDto: CreateTodoDto): Promise<TodoEntity> {
        return this.datasource.create(createTodoDto);
    }

    updateById(updateTodoDto: UpdateTodoDto): Promise<TodoEntity> {
        return this.datasource.updateById(updateTodoDto);
    }

    deleteById(id: number): Promise<TodoEntity> {
        return this.datasource.deleteById(id);
    }

}