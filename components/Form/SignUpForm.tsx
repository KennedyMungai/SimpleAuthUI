"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import Link from "next/link";

type Props = {};

const FormSchema = z
  .object({
    username: z
      .string()
      .min(5, "At least 5 characters are required for the username"),
    email: z
      .string()
      .email("Invalid Email")
      .min(5, "At least 5 characters are required for the email"),
    password: z
      .string()
      .min(8, "The password should not be less than 8 characters"),
    confirm_password: z
      .string()
      .min(8, "The password should not be less than 8 characters"),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords do not match",
    path: ["confirm_password"],
  });

const SignUpForm = (props: Props) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = (values: z.infer<typeof FormSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Username"
                    {...field}
                    className="bg-white"
                  />
                </FormControl>
                <FormDescription>
                  Enter your username to continue
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} className="bg-white" />
                </FormControl>
                <FormDescription>
                  Enter your email address to continue
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Password"
                    {...field}
                    type="password"
                    className="bg-white"
                  />
                </FormControl>
                <FormDescription>
                  Enter your password to continue
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirm_password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Confirm Password"
                    {...field}
                    type="password"
                    className="bg-white"
                  />
                </FormControl>
                <FormDescription>
                  Confirm Your Password To Continue
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full mt-2">
            Sign Up
          </Button>
          <p className="text-center">Or</p>
          <Link href="/sign-in">
            <Button type="submit" className="w-full mt-2" variant={"outline"}>
              Sign In
            </Button>
          </Link>
        </div>
      </form>
    </Form>
  );
};

export default SignUpForm;
