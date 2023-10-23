import * as dotenv from 'dotenv';

dotenv.config();

export const SUBQUERY_ENDPOINT = process.env.SUBQUERY_ENDPOINT as string
export const SUBSQUID_ENDPOINT = process.env.SUBSQUID_ENDPOINT as string