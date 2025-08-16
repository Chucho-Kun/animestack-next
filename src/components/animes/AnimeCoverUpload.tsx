import { CldUploadWidget } from "next-cloudinary"
import Image from "next/image"
import { useState } from "react"
import { TbPhotoPlus } from "react-icons/tb"

export default function AnimeCoverUpload() {

    const [imageUrl, setImageUrl] = useState('')

    return (
        <CldUploadWidget
            onSuccess={(result, { widget }) => {
                if (result.event === 'success') {
                    widget.close()
                    // @ts-expect-error the image come from other webpage
                    setImageUrl(result.info.secure_url)
                }
            }}
            uploadPreset="arhefu8l"
            options={{
                maxFiles: 1
            }}
        >
            {
                ({ open }) => (
                    <>
                        <div className="space-y-2">
                            <div
                                onClick={() => open()}
                                className="relative cursor-pointer transition border-neutral-300 flex flex-col justify-center items-center gap-4 text-neutral-600 bg-slate-100 w-49 h-74 mb-5 mx-auto">
                                <TbPhotoPlus
                                    size={50}
                                />
                                <p className="text-lg font-semibold">Agregar Portada</p>
                                {imageUrl && (
                                    <div
                                        className="absolute inset-0 w-full h-full"
                                    >
                                        <Image
                                            fill
                                            style={{ objectFit: 'contain' }}
                                            src={imageUrl}
                                            alt="Portada del anime"
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                        <input
                            type="hidden"
                            name="img"
                            defaultValue={imageUrl}
                        />

                    </>
                )
            }
        </CldUploadWidget>
    )
}
