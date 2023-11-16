require("dotenv").config()

const config = {
    "development": {
        "username": process.env.DB_USERNAME_DEV,
        "password": process.env.DB_PASSWORD_DEV,
        "database": process.env.DB_NAME_DEV,
        "host": process.env.DB_HOST_DEV,
        "dialect": process.env.DB_DIALECT_DEV
    },
    "test": {
        "username": "root",
        "password": null,
        "database": "database_test",
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
    "production": {
        "username": "root",
        "password": null,
        "database": "database_production",
        "host": "127.0.0.1",
        "dialect": "mysql"
    }
}

module.exports = config