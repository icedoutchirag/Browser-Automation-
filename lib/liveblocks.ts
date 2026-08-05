import { Liveblocks } from "@liveblocks/node"

export const liveblocks = new Liveblocks({
  secret: process.env.LIVEBLOCKS_SECRET_KEY || "sk_dev_dummy_key_for_build",
})
