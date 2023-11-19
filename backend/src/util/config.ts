import dotenv from 'dotenv';
import fs from 'fs';

if (fs.existsSync('.env')) {
  dotenv.config({ path: '.env' });
}

export const MONGODB_URI = process.env['MONGODB_URI'] ?? 'Höpöhöpö';
export const PORT = process.env.PORT ?? 3001;
export const SECRET = process.env.SECRET ?? 'No secret';