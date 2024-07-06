import { NuxtAuthHandler } from "#auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { axiosInstance } from "~/lib/axios-custom";

export default NuxtAuthHandler({
  secret: "process.env.NEXTAUTH_URL",
  pages: {
    signIn: "/authentication/login",
    signOut: "/",
    error: "/authentication/login",
  },
  providers: [
    CredentialsProvider.default({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Enter your email address",
        },
        password: {
          type: "password",
          label: "Password",
          placeholder: "Enter your password",
        },
      },
      authorize: async (credentials, request) => {
        const { email, password } = credentials ?? {};
        const response = await axiosInstance.post("/auth/login", {
          email,
          password,
        });
        console.log("Response: ", response);
        if (response.status === 201 && response.data?.token) {
          const resData = response.data;
          const user = {
            id: resData?.data?._id,
            email: resData?.data?.email,
            name: resData?.data?.name,
            role: resData?.data?.role?.name,
            token: resData?.token,
          };
          return Promise.resolve(user);
        }
        return Promise.reject(null);
      },
    }),
  ],
  callbacks: {
    session: async ({ session, token }) => {
      if (session?.user) {
        session.user.id = token?.sub;
        session.user.token = token?.token;
        session.user.role = token.role;
      }
      return session;
    },
    jwt: async ({ user, token }) => {
      if (user) {
        token.uid = user.id;
        token.token = user.token;
        token.role = user.role;
      }
      return token;
    },
  },
  session: {
    strategy: "jwt",
  },
});
