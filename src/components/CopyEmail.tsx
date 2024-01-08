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
            className="h-8 border min-w-max text-sm rounded-full px-4 py-1 border-black text-black hover:scale-105 transition duration-300 ease-in flex flex-row justify-between items-center gap-2"
            onClick={handleOnCLick}
            >
                <img width={"20px"} src="send.svg" alt="Icono enviar mensaje" />
                <span>
                    {email}
                </span>
            </button>
            <Toaster position="bottom-center" toastOptions={{
                duration: 2000,
                unstyled: true,
                classNames: {
                    toast: "bg-accent text-white rounded-lg px-8 py-2 w-full border border-black"
                }
            }} />
        </div>
    )
}

export default CopyEmail