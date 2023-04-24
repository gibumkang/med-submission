export enum User {
    guest,
    client,
    provider,
}

export type appState = {
    currentUser: User
    requestedUser: User
    client: {
        name: string
        requestedDate: string | null
        confirmation: string | null
        image: string
    }
    provider: {
        name: string
        availability: {
            day: string
            startTime: string
            endTime: string
        }
        image: string
    }
}

export const initialState: appState = {
    currentUser: User.guest,
    requestedUser: User.client,
    client: {
        name: "",
        requestedDate: null,
        confirmation: null,
        image: "",
    },
    provider: {
        name: "",
        image: "",
        availability: {
            day: "",
            startTime: "",
            endTime: "",
        },
    },
}

export enum ACTIONS {
    SIGN_IN,
    LOG_OUT,
    REQUEST,
    SET_SCHEDULE,
}

export type appActions = {
    type: ACTIONS
    user?: User
    day?: string
    startTime?: string
    endTime?: string
}
