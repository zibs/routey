import { useRouter, useSegments } from "expo-router";
import React, { PropsWithChildren, useContext } from "react";

type User = {} | null;

type AuthContextProvider = {
  signIn: () => void;
  signOut: () => void;
  user: User;
};

const AuthContext = React.createContext<
  | {
      signIn: () => void;
      signOut: () => void;
      user: User;
    }
  | undefined
>(undefined);

// This hook can be used to access the user info.
export function useAuth(): AuthContextProvider {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error(
      "useScreenA11yContext must be used within a ScreenA11yProvider"
    );
  }
  return context;
}

// This hook will protect the route access based on user authentication.
function useProtectedRoute(user: User) {
  const segments = useSegments();
  const router = useRouter();

  React.useEffect(() => {
    const isInVegetableTab = segments.includes("(vegetable)");
    console.log("segments", segments, isInVegetableTab);

    if (
      // If the user is not signed in and the initial segment is not anything in the auth group.
      !user &&
      isInVegetableTab
    ) {
      // Redirect to the sign-in page.
      router.replace("/sign-in");
    } else if (user && isInVegetableTab) {
      // they are logged in, so it's okay.
    }
  }, [user, segments]);
}

export function Provider(props: PropsWithChildren) {
  const [user, setAuth] = React.useState<User>(null);

  useProtectedRoute(user);

  return (
    <AuthContext.Provider
      value={{
        signIn: () => setAuth({}),
        signOut: () => setAuth(null),
        user,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
