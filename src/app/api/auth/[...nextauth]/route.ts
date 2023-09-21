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

                await connectDB();

                const user = await User.findOne({
                    email: credentials?.email
                }).select("+password");

                if (!user) {

                    throw new Error("Invalid Email");

                }

                const isPasswordCorrect = await compare(credentials!.password, user.password);

                if (!isPasswordCorrect) {

                    throw new Error("Invalid Password");

                }

                return user;
            }
        })
    ],
    pages: {
        signIn: "/",
    },
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    jwt: {
        secret: process.env.NEXTAUTH_JWT_SECRET,
    }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };