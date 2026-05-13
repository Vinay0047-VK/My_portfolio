import profilepic from "./assets/profilepic.jpg";
import React, { useState, useEffect } from 'react';

const Card =()=>{

  const [isSidebar, setIsSidebar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Change to sidebar after 150px of scrolling
      if (window.scrollY > 150) {
        setIsSidebar(true);
      } else {
        setIsSidebar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    return(
        <div className={isSidebar? 'card' : 'card-change'}>
            <img className='prof-pic' src={profilepic} alt="profile-pic" />
            <h2 className="my-name">Vinay Kumar N</h2>
            <p className="descrip">Card Description</p>
        </div>
    )
}
export default Card;