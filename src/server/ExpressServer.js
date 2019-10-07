import express from 'express';
import bodyParser from 'body-parser';

class ExpressServer {
    constructor(settings, userController) {
        this.port = settings.port;
        this.userController = userController;
        this.app = express();
    }

    start() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.post('/user',
                    this.userController.createUser.bind(this.userController));
        this.app.listen(this.port, () => console.log('Server started'));
    }
}

export default ExpressServer;