import NextAuth from "next-auth";
import Providers from "next-auth/providers";



const options = {
    providers: [
        Providers.GitHub({
            clientId: "",
            clienttSecret: ""
        }),
        Providers.Twitter({
            clientId: "",
            clienttSecret: ""
        }),
        Providers.Email({
            server: {
                host: "",
                port: "",
                auth: {
                    user: "",
                    pass: ""
                }
            },
            from: "",
        })
    ]
}