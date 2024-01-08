// Component
"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { CardWrapper } from "./card-wrapper";
import * as z from "zod";
import { RegisterSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";
import { register } from "@/actions/register";


export default function RegisterForm() {
  // Pending state from react
  const [isPending, startTranstion] = useTransition();
  const [error, setError] = useState<string |undefined>();
  const [success, setSuccess] = useState<string |undefined>();

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      username: ""
    },
  });

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    // Alertinative use fetch() or axios.post(url, values)

    setError("")
    setSuccess("")

    startTranstion(() => {
      register(values).then((data) => {
        setError(data.error);
        setSuccess(data.success);
      });
    });

    form.reset();
  };

  return (
    <CardWrapper
      headerLabel="Ready to go to Saturn"
      backButtonLabel="Already situated?"
      backButtonHref="/sign-in"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4 text-black">
            {/* TODO: CHANGE THE EMAIL */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold text-white">Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter@gg.com"
                      type="email"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold text-white">Username</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="depressionThought"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold text-white">
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="enter pass"
                      type="password"
                      disabled={isPending}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <FormError message={error} />
          <FormSuccess message={success} />

          <Button type="submit" className="w-full" disabled={isPending}>
            Register
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
}
