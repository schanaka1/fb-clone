import "./share.css"
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import RoomIcon from '@mui/icons-material/Room';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';

export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets/person/1.jpg" alt="" />
          <input 
            type="text" 
            placeholder="What's on your mind" 
            className="shareInput"/>
        </div>
        <hr className="shareHr"/>

        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMediaIcon htmlColor="tomato" className="shareIcon"/>
              <span className="shareOptionText">Photo or Video</span>
            </div>
            <div className="shareOption">
              <LabelIcon htmlColor="blue" className="shareIcon"/>
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <RoomIcon htmlColor="green" className="shareIcon"/>
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiFlagsIcon htmlColor="goldenrod" className="shareIcon"/>
              <span className="shareOptionText">Feeling</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  )
}
