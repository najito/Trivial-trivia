const { Pool } = require('pg');

const PG_URI = 'postgres://rufnmnvy:HBTcXg17KAySmwAfb78nzh8tqvPSbuuQ@salt.db.elephantsql.com:5432/rufnmnvy';

const pool = new Pool({
    connectionString: PG_URI
  });

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};

