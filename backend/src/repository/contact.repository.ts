import * as Knex from 'knex';
import knexInstance from '../knex';
import {Contact} from '../model/contact.model';


/**
 * Contact Repository
 * Persistence manager for user entity
 */
export class ContactRepository {
    private readonly db = knexInstance;

    /**
     * Finds contact by id
     * @param {number} id
     * @returns {Promise<Contact>}
     */
    findOne(id: number): Promise<Contact> {
        return this.db('contacts').select('*').where({id}).first();
    }

    /**
     * Retrieves all contact
     * @returns {Promise<Contact[]>}
     */
    findAll(): Promise<Contact[]> {
        return this.db('contacts').select('*');
    }

    /**
     * Inserts passed contact, if id isn't specified it'll be auto-generated
     *
     * @param {Contact} contact
     * @returns {Promise<number>} id or inserted contact
     */
    add(contact: Contact): Promise<number> {
        // TODO refactor
        return this.db('contacts').insert(contact).then(ids => ids[0]);
    }

    /**
     * Updates contact by id
     *
     * @param {number} id
     * @param {Contact} contact
     * @returns {Promise<Contact>}
     */
    update(id: number, contact: Contact): Promise<Contact> {
        let userToAdd = Object.assign({}, contact);
        delete userToAdd.id;
        return this.db('contacts').where({id}).update(userToAdd);
    }

    /**
     * Removes user by given id
     *
     * @param {number} id
     * @returns {Promise<number>} number of removed users
     */
    remove(id: number): Promise<number> {
        return this.db('contacts').where({id}).del();
    }
}
