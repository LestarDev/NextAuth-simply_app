import NextAuth from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";



export default NextAuth({
    providers: [
        Auth0Provider({
            // @ts-ignore
            clientId: process.env.AUTH0_CLIENT_ID,
            // @ts-ignore
            clientSecret: process.env.AUTH0_CLIENT_SECRET,
            // @ts-ignore
            domain: process.env.AUTH0_DOMAIN,
        })
    ]
})