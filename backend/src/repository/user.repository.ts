import * as Knex from "knex";
import knexInstance from '../knex';

import { User } from "../model/user.model";

/**
 * User Repository
 * Persistence manager for user entity
 */
export class UserRepository {
    private readonly db = knexInstance;

    /**
     * @param {Knex} db [optional] Knex Database instance
     */
    constructor() {
    }

    /**
     * Finds user by id
     * @param {number} id
     * @returns {Promise<User>}
     */
    findOne(id: number): Promise<User> {
        return this.db('users').select('*').where({id}).first();
    }

    /**
     * Retrieves all users
     * @returns {Promise<User[]>}
     */
    findAll(): Promise<User[]> {
        return this.db('users').select('*');
    }

    /**
     * Inserts passed user, if id isn't specified it'll be auto-generated
     *
     * @param {User} user
     * @returns {Promise<number>} id or inserted user
     */
    add(user: User): Promise<number> {
        // TODO refactor
        return this.db('users').insert(user).then(ids => ids[0]);
    }

    /**
     * Updates user by id
     *
     * @param {number} id
     * @param {User} user
     * @returns {Promise<User>}
     */
    update(id: number, user: User): Promise<User> {
        let userToAdd = Object.assign({}, user);
        delete userToAdd.id;
        return this.db('users').where({id}).update(userToAdd);
    }

    /**
     * Removes user by given id
     *
     * @param {number} id
     * @returns {Promise<number>} number of removed users
     */
    remove(id: number): Promise<number> {
       return this.db('users').where({id}).del();
    }
}
