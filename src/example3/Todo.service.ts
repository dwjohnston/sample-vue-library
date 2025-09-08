import { getTodos, type Todo } from "@/services/getTodos";
import {injectable, singleton} from "tsyringe";


class NotImplementedError extends Error {

}

interface ITodoService {
     getTodos():  Promise<Array<Todo>>;
}

@singleton()
export class TodoService implements ITodoService {
    async getTodos():  Promise<Array<Todo>> {
        throw new NotImplementedError();
    }
}

export class ProductionTodoService implements ITodoService {
    async getTodos():  Promise<Array<Todo>> {
        return getTodos();
    }
}



