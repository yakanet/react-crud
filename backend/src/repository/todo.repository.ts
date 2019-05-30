import * as Knex from "knex";
import knexInstance from '../knex';

import { Todo } from "../model/todo.model";

/**
 * Todo Repository
 * Persistence manager for todo entity
 */
export class TodoRepository {
    private readonly db = knexInstance;

    /**
     * @param {Knex} db [optional] Knex Database instance
     */
    constructor() {
    }

    /**
     * Finds todo by id
     * @param {number} id
     * @returns {Promise<Todo>}
     */
    findOne(id: number): Promise<Todo> {
        return this.db('todos').select('*').where({id}).first();
    }

    /**
     * Retrieves all todos
     * @returns {Promise<Todo[]>}
     */
    findAll(): Promise<Todo[]> {
        return this.db('todos').select('*');
    }

    /**
     * Inserts passed todo, if id isn't specified it'll be auto-generated
     *
     * @param {Todo} todo
     * @returns {Promise<number>} id or inserted todo
     */
    add(todo: Todo): Promise<number> {
        // TODO refactor
        return this.db('todos').insert(todo).then(ids => ids[0]);
    }

    /**
     * Updates todo by id
     *
     * @param {number} id
     * @param {Todo} todo
     * @returns {Promise<Todo>}
     */
    update(id: number, todo: Todo): Promise<Todo> {
        let todoToAdd = Object.assign({}, todo);
        delete todoToAdd.id;
        return this.db('todos').where({id}).update(todoToAdd);
    }

    /**
     * Removes todo by given id
     *
     * @param {number} id
     * @returns {Promise<number>} number of removed todos
     */
    remove(id: number): Promise<number> {
       return this.db('todos').where({id}).del();
    }
}
