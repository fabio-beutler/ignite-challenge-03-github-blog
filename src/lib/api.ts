import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: `Bearer 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`,
  },
});
