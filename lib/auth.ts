import { auth } from "@/auth";
import { assert } from "console";

export const currentUser = async () => {
  const session = await auth();

  return session?.user;
};

// server side functions
export const currentRole = async () => {
  const session = await auth();

  return session?.user?.role;
};
