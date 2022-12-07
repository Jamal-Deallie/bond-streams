// @ts-nocheck
import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import type { NextApiRequest, NextApiResponse } from 'next';

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  database: process.env.NEXT_PUBLIC_DATABASE_URL,
  session: { strategy: 'jwt' },
  callbacks: {
    session: async (req: NextApiRequest, res: NextApiResponse) => {
      // console.log({ session: req });
      const { user, token, session } = req;
      session.jwt = token.jwt;
      session.id = token.id;
      return Promise.resolve(session);
    },

    jwt: async (req: NextApiRequest, res: NextApiResponse) => {
      
      const { token, user, account } = req;
      const secret = process.env.NEXTAUTH_SECRET;
      // console.log({ account: account });
      const isSignIn = user ? true : false;
      if (isSignIn) {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/auth/${account.provider}/callback?access_token=${account?.access_token}`
        );
        const data = await response.json();
        // console.log({ data: response });
        token.jwt = data.jwt;
        token.id = data.user.id;
      }
      return Promise.resolve(token);

    },
    pages:{
      signIn: '/signin'
    }
  },
};
// console.log(authOptions);

export default NextAuth(authOptions);
