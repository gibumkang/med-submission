import { meta } from "@/utils/meta"
import { Typography } from "@material-tailwind/react"
import Image from "next/image"
import { FooterProps } from "./Footer.types"
import { ACTIONS, User } from "@/hooks/hooks.types"

const Footer: React.FC<FooterProps> = (props) => {
    const { app, setOpen, setApp, open } = props
    const year = new Date().getFullYear()

    const logInHandler = () => {
        setOpen(!open)
        setApp({ type: ACTIONS.REQUEST, user: User.provider })
    }

    return (
        <footer className="w-full bg-white p-8">
            <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
                <Image src={"/logo.png"} width="80" height="44" alt="logo-ct" className="w-20" />
                <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                    <li>
                        <Typography
                            as="a"
                            href="#"
                            color="blue-gray"
                            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                        >
                            About Us
                        </Typography>
                    </li>
                    <li>
                        <Typography
                            as="a"
                            href="#"
                            color="blue-gray"
                            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                        >
                            License
                        </Typography>
                    </li>
                    <li>
                        <Typography
                            as="a"
                            href="#"
                            color="blue-gray"
                            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                        >
                            Contribute
                        </Typography>
                    </li>
                    {app.currentUser === 0 ? (
                        <li>
                            <Typography
                                as="a"
                                href="#"
                                color="blue-gray"
                                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                                onClick={() => logInHandler()}
                            >
                                Provider Login
                            </Typography>
                        </li>
                    ) : null}
                </ul>
            </div>
            <hr className="my-8 border-blue-gray-50" />
            <Typography color="blue-gray" className="text-center font-normal">
                &copy; {year}. {meta.name}
            </Typography>
        </footer>
    )
}

export default Footer
