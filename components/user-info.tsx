// server component
// client component

import { ExtendedUser } from "@/next-auth";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
Badge;

interface UserInfoProps {
  user?: ExtendedUser;
  label: string;
}

export const UserInfo = ({ label, user }: UserInfoProps) => {
  return (
    <Card className="w-[600px] shadow-md">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">{label}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <UserInfoItem label="ID" value={user?.id} />
        <UserInfoItem label="Name" value={user?.name} />
        <UserInfoItem label="Email" value={user?.email} />
        <UserInfoItem label="Role" value={user?.role} />
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
          <p className="text-sm font-medium">Two Factor Authentication</p>
          <Badge variant={user?.isTwoFactorEnabled ? "success" : "destructive"}>
            {user?.isTwoFactorEnabled ? "ON" : "OFF"}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

const UserInfoItem = ({
  label,
  value,
}: {
  label: string;
  value?: string | null;
}) => {
  return (
    <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
      <p className="text-sm font-medium">{label}</p>
      <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 rounded-md">
        {value || "-"}
      </p>
    </div>
  );
};
