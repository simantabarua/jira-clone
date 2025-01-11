"use client";
import { DottedSeparator } from "@/components/dotted-separator";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";

export function SignInCard() {
  const FormSchema = z.object({
    email: z.string().email({
      message: "Invalid email address",
    }),
    password: z.string().min(8, {
      message: "Password must be at least 8 characters",
    }),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof FormSchema>) => {
    console.log(values);
  };

  return (
    <>
      <Card className="w-full h-full md:w-[487px] border-none shadow-none">
        <CardHeader className="text-center p-7">
          <CardTitle className="text-2xl">Welcome back!</CardTitle>
          <CardDescription className="text-sm">
            Log in to continue
          </CardDescription>
        </CardHeader>
        <DottedSeparator className="px-7" />
        <CardContent className="p-7">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Enter email address"
                        className="h-12"
                        {...field}
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
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Enter password"
                        className="h-12"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" size={"lg"}>
                Submit
              </Button>
            </form>
          </Form>
        </CardContent>
        <DottedSeparator className="px-7" />
        <CardContent className="p-7 flex flex-col gap-y-4">
          <Button variant="secondary" size="lg" className="w-full">
            <FcGoogle className="mr-2 size-5" />
            Login with Google
          </Button>
          <Button variant="secondary" size="lg" className="w-full">
            <FaGithub className="mr-2 size-5" />
            Login with Github
          </Button>
        </CardContent>
        <DottedSeparator className="px-7" />
        <CardContent className="p-7 flex items-center justify-center">
          <p>
            Already have an account?
            <Link href="/sign-in">
              <span className="text-blue-700">&nbsp;Sign In</span>
            </Link>
          </p>
        </CardContent>
      </Card>
    </>
  );
}
