import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectDB } from "@/lib/db";
import User from "@/lib/userModel";
import { compare } from "bcryptjs";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "text",
                },
                password: {
                    label: "Password",
                    type: "passord"
                }
            },
            async authorize(credentials) {

                const email = credentials?.email;

                const password = credentials!.password;

                await connectDB().catch(err => { throw new Error(err) });

                const user = await User.findOne({ email });

                if (!user) {

                    throw new Error("Invalid Credentials");

                }

                const isPasswordCorrect = await compare(password, user.password);

                if (!isPasswordCorrect) {

                    throw new Error("Invalid Credentials");

                }

                return user;

            }
        })
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/",
    }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };