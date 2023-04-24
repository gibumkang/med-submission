import React from "react"
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar,
    Card,
    IconButton,
} from "@material-tailwind/react"
import {
    CubeTransparentIcon,
    UserCircleIcon,
    CodeBracketSquareIcon,
    ChevronDownIcon,
    InboxArrowDownIcon,
    LifebuoyIcon,
    PowerIcon,
    Bars2Icon,
} from "@heroicons/react/24/outline"
import Image from "next/image"
import { meta } from "@/utils/meta"
import { HeaderProps } from "./Header.types"
import { ACTIONS, User } from "@/hooks/hooks.types"

// profile menu component
const profileMenuItems = [
    {
        label: "My Profile",
        icon: UserCircleIcon,
    },
    {
        label: "Inbox",
        icon: InboxArrowDownIcon,
    },
    {
        label: "Help",
        icon: LifebuoyIcon,
    },
    {
        label: "Sign Out",
        icon: PowerIcon,
    },
]

const ProfileMenu: React.FC<HeaderProps> = (props) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)
    const closeMenu = () => setIsMenuOpen(false)
    const { open, app, setOpen, setApp } = props

    const logInHandler = () => {
        setOpen(!open)
        setApp({ type: ACTIONS.REQUEST, user: User.client })
    }
    return (
        <>
            {app.currentUser === 0 ? (
                <Button color="teal" className="lg:ml-auto rounded-3xl" onClick={() => logInHandler()}>
                    Sign In
                </Button>
            ) : (
                <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
                    <MenuHandler>
                        <Button
                            variant="text"
                            color="teal"
                            className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
                        >
                            <Avatar
                                variant="circular"
                                size="sm"
                                alt="Ben Smith"
                                className="border border-teal-800 p-0.5"
                                src={app.currentUser === 1 ? app.client.image : app.provider.image}
                            />
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""}`}
                            />
                        </Button>
                    </MenuHandler>
                    <MenuList className="p-1">
                        {profileMenuItems.map(({ label, icon }, key) => {
                            const isLastItem = key === profileMenuItems.length - 1
                            return (
                                <MenuItem
                                    key={label}
                                    onClick={() => (isLastItem ? setApp({ type: ACTIONS.LOG_OUT }) : closeMenu)}
                                    className={`flex items-center gap-2 rounded ${
                                        isLastItem ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10" : ""
                                    }`}
                                >
                                    {React.createElement(icon, {
                                        className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                                        strokeWidth: 2,
                                    })}
                                    <Typography
                                        as="span"
                                        variant="small"
                                        className="font-normal"
                                        color={isLastItem ? "red" : "inherit"}
                                    >
                                        {label}
                                    </Typography>
                                </MenuItem>
                            )
                        })}
                    </MenuList>
                </Menu>
            )}
        </>
    )
}

// nav list menu
const navListMenuItems = [
    {
        title: "@material-tailwind/html",
        description: "Learn how to use @material-tailwind/html, packed with rich components and widgets.",
    },
    {
        title: "@material-tailwind/react",
        description: "Learn how to use @material-tailwind/react, packed with rich components for React.",
    },
    {
        title: "Material Tailwind PRO",
        description: "A complete set of UI Elements for building faster websites in less time.",
    },
]

// nav list component
const navListItems = [
    {
        label: "Account",
        icon: UserCircleIcon,
    },
    {
        label: "About Us",
        icon: CubeTransparentIcon,
    },
    {
        label: "Contact",
        icon: CodeBracketSquareIcon,
    },
]

function NavList() {
    return (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
            {navListItems.map(({ label, icon }, key) => (
                <Typography key={label} as="a" href="#" variant="small" color="blue-gray" className="font-normal">
                    <MenuItem className="flex items-center gap-2 lg:rounded-full">
                        {React.createElement(icon, { className: "h-[18px] w-[18px]" })} {label}
                    </MenuItem>
                </Typography>
            ))}
        </ul>
    )
}

const ComplexNavbar: React.FC<HeaderProps> = (props) => {
    const [isNavOpen, setIsNavOpen] = React.useState(false)
    const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur)

    React.useEffect(() => {
        window.addEventListener("resize", () => window.innerWidth >= 960 && setIsNavOpen(false))
    }, [])

    return (
        <Navbar className="mx-auto w-full p-2 mt-5 lg:pl-6">
            <div className="relative mx-auto flex items-center text-blue-gray-900">
                <div className="absolute top-2/4 left-2/4 hidden -translate-x-2/4 -translate-y-2/4 lg:block">
                    <NavList />
                </div>
                <IconButton
                    size="sm"
                    color="blue-gray"
                    variant="text"
                    onClick={toggleIsNavOpen}
                    className="ml-auto mr-2 lg:hidden"
                >
                    <Bars2Icon className="h-6 w-6" />
                </IconButton>
                <ProfileMenu {...props} />
            </div>
            <MobileNav open={isNavOpen} className="overflow-scroll">
                <NavList />
            </MobileNav>
        </Navbar>
    )
}

export default ComplexNavbar
