import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

type Props = {
    children: React.ReactNode;
    session: Session | null;
};

const AuthProvider = ({ children, session }: Props) => {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
};

export default AuthProvider;