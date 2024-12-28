interface SignInWithOAuthParams {
    provider: "github" | "google";
    providerAccountId: string;
    user: {
      email: string;
      image: string;
      firstName: string;
      lastName: string;
    };
  }

  interface AuthCredentials {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }

