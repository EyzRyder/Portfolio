"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// import Recaptcha from 'react-recaptcha'
// import { useEffect, useRef, useState } from 'react'
import z from "zod";
import { toast } from "react-hot-toast";
import Loader from "react-loaders";

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
export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    // watch,
    formState: { errors, isSubmitting },
  } = useForm<FormProps>({
    resolver: zodResolver(FormSchema),
  });

  // const [callback, setCallback] = useState(false)
  // const [seed, setSeed] = useState<any>()
  // const [state, setState] = useState(false)

  // function Result(condition: any) {
  //   if (condition === 'captcha') {
  //     return (
  //       <div className="absolute right-[60px] col-span-2 flex translate-y-[85px] rounded-md bg-red-700 p-2 text-[0.8rem] text-white sm:translate-y-[70px] md:right-auto md:translate-y-0">
  //         Complete a verificação para continuar
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           fill="none"
  //           viewBox="0 0 24 24"
  //           strokeWidth="1.5"
  //           stroke="currentColor"
  //           className="h-6 w-6"
  //         >
  //           <path
  //             strokeLinecap="round"
  //             strokeLinejoin="round"
  //             d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
  //           />
  //         </svg>
  //       </div>
  //     )
  //   } else {
  //     return (
  //       <div className="absolute right-[60px] col-span-2 flex translate-y-[85px] rounded-md bg-lime-700 p-2 text-white sm:translate-y-[70px] md:right-auto md:translate-y-0">
  //         Mensagem enviada{' '}
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           fill="none"
  //           viewBox="0 0 24 24"
  //           strokeWidth="1.5"
  //           stroke="currentColor"
  //           className="h-6 w-6"
  //         >
  //           <path
  //             strokeLinecap="round"
  //             strokeLinejoin="round"
  //             d="M4.5 12.75l6 6 9-13.5"
  //           />
  //         </svg>
  //       </div>
  //     )
  //   }
  // }

  // function onloadCallback() {
  //   console.log('Recaptcha loaded')
  //   setCallback(true)
  // }

  // const recaptchaInstance = useRef()
  // useEffect(() => {
  //   if (callback) {
  //     // recaptchaInstance.reset()
  //     setSeed(Math.random())
  //     // Forma que utilizei para alternar o tema do Recaptcha, pois o .reset() não estava funcionando
  //   }
  // }, [callback])

  // const verifyCallback = function (response: any) {
  //   if (response) {
  //     setState(true)
  //   }
  // }

  const onSubmit: SubmitHandler<FormProps> = async (data: FormProps) => {
    // console.log(data)
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
    reset();
    // console.log(res)
    // console.log(watch())
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" grid gap-4 max-md:w-full xl:grid-cols-2 mb-32"
    >
      <div className="relative ">
        <input
          className="rounded-tl-lg border-l-2 border-t-2 border-transparent border-l-primary-tint border-t-primary-tint bg-secondary outline-transparent placeholder:text-stone-400 focus:ring-0 max-xl:rounded-tr-lg max-xl:border-r-2 max-xl:border-r-primary-tint max-md:w-full"
          type="text"
          {...register("name")}
          placeholder="Seu Nome"
          disabled={isSubmitting}
        />
        {errors.name && (
          <p className="absolute -bottom-3 left-1/2 w-full -translate-x-1/2 rounded-lg bg-red-200 text-center text-sm text-red-400">
            {errors.name.message}
          </p>
        )}
      </div>
      <div className="relative">
        <input
          disabled={isSubmitting}
          className=" border-r-2 border-transparent border-r-primary-tint bg-secondary outline-transparent placeholder:text-stone-400 focus:ring-0 max-xl:border-l-2 max-xl:border-l-primary-tint max-md:w-full xl:rounded-tr-lg xl:border-t-2 xl:border-t-primary-tint"
          type="email"
          {...register("email")}
          placeholder="Seu Email"
        />
        {errors.email && (
          <p className="absolute -bottom-3 left-1/2  w-full -translate-x-1/2 rounded-lg bg-red-200 text-center text-sm text-red-400">
            {errors.email.message}
          </p>
        )}
      </div>
      <div className="relative w-full xl:col-span-2">
        <input
          className="col-span-2 w-full border-l-2 border-r-2 border-transparent border-l-primary-tint border-r-primary-tint bg-secondary outline-transparent placeholder:text-stone-400 focus:ring-0"
          type="text"
          {...register("subject")}
          placeholder="O Assunto"
          disabled={isSubmitting}
        />
        {errors.subject && (
          <p className="absolute -bottom-3 left-1/2  w-full -translate-x-1/2 rounded-lg border border-red-500 bg-red-200 text-center text-sm text-red-400">
            {errors.subject.message}
          </p>
        )}
      </div>
      <div className="relative w-full xl:col-span-2">
        <textarea
          className="col-span-2 h-36 w-full resize-none rounded-bl-lg rounded-br-lg border-b-2 border-l-2 border-r-2 border-transparent border-b-primary-tint border-l-primary-tint border-r-primary-tint bg-secondary leading-relaxed outline-0 ring-0 placeholder:text-stone-400 focus:ring-0"
          {...register("message")}
          disabled={isSubmitting}
          placeholder="Seu Mensagem"
        />
        {errors.message && (
          <p className="absolute -bottom-3  left-1/2 w-full -translate-x-1/2 rounded-lg bg-red-200 text-center text-sm text-red-400">
            {errors.message.message}
          </p>
        )}
      </div>

      <div className="flex w-full justify-between xl:col-span-2">
        {/* <Recaptcha
          sitekey="6LdP-p8kAAAAAMBJp2hawp3jfjE5nfeVZQ8f7YB8"
          render="explicit"
          verifyCallback={verifyCallback}
          onloadCallback={onloadCallback}
          ref={recaptchaInstance}
          theme={'Dark'}
          hl="pt-PT"
          size="compact"
          key={seed}
        /> */}
        <div></div>
        {isSubmitting ? (
          <Loader
            innerClassName=" px-8 py-4 "
            type="ball-clip-rotate-multiple"
            active={true}
          />
        ) : (
          <button
            disabled={isSubmitting}
            type="submit"
            className="w-fit rounded-2xl border border-grau-0 bg-transparent px-8 py-4 font-alt text-grau-0 transition-all hover:border-primary hover:bg-secondary hover:text-primary "
          >
            Enviar
          </button>
        )}
      </div>
    </form>
  );
}
