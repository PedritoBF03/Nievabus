
import { NextPage } from "next"
import { PublicLayouts } from "../../layouts/PublicLayouts"
import { MainLayouts } from '../../layouts/MainLayouts';
// import SidebarLayout from "../../layouts/SidebarLayout";

 
//NextPage --> indica que es un proyecto Next y no Reac
const indexPage: NextPage = () => {
  

  return (
    <MainLayouts>
    {/* <SidebarLayout> */}
      <h1>Admin Nievabus </h1>
      {/* </SidebarLayout> */}
    </MainLayouts>
  )
}

export default indexPage