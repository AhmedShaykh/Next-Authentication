import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { IUser } from "../../Types";
import { connectDB } from "./db";
import User from "./userModel";
import { compare } from "bcryptjs";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {

                await connectDB().catch(err => { throw new Error(err) });

                const user = await User.findOne({
                    email: credentials?.email
                }).select("+password");

                if (!user) {

                    throw new Error("Invalid Credentials");

                }

                const isPasswordCorrect = await compare(credentials!.password, user.password);

                if (!isPasswordCorrect) {

                    throw new Error("Invalid Credentials");

                }

                return user;
            }
        })
    ],
    pages: {
        signIn: "/"
    },
    jwt: {
        secret: process.env.NEXTAUTH_JWT_SECRET,
    },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        jwt: async ({ token, user }) => {

            user && (token.user = user);

            return token;

        },
        session: async ({ session, token }) => {

            const user = token.user as IUser;

            session.user = user;

            return session;

        }
    }
};