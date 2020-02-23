import fastify from 'fastify';
import { router } from './routes/user';

const port: number = 5000;

const app: any = fastify();

// Router function
app.register(router, {prefix: '/data'});

app.listen(port, (err: any, adress: any) => {
  if(err) {
    console.error('Failed !');
  } else {
    console.log('Success !');
  }
});