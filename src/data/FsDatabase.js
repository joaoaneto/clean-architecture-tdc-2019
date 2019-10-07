import fs from "fs";

class FsDatabase {
    constructor(settings) {
        this.filePath = settings.filePath;
    }

    save(key, content) {
        let db = {};

        try {
            db = JSON.parse(fs.readFileSync(this.filePath, 'utf-8'));
            db[key].push(content);
        } catch (error) {
            db[key] = [content];
        }
        fs.writeFileSync(this.filePath, JSON.stringify(db, null, 2));
    }
}

export default FsDatabase;