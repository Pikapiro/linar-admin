import { format } from "date-fns";

import prismadb from "@/lib/prismadb";

import { ColorClient } from "./components/client";
import { ColorColumn } from "./components/columns";

const ColorsPage = async ({
  params
}: {
  params: { storeId: string }
}) => {
  const colors = await prismadb.color.findMany({
    where: {

    },
    orderBy: {
      createdAt: 'desc'
    }
  });
  // async function pushToDb(arr ) {


  
  
  //   for(let i=0;i<arr.length;i++) {
 
  //     await prismadb.color.create({
  //       data:{...arr[i]} 
  //     })
  //    console.log( arr) }
  //   // Insert data 
   
  
   
  
  // }
  // pushToDb()
  // .catch(e => {
  //   console.error(e)
  // })
  // .finally(async () => {
  //   await prismadb.$disconnect() 
  // })

  const formattedColors: ColorColumn[] = colors.map((item) => ({
    id: item.id,
    name: item.name,
    hex: item.hex,
    number:item.number,
    createdAt: format(item.createdAt, 'MMMM do, yyyy'),
  }));
console.log(colors)
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ColorClient data={formattedColors} />
      </div>
    </div>
  );
};

export default ColorsPage;
