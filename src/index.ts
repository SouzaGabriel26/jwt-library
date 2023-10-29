import 'dotenv/config';

import { sign } from './jwt/sign.ts';
import { verify } from './jwt/verify.ts';

const secret = process.env.JWT_SECRET as string;

const token = sign({
  exp: Date.now() + (24 * 60 * 60 * 1000),
  data: {
    name: 'Gabriel Souza',
  },
  secret,
});

const decoded = verify({
  token,
  secret,
});

console.log(decoded);
