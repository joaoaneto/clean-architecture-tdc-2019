import DatabaseFactory from "data/DatabaseFactory";
import ServerFactory from "server/ServerFactory";

const settings = {
    database: {
        type: 'fs',
        filePath: './mydatabase.json'
    },
    server: {
        type: 'express',
        port: 3000
    }
}

function main() {
    const database = new DatabaseFactory(settings.database).create();
    const server = new ServerFactory(settings.server, database).create();

    server.start();
}

main();