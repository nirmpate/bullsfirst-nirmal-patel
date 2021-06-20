import { rest } from 'msw';

const API_URL = 'http://localhost:8080';

export const handlers = [
  rest.get(`${API_URL}/top-10-movies`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({}));
  }),
];
