import type { ReactElement } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
    name: z.string().min(1, "El nombre no puede estar vacío"),
    email: z.string().email("Correo electrónico no válido"),
    message: z.string().min(1, "El mensaje no puede estar vacío")
})

type FormData = z.infer<typeof schema>

const ContactForm = (): ReactElement => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<FormData>({
        defaultValues: {
            name: '',
            email: '',
            message: ''
        },
        resolver: zodResolver(schema)
    })

    const onSubmit = (data: FormData): void => {
        console.log(data)
        reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="name-field"> Nombre </label>
                <input type="text" id="name-field" {...register("name")} />
                <p> {errors.name?.message} </p>
            </div>
            <div>
                <label htmlFor="email-field"> Correo electrónico </label>
                <input type="email" id="email-field" {...register("email")} placeholder="a@ejemplo.com" />
                <p> {errors.email?.message} </p>
            </div>
            <div>
                <label htmlFor="message-field"> Mensaje </label>
                <input type="text" id="message-field" {...register("message")} />
                <p> {errors.message?.message} </p>
            </div>
            <input type="submit" />
        </form>
    )
}

export default ContactForm
