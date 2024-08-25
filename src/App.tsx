import { z } from "zod"

const UserSchema = z.object({
  username: z.string(),
  age: z.number(),
})

const user = { username: "John" }

type User = z.infer<typeof UserSchema>

console.log(UserSchema.safeParse(user))

export const App = () => {
  return <></>
}
