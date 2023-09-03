import React from "react";
import Link from "next/link";

const Home = () => {
    return (
        <div className="flex flex-col p-24">
            <div className="mx-auto max-w-screen-xl px-4 py-32">
                <div className="mx-auto max-w-2xl text-center">
                    <h1 className="text-3xl font-extrabold sm:text-5xl">
                        User Authentication With

                        <strong className="font-extrabold my-2 text-purple-700 sm:block">
                            Clerk Authentication Next.JS
                        </strong>
                    </h1>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <Link href="/protect" className="block w-full rounded bg-purple-700 px-12 py-3 text-sm font-medium text-white shadow hover:bg-purple-800 focus:outline-none focus:ring active:bg-purple-500 sm:w-auto">
                            Go To Protected Page
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Home;