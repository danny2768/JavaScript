import { Request, Response } from "express"
import { prisma } from "../../data/postgres";
import { CreateTodoDto, UpdateTodoDto } from "../../domain/dtos";



const todos = [
    { id: 1, text: 'Something 1', completedAt: new Date() },
    { id: 2, text: 'Something 2', completedAt: null },
    { id: 3, text: 'Something 3', completedAt: new Date() },
    { id: 4, text: 'Something 4', completedAt: new Date() },
];

export class TodosController {

    //* Dependency Injection
    constructor() {}

    public getTodos = async ( req: Request, res: Response) => {        
        return res.json( await prisma.todo.findMany() );
    };

    public getTodoById = async ( req: Request, res: Response ) => {
        const id = +req.params.id;
        if (isNaN(id)) return res.status(400).json({error: 'Invalid id'});
                
        const todo = await prisma.todo.findUnique({ 
            where: { id } 
        });        

        todo ? res.json(todo) : res.status(404).json({error: `TODO with id ${id} not found`});
    }

    public createTodo = async ( req: Request, res: Response ) => {
        // const { text } = req.body;
        // if ( !text ) return res.status(400).json({error: 'Text property is required'});
        // const todo = await prisma.todo.create({
        //     data: text
        // });

        const [error, createTodoDto] = CreateTodoDto.create(req.body);
        if ( error ) return res.status(400).json({error});
        
        const todo = await prisma.todo.create({
            data: createTodoDto!
        });        
                
        res.json( todo );
    };

    public updateTodo = async ( req: Request, res: Response ) => {
        const id = +req.params.id;
        // if (isNaN(id)) return res.status(400).json({error: 'Invalid id'});
        
        const [error, updateTodoDto] = UpdateTodoDto.create({ ...req.body, id });
        if ( error ) return res.status(400).json({error})

        const todo = await prisma.todo.findUnique({ 
            where: { id } 
        });        
        if ( !todo ) return res.status(404).json({error: `TODO with id ${id} not found`});

        // const { text, completedAt } = req.body;        
        const updatedTodo =  await prisma.todo.update({
            where: { id },
            data: updateTodoDto!.values,
        });        
        
        res.json( updatedTodo );
    };

    public deleteTodo = async ( req: Request, res: Response ) => {
        const id = +req.params.id;
        if (isNaN(id)) return res.status(400).json({error: 'Invalid id'});        

        const todo = await prisma.todo.findUnique({ 
            where: { id } 
        });        
        if ( !todo ) return res.status(404).json({error: `TODO with id ${id} not found`});

        await prisma.todo.delete({ where: { id } })        

        res.json({
            message: `TODO with id ${id} deleted`,
            todo
        });
    };
}