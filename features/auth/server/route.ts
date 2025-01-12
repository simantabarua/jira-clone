import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { SignInSchema, SignUpSchema } from "../schemas";

const auth = new Hono()
  .post("/login", zValidator("json", SignInSchema), async (c) => {
    const { email, password } = c.req.valid("json");
    return c.json({ json: { email, password } });
  })
  .post("/register", zValidator("json", SignUpSchema), async (c) => {
    const { username, email, password } = c.req.valid("json");
    return c.json({ json: { username, email, password } });
  });

export default auth;
