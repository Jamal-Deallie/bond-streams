import 'next-auth/jwt';

// Read more at: https://next-auth.js.org/getting-started/typescript#module-augmentation

declare module 'next-auth/jwt' {
  interface JWT {
    userRole?: 'admin';
    token: string;
    id: string;
  
  }
}

declare module 'next-auth' {
  interface Session {
    token?: string;
    id?: string;
    jwt: string;
  }

}
