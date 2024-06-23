import "./online.css"

export default function Online({user}) {
  return (
    <li className="rightbarFriend">
        <div className="profileName">
            <img src= {user.profilePicture} alt="" className="rightbarProfile" />
            {/*<span className="rightbarOnline"></span>*/}
        </div>
        <span className="rightbarName">{user.username}</span>
    </li>
  )
}
