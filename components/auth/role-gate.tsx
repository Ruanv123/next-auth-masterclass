"use client";

import { useCurrentRole } from "@/hooks/use-current-role";
import { FormError } from "@/components/form-error";

interface RoleGateProps {
  allowedRole: string;
  children: React.ReactNode;
}

export const RoleGate = ({ allowedRole, children }: RoleGateProps) => {
  const role = useCurrentRole();

  if (role !== allowedRole) {
    return (
      <FormError message="You do not have permission to view this content!" />
    );
  }

  return <>{children}</>;
};
