import type { Stagehand } from "@browserbasehq/stagehand"

export async function agent({
  stagehand,
  instruction,
}: {
  stagehand: Stagehand
  instruction: string
}) {
  const agentInstance = stagehand.agent({
    model: "openai/gpt-4.1-mini",
  })

  const result = await agentInstance.execute(instruction)

  if (!result.success && !result.completed) {
    throw new Error(result.message || "Agent failed to complete the instruction.")
  }

  return {
    success: result.success,
    message: result.message,
    completed: result.completed,
  }
}

