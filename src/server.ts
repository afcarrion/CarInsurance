import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import ProductsRoutes from './routes/productsRoutes';
class Server{

    public app: express.Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    config(){
        this.app.set('port', process.env.PORT || 3000);
        //Middlewares
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(morgan('dev'));
        this.app.use(helmet());
        this.app.use(compression());
    }

    routes(){
        this.app.use(indexRoutes);
        this.app.use('/api/products', ProductsRoutes);
    }

    start(){
        this.app.listen(this.app.get('port'), ()=>{
            console.log(`Server on port ${this.app.get('port')}`);
        });
    }
}

const server= new Server();
server.start();