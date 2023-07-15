import React from 'react'
import {Link} from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faFilePen, faArrowRightToBracket, faGraduationCap } from '@fortawesome/free-solid-svg-icons'



const Navbar = ({ isAuth }) => {
  return (
    <nav>
        <Link to="/">
          <FontAwesomeIcon icon={faHouse} />
          ホーム
        </Link>
        {!isAuth ? (
          <Link to="/login">
            <FontAwesomeIcon icon={faArrowRightToBracket} />
            ログイン
          </Link> 
        ):(
          <>
            <Link to="/createPost">
              <FontAwesomeIcon icon={faFilePen} />
              質問投稿
            </Link>
            <Link to="/studyRoom">
              <FontAwesomeIcon icon={faGraduationCap} />
              自習室
            </Link> 
            <Link to="/logout">
              <FontAwesomeIcon icon={faArrowRightToBracket} />
              ログアウト
            </Link> 
          </>
        )}
    </nav>
  )
};

export default Navbar;