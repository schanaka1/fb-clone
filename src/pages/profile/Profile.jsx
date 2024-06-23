import './profile.css'
import Feed from "../../components/feed/Feed"
import Right from "../../components/rigthbar/Right"
import Sidebar from "../../components/sidebar/Sidebar"
import Topbar from "../../components/topbar/topbar"
export default function Profile() {
  return (
    <>
      <Topbar/>
       <div className="profile">
        <Sidebar/>
        <div className="profileRight">
            <div className="profileRightTop">
              <div className="profileCover">
                <img src="../assets/post/2.jpg" alt="" className="profileCoverImg" />
                <img src="../assets/person/1.jpg" alt="" className="profileUserImg" />
              </div>
              <div className="profileInfo">
                <h4 className="profileInfoName">john kater</h4>
                <span className="profileInfoDesc">Hello my friends</span>
              </div>
              
            </div>
            <div className="profilrRightBottom">
                <Feed/>
                <Right profile/>
            </div>
        </div>
      </div>
    </>
  );
}
