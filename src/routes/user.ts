import { fetchApi } from '../api/index';

export const router = async (fastify: any, options: any) =>  {
  fastify.get('/', async (req: any, res: any) => {
    try {
      const json = await fetchApi()
      res.send(json);
    } catch(err) {
      res.send(err);
    }
  });
};