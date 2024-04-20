import { Request, Response } from "express"
import { prisma } from "../../data/postgres";
import { CreateTodoDto, UpdateTodoDto } from "../../domain/dtos";
import { TodoRepository } from "../../domain";



const todos = [
    { id: 1, text: 'Something 1', completedAt: new Date() },
    { id: 2, text: 'Something 2', completedAt: null },
    { id: 3, text: 'Something 3', completedAt: new Date() },
    { id: 4, text: 'Something 4', completedAt: new Date() },
];

export class TodosController {
    
    constructor(
        private readonly todoRepository: TodoRepository,
    ) {}

    public getTodos = async ( req: Request, res: Response) => {        
        // return res.json( await prisma.todo.findMany() );

        // * Implementing TodoRepository
        const todos = await this.todoRepository.getAll();        
        return res.json( todos );
    };

    public getTodoById = async ( req: Request, res: Response ) => {
        const id = +req.params.id;
        if (isNaN(id)) return res.status(400).json({error: 'Invalid id'});

        try {
            const todo = await this.todoRepository.getById(id);
            return res.json(todo);
        } catch (error) {
            return res.status(400).json({ error });
        }       
    }

    public createTodo = async ( req: Request, res: Response ) => {        

        const [error, createTodoDto] = CreateTodoDto.create(req.body);
        if ( error ) return res.status(400).json({error});            

        //* Implementing TodoRepository 
        try {
            const todo = await this.todoRepository.create( createTodoDto! );                
            return res.json( todo );    
        } catch (error) {
            return res.status(400).json({ error });
        }
        
    };

    public updateTodo = async ( req: Request, res: Response ) => {

        //* Dto handles id validation
        const id = +req.params.id;
        const [error, updateTodoDto] = UpdateTodoDto.create({ ...req.body, id });
        if ( error ) return res.status(400).json({error})
        
        try {
            const updatedTodo = await this.todoRepository.updateById( updateTodoDto! )        
            return res.json( updatedTodo );
        } catch (error) {
            return res.status(400).json({ error });
        }
        
    };

    public deleteTodo = async ( req: Request, res: Response ) => {
        const id = +req.params.id;
        if (isNaN(id)) return res.status(400).json({error: 'Invalid id'});

        try {
            const deletedTodo = await this.todoRepository.deleteById(id);        
            return res.json({
                message: `TODO with id ${id} deleted`,
                deletedTodo
            });    
        } catch (error) {
            return res.status(400).json({ error });
        }
        
    };
}