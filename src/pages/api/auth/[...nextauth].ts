import jwt from 'jwt-decode';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import {authenticate} from '@services/auth';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        if (credentials) {
          try {
            const {token, user} = await authenticate(credentials);
            if (token) {
              return {
                token,
                user,
              };
            }
          } catch (error) {
            return null;
          }
        }

        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,

  session: {
    // Seconds - How long until an idle session expires and is no longer valid.
    maxAge: 60 * 60 * 24, // 24 hours
  },

  callbacks: {
    async jwt({token, user}) {
      if (user) {
        token.user = user.user;
        token.jwt = user.token;
      }
      return token;
    },
    async session({session, token}) {
      if (token.jwt) {
        session.jwt = token.jwt;
        session.user = token.user;
      }
      return session;
    },

    // session.expires = session.expires;
  },
});
