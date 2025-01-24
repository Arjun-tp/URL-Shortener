import dotenv from 'dotenv';

dotenv.config();

const config = {
    port: process.env.PORT || 5000,
    dbURI: process.env.DB_URI || 'mongodb://localhost:27017/myapp',
};

export default config;
