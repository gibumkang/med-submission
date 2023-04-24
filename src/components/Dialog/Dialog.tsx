import { Button, Dialog, DialogHeader, DialogBody, DialogFooter } from "@material-tailwind/react"
import { DialogComponentProps } from "./Dialog.types"
import { ACTIONS } from "@/hooks/hooks.types"
import TextField from "@mui/material/TextField"

const DialogComponent: React.FC<DialogComponentProps> = (props) => {
    const { setOpen, open, setApp, app } = props

    const dialogHandler = () => {
        setApp({ type: ACTIONS.SIGN_IN, user: app.requestedUser })
        setOpen(false)
    }

    const greeter = () => {
        switch (app.currentUser) {
            case 0:
                return "Guest"
            case 1:
                return app.client.name
            case 2:
                return app.provider.name
        }
    }

    return (
        <Dialog open={open} handler={() => setOpen(!open)} size="lg">
            <DialogHeader>Welcome {app.requestedUser === 1 ? "Guest" : "Provider"}</DialogHeader>
            <DialogBody divider>
                <div className="mb-5">
                    <TextField
                        className="w-full"
                        label="Username"
                        defaultValue={app.requestedUser === 1 ? "benjamin" : "bobjones"}
                    />
                </div>
                <div className="mb-5">
                    <TextField className="w-full" label="Password" type="password" defaultValue={"12345"} />
                </div>
            </DialogBody>
            <DialogFooter>
                <Button variant="text" color="red" onClick={() => setOpen(!open)} className="mr-1">
                    <span>Go Back</span>
                </Button>
                <Button variant="gradient" className="rounded-3xl" color="teal" onClick={() => dialogHandler()}>
                    <span>Sign In</span>
                </Button>
            </DialogFooter>
        </Dialog>
    )
}

export default DialogComponent
