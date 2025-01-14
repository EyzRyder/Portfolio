"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { toast } from "react-hot-toast";
import Loader from "react-loaders";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";

const FormSchema = z.object({
  name: z.string().min(1, "Digite seu nome.").max(35, "Nome muito longo."),
  email: z
    .string()
    .min(1, "Digite seu endereço de email.")
    .email("Email inválido.")
    .max(35, "Email muito longo."),
  subject: z
    .string()
    .min(1, "Digite o assunto do email.")
    .max(41, "Assunto muito longo."),
  message: z
    .string()
    .min(1, "Digite a mensagem do email.")
    .max(1000, "Mensagem muito longo."),
});

type FormProps = z.infer<typeof FormSchema>;

function ContactForm() {
  const form = useForm<FormProps>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<FormProps> = async (data: FormProps) => {
    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
      },
    }).then((res) => {
      if (!res.ok) {
        toast.error("Failed to send message");
        throw new Error("Failed to send message");
      }
      toast("Email enviado", {
        position: "top-right",
        duration: 6000,
        style: {
          border: "2px solid #e8a21f",
          padding: "16px",
          color: "#e8a21f",
          backgroundColor: "#6c162b",
        },
        iconTheme: {
          primary: "#713200",
          secondary: "#FFFAEE",
        },
      });
      return res.json();
    });
    form.reset();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" grid gap-4 max-md:w-full sm:grid-cols-2 pb-32 "
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="rounded-tl-lg border-l-2 border-t-2 border-transparent
                             border-l-grau-0 border-t-grau-0
                             outline-transparent placeholder:text-stone-400
                             focus:ring-0 max-sm:rounded-tr-lg
                             max-sm:border-r-2 max-sm:border-r-grau-0
                             max-md:w-full bg-[#FEF3C7] bg-opacity-30 backdrop-blur-md "
                  placeholder="Seu nome"
                  disabled={form.formState.isSubmitting}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="border-r-2 border-transparent border-r-grau-0
                            outline-transparent placeholder:text-stone-400 focus:ring-0
                            max-sm:border-l-2 max-sm:border-l-grau-0 max-md:w-full
                            sm:rounded-tr-lg sm:border-t-2 sm:border-t-grau-0
                            bg-[#FEF3C7] bg-opacity-30  backdrop-blur-md"
                  placeholder="Seu email"
                  disabled={form.formState.isSubmitting}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem className="sm:col-span-2">
              <FormControl>
                <Input
                  className="sm:col-span-2 w-full border-l-2 border-r-2 border-transparent
                            border-l-grau-0 border-r-grau-0
                            outline-transparent placeholder:text-stone-400 focus:ring-0
                            bg-[#FEF3C7] bg-opacity-30 backdrop-blur-md"
                  placeholder="Assunto da mensagem"
                  disabled={form.formState.isSubmitting}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="sm:col-span-2">
              <FormControl>
                <Textarea
                  className="col-span-2 h-36 w-full resize-none rounded-bl-lg
                            rounded-br-lg border-b-2 border-l-2 border-r-2
                            border-transparent border-b-grau-0
                            border-l-grau-0 border-r-grau-0
                            leading-relaxed outline-0 ring-0 placeholder:text-stone-400
                            focus:ring-0  bg-[#FEF3C7] bg-opacity-30  backdrop-blur-md"
                  placeholder="Digite sua mensagem"
                  disabled={form.formState.isSubmitting}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          disabled={form.formState.isSubmitting}
          type="submit"
          className="w-fit rounded-2xl border border-grau-0 bg-transparent
                    px-8 py-4 font-alt text-grau-0 transition-all bg-opacity-30
                    hover:border-grau-4 hover:text-grau-3 hover:bg-[#FEF3C7] bg-[#FEF3C7]"
        >
          {form.formState.isSubmitting ? (
            <Loader
              innerClassName=" px-8 py-4 "
              type="ball-clip-rotate-multiple"
              active={true}
            />
          ) : (
            <>Submit</>
          )}
        </Button>
      </form>
    </Form>
  );
}

export { ContactForm };
