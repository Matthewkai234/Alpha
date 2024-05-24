import connectDb from '../../DB/connection.js';
import productsRouter from './product/product.router.js'
import cors from "cors"
import authRouter from './auth/auth.router.js'
import productRouter from './product/product.router.js'
import cartRouter from './cart/cart.router.js'


const initApp = (app,express) => {
  app.use(cors());

  app.use(express.json());
  app.use('/auth',authRouter);
  app.use('/product',productRouter);
  app.use('/cart',cartRouter);


  app.use('*',(req,res)=>{
    return res.json({message:"page not found"});
  });

  connectDb();
}

export default initApp;