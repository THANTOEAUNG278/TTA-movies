import { Outlet} from "react-router-dom"
import Navigate from "./Navigate";
const Layout =()=>{
  return(
    <div>
      <div>
        <div>
          <Navigate/>
        </div>
      </div>
      <Outlet/>
    </div>
  )
}
export default Layout;