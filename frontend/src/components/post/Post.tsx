import "./post.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faCalendarDays, faUser, faGlassCheers } from '@fortawesome/free-solid-svg-icons'



export default function Post() {

  return (
    <div className="post">
        <div className="postTop">
                <div className="postTopDate">
                  <span className="postDay">16</span>
                  <span className="postMonth">Maj</span>
                </div>
                <div className="postUser">
                  <div className="postUserIcon"></div>
                  <div className="postUserName">Ophelia Doyle</div>
                </div>
        </div>
        <div className="postBot">
            <div className="postCategory">
              <span>Impreza <FontAwesomeIcon icon={faGlassCheers} /></span>
            </div>
            <div className="postTitle">Veniam voluptatem rerum similique facilis
                              voluptatem vel fuga consectetur vel fuga x...</div>
            <div className="postDetails">
                <div className="postDetailWrap"><FontAwesomeIcon icon={faLocationDot} /> <span className="PostDetailsContent">Gdańsk, Jakaś Tam Miejscówa</span></div>
                <div className="postDetailWrap"><FontAwesomeIcon icon={faCalendarDays} /> <span className="PostDetailsContent"> 16.05.2022r.</span></div>
                <div className="postDetailWrap"><FontAwesomeIcon icon={faUser} /> <span className="PostDetailsContent"> 2/4</span></div>
            </div>
            <button className="postBtn gradient-border-bg">Więcej</button>
        </div>
    </div>
  );
}
