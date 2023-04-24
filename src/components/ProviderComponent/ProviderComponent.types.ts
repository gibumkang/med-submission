import { appActions, appState } from "@/hooks/hooks.types"
import { Dispatch } from "react"

export type ProviderComponentProps = {
    app: appState
    setApp: Dispatch<appActions>
}
