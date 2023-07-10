'use client'

import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'
const FormSchema = z.object({
  nome: z.string().min(1, 'Digite seu nome.'),
  email: z
    .string()
    .min(1, 'Digite seu endereço de email.')
    .email('Email inválido.')
    .toLowerCase(),
  assunto: z.string().min(1, 'Digite o assunto do email.'),
  mensagem: z.string().min(1, 'Digite a mensagem do email.'),
})

type FormProps = z.infer<typeof FormSchema>
export default function ContactForm() {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors, isSubmitting },
  } = useForm<FormProps>({
    resolver: zodResolver(FormSchema),
  })
  const onSubmit: SubmitHandler<FormProps> = async (data) => {
    console.log(data)
    // console.log(watch())
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" grid gap-4 max-md:w-full xl:grid-cols-2"
    >
      <div className="relative ">
        <input
          className="rounded-tl-lg border-l-2 border-t-2 border-transparent border-l-primary-tint border-t-primary-tint bg-secondary outline-transparent placeholder:text-stone-400 focus:ring-0 max-xl:rounded-tr-lg max-xl:border-r-2 max-xl:border-r-primary-tint max-md:w-full "
          type="text"
          {...register('nome')}
          placeholder="Seu Nome"
          disabled={isSubmitting}
        />
        {errors.nome && (
          <p className="absolute -bottom-3 left-1/2 w-full -translate-x-1/2 rounded-lg bg-red-200 text-center text-sm text-red-400">
            {errors.nome.message}
          </p>
        )}
      </div>
      <div className="relative">
        <input
          disabled={isSubmitting}
          className="border-r-2 border-transparent border-r-primary-tint bg-secondary outline-transparent placeholder:text-stone-400 focus:ring-0 max-xl:border-l-2 max-xl:border-l-primary-tint max-md:w-full xl:rounded-tr-lg xl:border-t-2 xl:border-t-primary-tint"
          type="email"
          {...register('email')}
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
          className=" col-span-2 w-full border-l-2 border-r-2 border-transparent border-l-primary-tint border-r-primary-tint bg-secondary outline-transparent placeholder:text-stone-400 focus:ring-0"
          type="text"
          {...register('assunto')}
          placeholder="O Assunto"
          disabled={isSubmitting}
        />
        {errors.assunto && (
          <p className="absolute -bottom-3 left-1/2  w-full -translate-x-1/2 rounded-lg bg-red-200 text-center text-sm text-red-400">
            {errors.assunto.message}
          </p>
        )}
      </div>
      <div className="relative w-full xl:col-span-2">
        <textarea
          className=" col-span-2 h-36 w-full resize-none rounded-bl-lg rounded-br-lg border-b-2 border-l-2 border-r-2 border-transparent border-b-primary-tint border-l-primary-tint border-r-primary-tint bg-secondary leading-relaxed outline-0 ring-0 placeholder:text-stone-400 focus:ring-0"
          {...register('mensagem')}
          disabled={isSubmitting}
          placeholder="Seu Mensagem"
        />
        {errors.mensagem && (
          <p className="absolute -bottom-3  left-1/2 w-full -translate-x-1/2 rounded-lg bg-red-200 text-center text-sm text-red-400">
            {errors.mensagem.message}
          </p>
        )}
      </div>

      <div className="flex w-full justify-between xl:col-span-2">
        <div>box</div>
        <button
          disabled={isSubmitting}
          type="submit"
          className="w-fit  rounded-2xl border border-primary-tint bg-transparent px-8 py-4 font-alt text-primary-tint transition-all hover:border-primary hover:bg-secondary hover:text-primary "
        >
          Enviar
        </button>
      </div>
    </form>
  )
}
