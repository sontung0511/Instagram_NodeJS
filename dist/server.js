"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config/config");
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const mongoose_1 = __importDefault(require("mongoose"));
const logging_1 = __importDefault(require("./library/logging"));
const UserRoutes_1 = __importDefault(require("./routes/UserRoutes"));
const router = (0, express_1.default)();
console.log(router);
mongoose_1.default
    .connect(config_1.config.mongo.url, { retryWrites: true, w: 'majority' })
    .then(() => {
    logging_1.default.info('Mongo connected successfully.');
    StartServer();
})
    .catch((error) => logging_1.default.error(error));
const StartServer = () => {
    router.use((req, res, next) => {
        logging_1.default.info(`Incomming -> Method: [${req.method}]-URL: [${req.url}]
    -IP:[${req.socket.remoteAddress}]`);
        res.on('finish', () => {
            logging_1.default.info(`Incomming -> Method: [${req.method}]-URL: [${req.url}]
      -IP:[${req.socket.remoteAddress}]`);
        });
        next();
    });
    router.use(express_1.default.urlencoded({ extended: true }));
    router.use(express_1.default.json());
    router.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
        if (req.method == 'OPTIONS') {
            res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
            return res.status(200).json({});
        }
        next();
    });
    router.use('/users', UserRoutes_1.default);
    router.get('/ping', (req, res, next) => res.status(200).json({ message: 'pong' }));
    router.use((req, res, next) => {
        const error = new Error('Not found');
        logging_1.default.error(error);
        res.status(404).json({
            message: error.message
        });
    });
    http_1.default.createServer(router).listen(config_1.config.server.port, () => logging_1.default.info(`Server is 
  running on port ${config_1.config.server.port}.`));
};
//# sourceMappingURL=server.js.map