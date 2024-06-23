import "./right.css"
import {Users} from "../../dummyData"
import Online from "../online/Online"
export default function Right({profile}) {

  const HomeRightbar = () => {
    return (
      <div className="rightbar">
        <div className="rightbarwrapper">
          <div className="bdContainer">
            <img src="../assets/bd.png" alt="" className="bdImg" />
            <span className="bfText">Happy Birthday</span>
          </div>
          <img src="../assets/bd1.jpg" alt="" className="rightbd" />
          <div className="rightBottom">
            <h4 className="rightbarTitle">online friend</h4>
            <ul className="friendList">
              {Users.map((u)=> (
                <Online key={u.id} user={u}/>
              ))}
              
            </ul>
          </div>
        </div>
      </div>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightInfor">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">New york</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">madrid</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">single</span>
          </div>
        </div>
        <div className="rightbarFollow">
          <div className="rightbarFollowing">
            <img src="../assets/person/1.jpg" alt="" className="rightFollowingImg" />
            <span className="rightFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src="../assets/person/2.jpg" alt="" className="rightFollowingImg" />
            <span className="rightFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src="../assets/person/3.jpg" alt="" className="rightFollowingImg" />
            <span className="rightFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src="../assets/person/4.jpg" alt="" className="rightFollowingImg" />
            <span className="rightFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src="../assets/person/5.jpg" alt="" className="rightFollowingImg" />
            <span className="rightFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src="../assets/person/6.jpg" alt="" className="rightFollowingImg" />
            <span className="rightFollowingName">John Carter</span>
          </div>
        </div>
      </>
    )
  }
  return (
    <div className="rightbar">
      <div className="rightbarwrapper">
        {profile ? <ProfileRightbar/> : <HomeRightbar/>}
      </div>
    </div>
  )
}
