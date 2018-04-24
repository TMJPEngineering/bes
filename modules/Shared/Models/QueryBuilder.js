/* global logger */

import _ from 'lodash';

class QueryBuilder {
    constructor (schema) {
        this.schema = schema;
        this.query = undefined;
        this._findQuery = _findQuery.bind(this);
        this._exec = _exec.bind(this);
    }

    find (payload, select, callback) {
        this._findQuery('find', payload, select, callback);
        return this;
    }

    findOne (payload, select, callback) {
        this._findQuery('findOne', payload, select, callback);
        return this;
    }

    findOneAndUpdate (select, newData, callback) {
        logger.debug(`findOne(${JSON.stringify(select)}) and update(${JSON.stringify(newData)})`);
        this.schema.findOneAndUpdate(select, { $set: newData }, { new: true }, callback);
        return this;
    }

    count () {
        logger.debug(`count()`);
        this.query.count();
        return this;
    }

    create (payload, callback) {
        logger.debug('Create schema payload:', payload);
        this.schema.create(payload, callback);
        return this;
    }

    remove (payload, callback) {
        logger.debug('Remove payload:', payload);
        return this.schema.remove(payload, callback);
    }

    async save (payload, callback) {
        logger.debug('Save schema payload:', payload);

        // If length is undefined, the type of payload is object. If not, it must be an array.
        if (payload.length === undefined) {
            const schema = this.schema(payload);
            await schema.save(payload, callback);
            return schema;
        }

        await this.schema.insertMany(payload, callback);
        return this;
    }

    whereFieldInArray (field, value) {
        logger.debug(`where ${field} in ${JSON.stringify(value)}`);
        this.query.where(field).in(value);
        return this;
    }

    whereFieldNotEqualToValue (field, value) {
        logger.debug(`where ${field} not equal to ${value}`);
        this.query.where(field).ne(value);
        return this;
    }

    with (collections = []) {
        logger.debug(`with`, collections);
        collections.forEach(collection => {
            this.query.populate(collection);
        });
        return this;
    }

    execute () {
        logger.debug(`execute()`);
        return this.query.exec(this._exec);
    }
}

/**
 * All private functions goes here.
 * Naming a private function should have a underscore prefix
 * Example: _privateFunction
 */

function _findQuery (method, payload, select, callback) {
    if (!select) select = {};
    let countSelected = _.size(select);
    if (payload) {
        logger.debug(`${method}(${JSON.stringify(payload)}, ${JSON.stringify(select)})`);
        if (countSelected > 0) {
            this.query = this.schema[method](payload, select, callback);
            return this;
        }

        this.query = this.schema[method](payload, callback);
        return this;
    }

    logger.debug(`${method}()`);
    this.query = this.schema[method]();
}

function _exec (error, data) {
    if (error) {
        logger.error(error);
        return error;
    }
    return data;
}

export default QueryBuilder;
