import User from "@/Component/User";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

const Protect = () => {
    return (
        <div className="flex flex-col">
            <header className="my-4 mx-12 border-b-2">
                <div className="mx-auto flex my-6 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl mr-3">
                        Logo
                    </h1>

                    <div className="flex flex-1 items-center justify-end md:justify-between">
                        <nav aria-label="Global" className="hidden md:block">
                            <ul className="flex items-center gap-8 text-md">
                                <li>
                                    <Link
                                        className="text-gray-300 transition hover:text-gray-500/75"
                                        href="/">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-gray-300 transition hover:text-gray-500/75"
                                        href="/">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-gray-300 transition hover:text-gray-500/75"
                                        href="/">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </nav>

                        <div className="flex items-center gap-4">
                            <UserButton afterSignOutUrl="/" />
                        </div>
                    </div>
                </div>
            </header>

            <div>
                <User />
            </div>
        </div>
    )
}

export default Protect;