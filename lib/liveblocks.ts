import { Liveblocks } from "@liveblocks/node"

const rawSecret = (process.env.LIVEBLOCKS_SECRET_KEY || "").trim()
const isValidSecret = rawSecret.startsWith("sk_") && !/[^\w-]/i.test(rawSecret)
const secret = isValidSecret ? rawSecret : "sk_dev_dummy_key_for_build"

export const liveblocks = new Liveblocks({ secret })
