"use client";
import { SessionProvider } from "next-auth/react";

const Provider = ({ children }) => {
  const session = true;

  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default Provider;
