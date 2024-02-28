import { format } from "date-fns";

import prismadb from "@/lib/prismadb";

import { CategoriesClient } from "./components/client";
import { CategoryColumn } from "./components/columns";

const CategoriesPage = async ({
  params
}: {
  params: { storeId: string }
}) => {
  const categories = await prismadb.category.findMany({
    where: {
      storeId: params.storeId
    },
  
    orderBy: {
      createdAt: 'desc'
    }
  });
  //  async function pushToDb( ) {
  //   let catArr=[
  //     {"name":"ACP"
  //     },
  //     {"name":"PVDF"
  //     },
  //     {"name":"FR"
  //     },
  //     {"name":"Acrylic"
  //     },
  //     {"name":"pc solid color"
  //     },
  //     {"name":"PVC"
  //     },
  //     {"name":"דבקים וסיליקון"
  //     },
  //     {"name":"פרופילים"
  //     },
  //     {"name":"קאפה"
  //     },
  //     {"name":"מוצרים משלימים"
  //     },
  //     {"name":"קטלוג צבעים"
  //     }
  //       ]
    
    
    
    
  //     for(let i=0;i<catArr.length;i++) {
  //   let name=catArr[i].name
  //   // let value=sizeArr[i].value
  //       await prismadb.category.createMany({
  //         data:{   name,

    
  //         storeId: params.storeId
  //         }
  //       })}
  //     //  console.log( sizeArr) 
  //     // Insert data 
     
    
     
    
  //   }
  //   pushToDb()
  //   .catch(e => {
  //     console.error(e)
  //   })
  //   .finally(async () => {
  //     await prismadb.$disconnect() 
  //   })
  const formattedCategories: CategoryColumn[] = categories.map((item) => ({
    id: item.id,
    name: item.name,
    // billboardLabel: item.billboard.,
    createdAt: format(item.createdAt, 'MMMM do, yyyy'),
  }));
 

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <CategoriesClient data={formattedCategories} />
      </div>
    </div>
  );
};

export default CategoriesPage;
