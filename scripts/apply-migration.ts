import { config } from "dotenv";
import { neon } from "@neondatabase/serverless";

config({ path: ".env.local" });

const url = process.env.DATABASE_URL_UNPOOLED ?? process.env.DATABASE_URL;

if (!url) {
  console.error("DATABASE_URL is not set in .env.local");
  process.exit(1);
}

const sql = neon(url);

async function main() {
  console.log("Applying migrations to Neon database via HTTP...");
  await sql`
    CREATE TABLE IF NOT EXISTS "workflows" (
      "id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
      "org_id" text NOT NULL,
      "name" text NOT NULL,
      "graph" jsonb,
      "created_at" timestamp DEFAULT now() NOT NULL,
      "updated_at" timestamp DEFAULT now() NOT NULL
    );
  `;
  console.log("✅ Successfully created workflows table in Neon Postgres!");
}

main().catch((err) => {
  console.error("Failed to migrate database:", err);
  process.exit(1);
});
