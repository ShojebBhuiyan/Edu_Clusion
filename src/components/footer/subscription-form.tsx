"use client";

import React, { useTransition } from "react";
import { useToast } from "../ui/use-toast";
import { useForm } from "react-hook-form";
import { SubscriptionSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function SubscriptionForm() {
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof SubscriptionSchema>>({
    resolver: zodResolver(SubscriptionSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof SubscriptionSchema>) {
    // startTransition(() => {});
    console.log("Submitted");
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex items-center gap-5"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="bg-white text-black font-medium border focus:ring-0 focus:outline-none"
                  placeholder="johndoe@email.com"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" className="text-lg">
          Subscribe
        </Button>
      </form>
    </Form>
  );
}
