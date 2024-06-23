import "./Home.css"
import Feed from "../../components/feed/Feed"
import Right from "../../components/rigthbar/Right"
import Sidebar from "../../components/sidebar/Sidebar"
import Topbar from "../../components/topbar/topbar"
export const Home = () => {
  return (
    <div>
       <Topbar/>
       <div className="homeContaineer">
        <Sidebar/>
        <Feed/>
        <Right/>
       </div>
       
    </div>
  )
}
