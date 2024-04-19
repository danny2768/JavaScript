import { Router } from "express";
import { TodosController } from "./controller";



export class TodoRoutes {

    static get routes(): Router {
        
        const router = Router();
        const todoController = new TodosController();
        
        // Both lines work
        // router.get('/', (req, res) => todoController.getTodos(req, res) );
        //@ Get
        router.get('/', todoController.getTodos);       //* Get all todos        
        router.get('/:id', todoController.getTodoById); //* Get todo by id

        //@ Post
        router.post('/', todoController.createTodo);    //* Create todo
        
        //@ Put
        router.put('/:id', todoController.updateTodo);  //* Update/edit todo
        
        //@ Delete
        router.delete('/:id', todoController.deleteTodo);  //* Delete todo
        

        return router;
    }
}