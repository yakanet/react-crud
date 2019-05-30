import * as Knex from "knex";
import knexInstance from '../knex';

import { User } from "../model/user.model";

/**
 * User Repository
 * Persistence manager for user entity
 */
export class UserRepository {

    private db: Knex;

    /**
     * @param {Knex} db [optional] Knex Database instance
     */
    constructor(db = knexInstance) {
        this.db = db;
    }

    /**
     * Get database instance
     * @returns {Knex}
     */
    getDb(): Knex {
        return this.db;
    }

    /**
     * Destroys database connection
     * @returns {Promise<void>}
     */
    closeConnection(): Promise<void> {
        return this.db.destroy();
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
     * Finds user by name
     * @param {string} name
     * @returns {Promise<User>}
     */
    findByName(name: string): Promise<User> {
        return this.db('users').select('*').where({name}).first();
    }

    /**
     * Find user by email
     * @param {string} email
     * @returns {Promise<User>}
     */
    findByEmail(email: string): Promise<User> {
        return this.db('users').select('*').where({email}).first();
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