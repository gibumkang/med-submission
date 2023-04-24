import { appActions, appState } from "@/hooks/hooks.types"
import { Dispatch, SetStateAction } from "react"

export type FooterProps = {
    open: boolean
    app: appState
    setApp: Dispatch<appActions>
    setOpen: Dispatch<SetStateAction<boolean>>
}
