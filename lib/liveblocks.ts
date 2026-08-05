import { Liveblocks } from "@liveblocks/node"

function createLiveblocksClient() {
  const secret = (process.env.LIVEBLOCKS_SECRET_KEY || "").trim().replace(/['"]/g, "")
  if (secret && secret.startsWith("sk_")) {
    try {
      return new Liveblocks({ secret })
    } catch {
      // Fallback for static build evaluation
    }
  }
  return new Liveblocks({ secret: "sk_dev_dummy_key_for_build_12345678901234567890" })
}

export const liveblocks = createLiveblocksClient()
