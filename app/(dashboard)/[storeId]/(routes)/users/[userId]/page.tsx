import prismadb from "@/lib/prismadb";

import { UsersForm } from "./components/user-form";

const UserPage = async ({
  params
}: {
  params: { UserId: string }
}) => {
  const users = await prismadb.users.findUnique({
    where: {
      id: params.UserId
    }
  });

  return ( 
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <UsersForm initialData={users} />
      </div>
    </div>
  );
}

export default UserPage;
