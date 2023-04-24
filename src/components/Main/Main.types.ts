import { appActions } from "@/hooks/hooks.types"
import { Dispatch, SetStateAction } from "react"

export type MainProps = {
    open: boolean
    setApp: Dispatch<appActions>
    setOpen: Dispatch<SetStateAction<boolean>>
}
