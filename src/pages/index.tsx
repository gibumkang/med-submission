import DialogComponent from "@/components/Dialog/Dialog"
import useDialog from "@/components/Dialog/useDialog"
import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import Main from "@/components/Main/Main"
import ClientComponent from "@/components/ClientComponent/ClientComponent"
import useAPI from "@/hooks/useAPI"
import ProviderComponent from "@/components/ProviderComponent/ProviderComponent"

export default function Home() {
    const { app, setApp } = useAPI()
    const { open, setOpen } = useDialog()
    console.log("app: ", app)
    return (
        <>
            <main className="flex min-h-screen flex-col items-center justify-between">
                <Header app={app} setApp={setApp} setOpen={setOpen} open={open} />
                {app.currentUser === 0 && <Main setApp={setApp} open={open} setOpen={setOpen} />}
                {app.currentUser === 1 && <ClientComponent setApp={setApp} app={app} />}
                {app.currentUser === 2 && <ProviderComponent setApp={setApp} app={app} />}
                <Footer setApp={setApp} app={app} setOpen={setOpen} open={open} />
            </main>
            <DialogComponent app={app} setOpen={setOpen} open={open} setApp={setApp} />
        </>
    )
}
