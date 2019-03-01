import { Pool } from 'pg';

export default new Pool({
  user: 'root',
  host: 'localhost',
  database: 'test',
  password: 'homestead',
  port: 3211,
});
