import UserController from 'controllers/UserController';
import UserCreateInteractor from 'interactors/CreateUser';
import UserStore from "data/UserStore";
import ExpressServer from 'server/ExpressServer';

class ServerFactory {
    constructor(settings, database) {
        this.settings = settings;
        this.database = database;
    }

    create() {
        const userStore = new UserStore(this.database);
        const userCreateInteractor = new UserCreateInteractor(userStore);
        const userController = new UserController(userCreateInteractor);

        if (this.settings.type == 'express') {
            return new ExpressServer(this.settings, userController);
        }

        throw new Error('Unexpected server framework supported');
    }
}

export default ServerFactory;