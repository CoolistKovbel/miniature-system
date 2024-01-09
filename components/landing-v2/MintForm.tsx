"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import * as z from "zod";
import { useToast } from "../ui/use-toast";

import { useForm } from "react-hook-form";
import { ethers } from "ethers";
import { Button } from "@/components/ui/button";


const FormSchema = z.object({
  amount: z.string(),
});

export  function Mintform() {
  const [isLoading, setIsLooading] = useState(false);
  const { toast } = useToast();
  const [contract, setContract] = useState<any>();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      amount: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    console.log(values)
  };


  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-[40%] mx-auto  my-[42px] relative  shadow-lg"
      >
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem className="border-2 p-8 text-green w-full">
              <FormLabel className="text-white font-bold text-left shadow-text-lg">
                Amount:{" "}
              </FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="enter amount"
                  className="bg-[#f4f4f4] text-[#16a34a] text-sm"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="absolute right-8 bottom-[74px]">Mint</Button>
      </form>
    </Form>
  );
}

