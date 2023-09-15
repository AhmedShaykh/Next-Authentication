import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username:",
                    type: "text",
                    placeholder: "Enter Your Username"
                },
                password: {
                    label: "Password:",
                    type: "password",
                    placeholder: "Enter Your Password"
                }
            },
            async authorize(credentials) {

                const user = { id: "1", name: "Ahmed", password: "music4" };

                if (credentials?.username === user.name && credentials?.password === user.password) {

                    return user;

                } else {

                    return null;

                }

            }
        })
    ]
};