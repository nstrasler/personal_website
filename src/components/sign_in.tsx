import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Button } from "./ui/button";




export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
      setEmail("");
      setPassword("");
    } catch (err) {
      alert("Login failed :(");
    }
  };

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit}>
        <FieldSet>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="email">Username(Email)</FieldLabel>
              <Input
                id="email"
                type="text"
                placeholder="n.strasler@yahoo.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="bg-white text-black border-gray-300 dark:bg-zinc-900 dark:text-white dark:border-zinc-700"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input
                id="password"
                type="password"
                placeholder="password123"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="bg-white text-black border-gray-300 dark:bg-zinc-900 dark:text-white dark:border-zinc-700"
              />
              <div className="flex justify-center mt-4">
                <Button type="submit">
                  Sign In
                </Button>
              </div>
            </Field>
          </FieldGroup>
        </FieldSet>
      </form>    
    </div>
  )
}

export default SignIn
