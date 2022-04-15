/* eslint-disable no-unused-vars */
import {JWT} from 'next-auth/jwt';
import NextAuth from 'next-auth';

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: User;
    expires: string;
    jwt: string;
  }

  interface User {
    id: number;
    firstName: string;
    email: string;
    token: string;
  }
}

declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    user: User;
    jwt: string;
  }
}
