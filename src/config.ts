import * as dotenv from 'dotenv'
dotenv.config()

const EPG_API_URL = process.env.EPG_API_URL;
const EPG_API_FIELDS = process.env.EPG_API_FIELDS;

export {
  EPG_API_URL,
  EPG_API_FIELDS,
}