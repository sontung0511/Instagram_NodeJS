
import { config } from './config/config';
import express from'express'
import http from 'http'
import mongoose from 'mongoose'
import logging from './library/logging';
import UserRoutes from './routes/UserRoutes'
const router = express();
console.log(router)
//connect to mongo//
mongoose
    .connect(config.mongo.url, { retryWrites: true, w: 'majority' })
    .then(() => {
        logging.info('Mongo connected successfully.');
        StartServer();
    })
    .catch((error) => logging.error(error));
/**Run server if  Mongo connect */
const StartServer = () =>{
  router.use((req,res,next)=>{
    /**logging request */
    logging.info(`Incomming -> Method: [${req.method}]-URL: [${req.url}]
    -IP:[${req.socket.remoteAddress}]`);
    res.on('finish',()=>{
      logging.info(`Incomming -> Method: [${req.method}]-URL: [${req.url}]
      -IP:[${req.socket.remoteAddress}]`);
    });
    next();
  });
  router.use(express.urlencoded({extended: true}));
  router.use(express.json());
  /**Rules of our API */
      router.use((req, res, next) => {
          res.header('Access-Control-Allow-Origin', '*');
          res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  
          if (req.method == 'OPTIONS') {
              res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
              return res.status(200).json({});
          }
  
          next();
      });
  /**Routes */
    router.use('/users', UserRoutes);
  /**Healthcheck */
  router.get('/ping',(req, res,next)=>res.status(200).json({message: 'pong'}));
  router.use((req, res, next) => {
          const error = new Error('Not found');
  
          logging.error(error);
  
          res.status(404).json({
              message: error.message
          });
      });
  http.createServer(router).listen(config.server.port, () => logging.info(`Server is 
  running on port ${config.server.port}.`));
};
