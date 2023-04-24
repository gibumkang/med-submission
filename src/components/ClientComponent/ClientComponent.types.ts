import { appActions, appState } from "@/hooks/hooks.types"
import { Dispatch } from "react"

export type ClientComponentProps = {
    app: appState
    setApp: Dispatch<appActions>
}
