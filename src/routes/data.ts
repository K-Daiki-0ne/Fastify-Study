import { fetchApi } from '../api/index';

export const router = async (fastify: any, options: any) =>  {
  fastify.get('/', async (req: any, res: any) => {
    try {
      const jsonData: object | undefined = await fetchApi()
      res.send(jsonData);
    } catch(err) {
      res.send(err);
    }
  });
};