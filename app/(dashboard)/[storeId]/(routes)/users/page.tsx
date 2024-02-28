import { format } from "date-fns";

import prismadb from "@/lib/prismadb";

import { UsersClient } from "./components/client";
import { UserColumn } from "./components/columns";

const UserPage = async ({
  params
}: {
  params: { storeId: string }
}) => {

 const users=await prismadb.users.findMany({
  where: {
    UserId: params.storeId
  },
  orderBy: {
    createdAt: 'desc'
  }
});

  const formattedUsers: UserColumn[] = users.map((item) => ({
    id: item.UserId,
    name: item.name,
    createdAt: format(item.createdAt, 'MMMM do, yyyy'),
    approved: item.IsApproved,
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <UsersClient data={formattedUsers} />
      </div>
    </div>
  );
};

export default UserPage;
