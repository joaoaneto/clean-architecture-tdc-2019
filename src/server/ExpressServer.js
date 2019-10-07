class ExpressServer {
    constructor(userController) {
        this.userController = userController;
    }

    start() {
        console.log('Server started');
        console.log(this.userController);
    }
}

export default ExpressServer;