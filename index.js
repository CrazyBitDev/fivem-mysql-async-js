var mysql = global.exports['mysql-async']

/**
 * Execute a query with no result required
 *
 * @param {string} query query.
 * @param {Object} params paramaters.
 * @return {Promise} Number of rows updated
 */
exports.execute = function (query, params) {
    return new Promise( (resolve, reject) => {
        mysql.mysql_execute(query, params || [], result => {
            resolve(result)
        })
    })
}

/**
 * Execute a query and fetch all results
 *
 * @param {string} query query.
 * @param {Object} params paramaters.
 * @return {Promise} Query results
 */
exports.fetchAll = function (query, params) {
    return new Promise( (resolve, reject) => {
        mysql.mysql_fetch_all(query, params || [], result => {
            resolve(result)
        })
    })
}

/**
 * Execute a query and fetch the first column of the first row
 * Useful for count function by example
 *
 * @param {string} query query.
 * @param {Object} params paramaters.
 * @return {Promise} Value of the first column in the first row
 */
exports.fetchScalar = function (query, params) {
    return new Promise( (resolve, reject) => {
        mysql.mysql_fetch_scalar(query, params || [], result => {
            resolve(result)
        })
    })
}

/**
 * Execute a query and retrieve the last id insert
 *
 * @param {string} query query.
 * @param {Object} params paramaters.
 * @return {Promise} Value of the last insert id
 */
exports.insert = function (query, params) {
    return new Promise( (resolve, reject) => {
        mysql.mysql_insert(query, params || [], result => {
            resolve(result)
        })
    })
}

/**
 * Stores a query for later execution
 *
 * @param {string} query query.
 * @return {Promise}
 */
exports.store = function (query) {
    return new Promise( (resolve, reject) => {
        mysql.mysql_store(query, result => {
            resolve(result)
        })
    })
}

/**
 * Execute a List of querys and returns bool true when all are executed successfully
 *
 * @param {string} query query.
 * @param {Object} params paramaters.
 * @return {Promise} true if the transaction was successful, otherwise false
 */
exports.transaction = function (query, params) {
    return new Promise( (resolve, reject) => {
        mysql.mysql_transaction(query, params || [], result => {
            resolve(result)
        })
    })
}