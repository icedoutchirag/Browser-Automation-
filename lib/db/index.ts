import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

import * as schema from "./schema";

const connectionString = process.env.DATABASE_URL || "postgres://placeholder:placeholder@localhost:5432/placeholder"

// Pooled HTTP connection — safe for serverless/edge and Next.js Server Components.
const sql = neon(connectionString)

export const db = drizzle({ client: sql, schema, casing: "snake_case" })

export { schema };
