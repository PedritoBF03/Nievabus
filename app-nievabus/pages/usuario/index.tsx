
import { NextPage } from "next"
import { PublicLayouts } from "../../layouts/PublicLayouts"
import { UserLayouts } from '../../layouts/UserLayouts';
// import SidebarLayout from "../../layouts/SidebarLayout";

 
//NextPage --> indica que es un proyecto Next y no Reac
const indexPage: NextPage = () => {
  

  return (
    <UserLayouts>
    {/* <SidebarLayout> */}
      <h1>Usuario Nievabus </h1>
      {/* </SidebarLayout> */}
    </UserLayouts>
  )
}

export default indexPage