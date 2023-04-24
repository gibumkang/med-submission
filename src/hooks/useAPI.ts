import { useReducer } from "react"
import { ACTIONS, User, appActions, appState, initialState } from "./hooks.types"
import useDialog from "@/components/Dialog/useDialog"

const useAPI = () => {
    const { open, setOpen } = useDialog()

    function appReducer(state: appState, action: appActions) {
        switch (action.type) {
            case ACTIONS.SIGN_IN:
                return {
                    ...state,
                    currentUser: action.user!,
                    client: {
                        ...state.client,
                        name: "Ben Smith",
                        image: "/client.webp",
                    },
                    provider: {
                        ...state.provider,
                        name: "Dr. Bob Jones",
                        image: "/provider.webp",
                    },
                }
            case ACTIONS.LOG_OUT:
                return {
                    ...state,
                    currentUser: User.guest,
                    client: {
                        ...state.client,
                        name: "",
                    },
                }
            case ACTIONS.REQUEST:
                return {
                    ...state,
                    requestedUser: action.user!,
                }
            case ACTIONS.SET_SCHEDULE:
                return {
                    ...state,
                    provider: {
                        ...state.provider,
                        availability: {
                            ...state.provider.availability,
                            day: action.day!,
                            startTime: action.startTime!,
                            endTime: action.endTime!,
                        },
                    },
                }
        }
    }

    const [app, setApp] = useReducer(appReducer, initialState)

    return {
        app,
        setApp,
        open,
        setOpen,
    }
}

export default useAPI
