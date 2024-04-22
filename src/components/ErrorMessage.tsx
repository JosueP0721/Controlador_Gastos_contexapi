import { PropsWithChildren } from "react"

export default function ErrorMessage({children} : PropsWithChildren) {
  return (
    <p className=" text-sm font-bold text-white bg-red-600 rounded-lg p-2 text-center">
        {children}
    </p>
  )
}
