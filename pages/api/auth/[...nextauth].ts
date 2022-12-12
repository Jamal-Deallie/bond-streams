// @ts-nocheck
import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import type { NextApiRequest, NextApiResponse } from 'next';
import { signIn } from '@/src/services/auth';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        console.log({ credentials: credentials, req: req });
        if (credentials == null) return null;
        // Add logic here to look up the user from the credentials supplied
        // const user = { id: '1', name: 'J Smith', email: 'jsmith@example.com' };

        // Any object returned will be saved in `user` property of the JWT
        try {
          const { user, jwt } = await signIn({
            email: credentials.email,
            password: credentials.password,
          });
          console.log({ ...user, jwt: jwt });
          return { ...user, jwt };
        } catch (error) {
          // Sign In Fail
          return null;
        }
      },
    }),
  ],
  database: process.env.NEXT_PUBLIC_DATABASE_URL,
  session: { strategy: 'jwt' },
  callbacks: {
    session: async (req: NextApiRequest, res: NextApiResponse) => {
      console.log('session');
      console.log({ sessionReq: req, sessionRes: res });
      const { user, token, session } = req;
      session.jwt = token.jwt;
      session.id = token.id;
      return Promise.resolve(session);
    },

    jwt: async (req: NextApiRequest, res: NextApiResponse) => {
      const { token, user, account } = req;
      const secret = process.env.NEXTAUTH_SECRET;
      console.log({ jwtReq: req });
      const isSignIn = user ? true : false;

      if (isSignIn) {
        token.jwt = user.jwt;
        token.id = user.id;
        console.log({ account: account.provider });
        console.log({ token: token });
      }

      return Promise.resolve(token);
    },
    pages: {
      signIn: '/signin',
    },
  },
};
// console.log(authOptions);

export default NextAuth(authOptions);
