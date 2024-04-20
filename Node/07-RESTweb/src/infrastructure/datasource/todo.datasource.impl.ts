import { prisma } from '../../data/postgres';
import { TodoDatasource, CreateTodoDto, TodoEntity, UpdateTodoDto } from '../../domain';

export class TodoDatasourceImpl implements TodoDatasource {
    
    async getAll(): Promise<TodoEntity[]> {
         const todos = await prisma.todo.findMany()
         return todos.map( todo => TodoEntity.fromObj(todo) );
    }

    async getById(id: number): Promise<TodoEntity> {
        const todo = await prisma.todo.findUnique({ 
            where: { id } 
        });
        
        if ( !todo ) throw (`Todo with id ${id} not found`);        
        return TodoEntity.fromObj(todo);
    }

    async create(createTodoDto: CreateTodoDto): Promise<TodoEntity> {
        
        const todo = await prisma.todo.create({
            data: createTodoDto
        });

        return TodoEntity.fromObj(todo);
    }        

    async updateById(updateTodoDto: UpdateTodoDto): Promise<TodoEntity> {
        // * getById handles the validation if todo exists
        await this.getById( updateTodoDto.id );
        
        const updatedTodo =  await prisma.todo.update({
            where: { id: updateTodoDto.id },
            data: updateTodoDto!.values,
        });

        return TodoEntity.fromObj(updatedTodo);
    }

    async deleteById(id: number): Promise<TodoEntity> {
        // * getById handles the validation if todo exists
        await this.getById( id );

        const deletedTodo = await prisma.todo.delete({ where: { id } })

        return TodoEntity.fromObj( deletedTodo )        
    }
  
}