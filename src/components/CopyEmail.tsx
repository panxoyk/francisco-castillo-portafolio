import { Toaster, toast } from "sonner"

type CopyEmailProps = {
    email: string,
}

const CopyEmail = ({ email }: CopyEmailProps) => {
    const handleOnCLick = () => {
        navigator.clipboard.writeText(email)
        toast("Copied!")
    }

    return (
        <div>
            <button
            className="h-8 border min-w-max text-sm p-2 border-black border-opacity-25 text-black hover:scale-110 transition duration-300 ease-in flex flex-row justify-between items-center gap-2"
            onClick={handleOnCLick}
            title="Copiar email"
            >
                <img width={"20px"} height={"20px"} src="send.svg" alt="Icono enviar mensaje" />
                <span>
                    {email}
                </span>
            </button>
            <Toaster position="bottom-center" toastOptions={{
                duration: 2000,
                unstyled: true,
                classNames: {
                    toast: "bg-success text-black rounded-lg px-8 py-2 w-full border border-black"
                }
            }} />
        </div>
    )
}

export default CopyEmail