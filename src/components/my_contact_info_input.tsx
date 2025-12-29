import { useState } from "react";
import { db } from "@/firebase";
import { collection, addDoc } from "firebase/firestore";
import { Button } from "@/components/ui/button";

import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSet,
}
  from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function MyContactInfoInput() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      alert("Form not submitted. Please fill out all fields.");
      return;
    }
    await addDoc(collection(db, "contactMessages"), {
      name,
      email,
      message,
    });
    setName("");
    setEmail("");
    setMessage("");
    setSent(true);
    setTimeout(() => setSent(false), 2000);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <h1 className='text-xl text-center mb-4'>
        I'd love to hear from you! Please fill out the form below to get in touch. <br /><br /> (｀・ω・´)
      </h1>
      <form onSubmit={handleSubmit}>
        <FieldSet>
          <FieldGroup className="flex flex-col items-center w-full">
            <Field className="w-full flex flex-col items-center">
              <FieldLabel htmlFor="Name" className="text-center w-full">Name</FieldLabel>
              <Input
                id="Name"
                type="text"
                placeholder="Name"
                value={name}
                onChange={e => setName(e.target.value)}
                className="bg-white text-black border-gray-300 dark:bg-zinc-900 dark:text-white dark:border-zinc-700 w-full max-w-xs mx-auto"
              />
            </Field>
            <Field className="w-full flex flex-col items-center">
              <FieldLabel htmlFor="Email" className="text-center w-full">Email</FieldLabel>
              <Input
                id="Email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="bg-white text-black border-gray-300 dark:bg-zinc-900 dark:text-white dark:border-zinc-700 w-full max-w-xs mx-auto"
              />
            </Field>
            <Field className="w-full flex flex-col items-center">
              <FieldLabel htmlFor="Message" className="text-center w-full">Message</FieldLabel>
              <textarea
                className="h-40 p-2 border rounded w-full max-w-xs mx-auto bg-white text-black border-gray-300 dark:bg-zinc-900 dark:text-white dark:border-zinc-700"
                id="Message"
                placeholder="Type your message..."
                value={message}
                onChange={e => setMessage(e.target.value)}
              />
              <div className="flex justify-center mt-4">
                <Button type="submit" disabled={sent}>
                  {sent ? "Message Sent!" : "Send Message"}
                </Button>
              </div>
            </Field>
          </FieldGroup>
        </FieldSet>
      </form>
    </div>
  )
}

export default MyContactInfoInput