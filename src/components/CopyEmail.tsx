import type { ReactElement } from "react";
import { Toaster, toast } from "sonner"
import { email } from "../data";

const CopyEmail = (): ReactElement => {
    const handleOnCLick = (): void => {
        navigator.clipboard.writeText(email)
        toast("Copied!")
    }

    return (
        <div>
            <button
                onClick={handleOnCLick}
                title="Copiar email"
                className="flex flex-row justify-between items-center gap-2 h-8 min-w-max p-2 text-sm text-black
                border border-black border-opacity-25 hover:scale-110 transition ease-in duration-300"
            >
                <img src="send.svg" width={"20px"} height={"20px"} alt="Icono enviar mensaje" />
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
};

export default CopyEmail;