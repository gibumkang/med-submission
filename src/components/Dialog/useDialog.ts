import { User } from "@/hooks/hooks.types"
import { useReducer, useState } from "react"

const useDialog = () => {
    const [open, setOpen] = useState<boolean>(false)

    return {
        open,
        setOpen,
    }
}

export default useDialog
