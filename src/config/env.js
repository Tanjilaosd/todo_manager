import {z} from 'zod'

const envSchema = z.object({
    NODE_ENV : z.enum(['development','production']).defualt("development"),
    PORT:z.coerce.number().int().min(1).max(65535).defualt(50000),
    MONGODB_URL:z.string().min(1,'Mongodb uri is required')
})

const parsed = envSchema.safeParse(process.env)
export const env = Object.freeze(parsed.data)