import { toast } from "react-toastify";
import AvatarUserUpload from "./AvatarUserUpload";
import { UserSchema } from "@/src/types";

export default function UserLoginForm() {

    const handleSubmit = async (formData: FormData) => {

        const data = Object.fromEntries(formData.entries())
        const resp = UserSchema.safeParse(data)
        
        if(!resp.success){
            resp.error.issues.forEach( issue => {
                toast.error(issue.message)
            })
        }
    }

    return (
        <form
            className="mt-10 bg-white shadow-lg p-10 rounded-lg max-w-[600px] mx-auto"
            action={handleSubmit}
            noValidate
        >
            <AvatarUserUpload />
            <div className="mb-5 space-y-3">
                <label htmlFor="animeName" className="text-sm uppercase font-bold">
                    Nickname
                </label>
                <input
                    id="name"
                    name="name"
                    className="w-full p-3  border border-gray-200"
                    type="text"
                    placeholder="Tu Nickname"
                />
            </div>
            <div className="mb-5 space-y-3">
                <label htmlFor="animeName" className="text-sm uppercase font-bold">
                    E-Mail
                </label>
                <input
                    id="email"
                    name="email"
                    className="w-full p-3  border border-gray-200"
                    type="text"
                    placeholder="Tu Correo Electrónico"
                />
            </div>
            <div className="mb-5 space-y-3">
                <label htmlFor="animeName" className="text-sm uppercase font-bold">
                    Contraseña
                </label>
                <input
                    id="password"
                    name="password"
                    className="w-full p-3  border border-gray-200"
                    type="text"
                    placeholder="Tu Password"
                />
            </div>
            <div className="mb-5 space-y-3">
                <label htmlFor="animeName" className="text-sm uppercase font-bold">
                    Región
                </label>
                <input
                    id="country"
                    name="country"
                    className="w-full p-3  border border-gray-200"
                    type="text"
                    placeholder="En que país te registras"
                />
            </div>

            <div className="mb-5 space-y-3">
                <label htmlFor="animeReview" className="text-sm uppercase font-bold">
                    Sobre ti
                </label>
                <textarea
                    id="about"
                    name="about"
                    className="w-full p-3  border border-gray-200"
                    placeholder="¿Cuentanos que te gusta?"
                />

            </div>

            <input
                type="submit" value='Agregar Usuario'
                className="bg-fuchsia-600 hover:bg-fuchsia-700 w-full p-3 text-white uppercase font-bold cursor-pointer transition-colors"
            />
        </form>
    )
}
