// "use client";
// import { SessionProvider } from "next-auth/react";
// import { getServerSession } from "next-auth";
// import { authOptions } from "@/lib/auth";

// const AuthProvider = async ({
//     children,
// }: {
//     children: React.ReactNode
// }) => {

//     const session = await getServerSession(authOptions);

//     return (
//         <SessionProvider session={session}>
//             {children}
//         </SessionProvider>
//     )
// };

// export default AuthProvider;