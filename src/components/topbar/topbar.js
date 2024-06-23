import "./topbar.css"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';

export default function topbar() {
  return (
    <div className="topbarContainer">
        <div className="topbarLeft">
            <span className="logo">facebook</span>
        </div>
        <div className="topbarCenter">
            <SearchIcon/>
            <input type="text" className="searchInput" placeholder="Search for friend, post or video" />
        </div>
        <div className="topbarRight">
            <div className="topbarLinks">
                <span className="topbarLink">Homepage</span>
                <span className="topbarLink">Timeline</span>
            </div>
            <div className="topbarIcons">
                <div className="topbarIconeItem">
                    <PersonIcon/>
                    <span className="topbarIconBadge">1</span>
                </div>
                <div className="topbarIconeItem">
                    <ChatIcon/>
                    <span className="topbarIconBadge">3</span>
                </div>
                <div className="topbarIconeItem">
                    <CircleNotificationsIcon/>
                    <span className="topbarIconBadge">7</span>
                </div>
            </div>
            <img src="/assets/person/1.jpg" alt="" className="topBarImg" />
        </div>
    </div>
  )
}
