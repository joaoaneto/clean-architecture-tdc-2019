import FsDatabase from "data/FsDatabase";

class DatabaseFactory {
    constructor(settings) {
        this.settings = settings;
    }

    create() {
        if (this.settings.type == 'fs') {
            return new FsDatabase(this.settings);
        }

        throw new Error('Unsuported database');
    }
}

export default DatabaseFactory;