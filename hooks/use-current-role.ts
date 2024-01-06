import { useSession } from "next-auth/react";

// client side functions
export const useCurrentRole = () => {
  const session = useSession();

  return session.data?.user.role;
};
