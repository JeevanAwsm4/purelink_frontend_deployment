import React, { useEffect , useState, useContext} from 'react';
import { NavLink } from 'react-router-dom';
import './../screens/Dashboard.css';
import { UserContext } from '../../App';


export default function Nav() {
    const {userData,updateUserData} = useContext(UserContext)

    const handleLogout = () => {
        updateUserData({type:"LOGOUT"})
    }


  useEffect(() => {
    const link = document.querySelector('.hover');
    const aside = document.querySelector('.aside');
    const circle = document.querySelector('.circle');

      link.addEventListener('mouseover', () => {
        aside.classList.add('active');
      });
      link.addEventListener('mouseout', () => {
        aside.classList.remove('active');
      });
    return () => {
        link.removeEventListener('mouseover', () => {
          aside.classList.add('active');
        });

        link.removeEventListener('mouseout', () => {
          aside.classList.remove('active');
        });
    };
  }, []);

  return (
    <>
      <div className='aside mb-active'>
        <h1 className='img'>
          <img src={require("./../assets/main-page-images/hero/pureLink.svg").default} alt="images" />
        </h1>
        <div className="logos hover">
          <nav>
            <ul>
                <li>
                    <NavLink className={({isActive}) => isActive ? "active" : ""} to='dash'>
                      <img src={require("./../assets/images/dhash-nav/dash-logo.png")} alt="icon" />
                      <p>Dashboard</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => isActive ? "active" : ""} to='notification'>
                      <img src={require("./../assets/images/dhash-nav/notification.png")} alt="icon" />
                      <p>Notification</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => isActive ? "active" : ""} to='hospital-notification'>
                      <img src={require("./../assets/images/dhash-nav/hospital-requests.png")} alt="icon" />
                      <p>Hospital Request</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => isActive ? "active" : ""} to='../../want-blood'>
                      <img src={require("./../assets/images/dhash-nav/blood.png")} alt="icon" />
                      <p>Want Blood</p> 
                    </NavLink>
                </li>
            </ul>
          </nav>
          <NavLink to='../../' onClick={handleLogout} className="log-out">
            <img src={require("./../assets/images/dhash-nav/log-out.svg").default} alt="" />
            <p>Log Out</p>
          </NavLink>
        </div>
      </div>


      <div className="mb-bottom-aside">
        <nav>
          <ul>
            <li>
              <NavLink className={({isActive}) => isActive ? "active" : ""} to='../notification'>
                <img src={require("./../assets/images/dhash-nav/notification.png")} alt="icon" />
       
              </NavLink>
            </li>
            <li>
              <NavLink className={({isActive}) => isActive ? "active" : ""} to='../../want-blood'>
                <img src={require("./../assets/images/dhash-nav/blood.png")} alt="icon" />
          
              </NavLink>
            </li>
            <li>
              <NavLink className={({isActive}) => isActive ? "active" : ""} to='../dash'>
                <img src={require("./../assets/images/dhash-nav/dash-logo.png")} className='' alt="icon" />
                
              </NavLink>
            </li>
            <li>
              <NavLink className={({isActive}) => isActive ? "active" : ""} to='../hospital-notification'>
                <img src={require("./../assets/images/dhash-nav/hospital-requests.png")} className='' alt="icon" />
                
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleLogout} className="log-out mobilelog" to=''>
                <img src={require("./../assets/images/dhash-nav/log-out.svg").default} alt="icon" />
            
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}
