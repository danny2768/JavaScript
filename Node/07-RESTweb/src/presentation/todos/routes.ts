import { Router } from "express";
import { TodosController } from "./controller";
import { TodoDatasourceImpl } from "../../infrastructure/datasource/todo.datasource.impl";
import { TodoRepositoryImpl } from "../../infrastructure/repositories/todo.repository.impl";



export class TodoRoutes {

    static get routes(): Router {
        
        const router = Router();

        const postgresDatasource = new TodoDatasourceImpl();
        const repository = new TodoRepositoryImpl( postgresDatasource );
        
        const todoController = new TodosController( repository );
        
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