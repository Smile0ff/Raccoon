const { resolve } = require('path');
const dotenv = require('dotenv');

const env = process.env.NODE_ENV || 'development';
const envFileName = '.env.' + env;

const envFilePath = resolve('./', '.env', envFileName);

dotenv.config({ path: envFilePath });