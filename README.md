# fivem-mysql-async-js

Requires [fivem-mysql-async](https://github.com/brouznouf/fivem-mysql-async) resource.  
Compatible with Javascript and Typescript.

[![npm version](https://img.shields.io/npm/v/fivem-mysql-async-js.svg)](https://www.npmjs.com/package/fivem-mysql-async-js)
[![npm downloads](https://img.shields.io/npm/dm/fivem-mysql-async-js.svg)](https://www.npmjs.com/package/fivem-mysql-async-js)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?maxAge=2592000)](https://github.com/Jexordexan/fivem-mysql-async-js/blob/main/LICENSE)
![gzip size](http://img.badgesize.io/https://npmcdn.com/fivem-mysql-async-js?compression=gzip)

<br/>

## Installation

Using npm:

```text
npm install fivem-mysql-async-js
```

Using yarn:

```text
yarn add fivem-mysql-async-js
```

Import modules:

```javascript
import * as MySQL from 'fivem-mysql-async-js'
```

or

```javascript
import { execute, fetchAll, fetchScalar, insert, store, transaction } from 'fivem-mysql-async-js'
```

<br/>

## Functions

* ### **execute**

  Execute a query with no result required.

  `query` (type: string) query.  
  `params` (type: Object) paramaters **(optional)**.

  **Returns**: Promise, Number of rows updated

<br/>

* ### **fetchAll**

  Execute a query and fetch all results.

  `query` (type: string) query.  
  `params` (type: Object) paramaters **(optional)**.

  **Returns**: Promise, Query results

<br/>

* ### **fetchScalar**

  Execute a query and fetch the first column of the first row.  
Useful for count function by example.

  `query` (type: string) query.  
  `params` (type: Object) paramaters **(optional)**.

  **Returns**: Promise, Value of the first column in the first row

<br/>

* ### **insert**

  Execute a query and retrieve the last id insert.

  `query` (type: string) query.  
  `params` (type: Object) paramaters **(optional)**.

  **Returns**: Promise, Value of the last insert id

<br/>

* ### **store**

  Stores a query for later execution.

  `query` (type: string) query.

  **Returns**: Promise

<br/>

* ### **transaction**

  Execute a List of querys and returns bool true when all are executed successfully.

  `query` (type: string) query.  
  `params` (type: Object) paramaters **(optional)**.

  **Returns**: Promise, `true` if the transaction was successful, otherwise `false`

<br/>

## Examples

```javascript
var position = await MySQL.fetchScalar('SELECT position FROM users WHERE identifier = @identifier', {
    '@identifier': identifier
})
```

or

```javascript
MySQL.fetchScalar('SELECT position FROM users WHERE identifier = @identifier', {
    '@identifier': identifier
}).then((position) => {
    ...
})
```
