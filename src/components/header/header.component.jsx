import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { selectThemeSetting } from "../../redux/theme/theme.selector";
import { setThemeSetting } from "../../redux/theme/theme.action";
import { createStructuredSelector } from 'reselect';

const Header = ({ theme,setThemeSetting }) => {
    const [image, setImage] = useState();
    const [profileToggle,setProfileToggle] = useState(false);

    useEffect(() => {
        if (theme.theme_color === 'esrp-theme') {
            setImage('assets/images/esrp-logo.png');
        }
        if (theme.theme_color === 'light-theme') {
            setImage('assets/images/new-logo-light.png');
        }
        if (theme.theme_color === 'dark-theme') {
            setImage('assets/images/new-logo-dark.png');
        }
    }, [theme.theme_color]);

    return (
        <>
            <header className="header" id="siteHeader">
                <nav>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="header-logo-wrapper">
                                <a href="#!">
                                    <img src={`${image}`} alt="" />
                                </a>
                            </div>
                            <div className="header-search-wrapper">
                                <div className="search-bar">
                                    <input type="text" name="" id="" />
                                    <div className="header-search-icon">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.5233 11.4628L15.7355 14.6743L14.6743 15.7355L11.4628 12.5233C10.2678 13.4812 8.7815 14.0022 7.25 14C3.524 14 0.5 10.976 0.5 7.25C0.5 3.524 3.524 0.5 7.25 0.5C10.976 0.5 14 3.524 14 7.25C14.0022 8.7815 13.4812 10.2678 12.5233 11.4628ZM11.0188 10.9063C11.9706 9.92741 12.5022 8.61532 12.5 7.25C12.5 4.349 10.1503 2 7.25 2C4.349 2 2 4.349 2 7.25C2 10.1503 4.349 12.5 7.25 12.5C8.61532 12.5022 9.92741 11.9706 10.9063 11.0188L11.0188 10.9063V10.9063Z" fill="#A1A3D4" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="header-menu-wrapper">
                                <ul>
                                    <li className="active">
                                        <a href="#!">Dashboards</a>
                                    </li>
                                    <li>
                                        <a href="#!">Users</a>
                                    </li>
                                    <li>
                                        <a href="#!">Data Manager</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="header-user-wrapper">
                                <div className="profile">
                                    <a href="#!" onClick={()=> setProfileToggle(!profileToggle)}>
                                        <img src="assets/images/profile-img.png" alt="" />
                                    </a>
                                </div>
                            </div>
                            {/* <div className="header-user-wrapper">
                                <ul>
                                    <li>
                                        <a href="#!">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20 23H18V21C18 20.2044 17.6839 19.4413 17.1213 18.8787C16.5587 18.3161 15.7956 18 15 18H9C8.20435 18 7.44129 18.3161 6.87868 18.8787C6.31607 19.4413 6 20.2044 6 21V23H4V21C4 19.6739 4.52678 18.4021 5.46447 17.4645C6.40215 16.5268 7.67392 16 9 16H15C16.3261 16 17.5979 16.5268 18.5355 17.4645C19.4732 18.4021 20 19.6739 20 21V23ZM12 14C11.2121 14 10.4319 13.8448 9.7039 13.5433C8.97595 13.2417 8.31451 12.7998 7.75736 12.2426C7.20021 11.6855 6.75825 11.0241 6.45672 10.2961C6.15519 9.56815 6 8.78793 6 8C6 7.21207 6.15519 6.43185 6.45672 5.7039C6.75825 4.97595 7.20021 4.31451 7.75736 3.75736C8.31451 3.20021 8.97595 2.75825 9.7039 2.45672C10.4319 2.15519 11.2121 2 12 2C13.5913 2 15.1174 2.63214 16.2426 3.75736C17.3679 4.88258 18 6.4087 18 8C18 9.5913 17.3679 11.1174 16.2426 12.2426C15.1174 13.3679 13.5913 14 12 14ZM12 12C13.0609 12 14.0783 11.5786 14.8284 10.8284C15.5786 10.0783 16 9.06087 16 8C16 6.93913 15.5786 5.92172 14.8284 5.17157C14.0783 4.42143 13.0609 4 12 4C10.9391 4 9.92172 4.42143 9.17157 5.17157C8.42143 5.92172 8 6.93913 8 8C8 9.06087 8.42143 10.0783 9.17157 10.8284C9.92172 11.5786 10.9391 12 12 12Z" fill="#A1A3D4" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6.17 18.0025C6.3766 17.4169 6.75974 16.9099 7.2666 16.5512C7.77346 16.1926 8.37909 16 9 16C9.62091 16 10.2265 16.1926 10.7334 16.5512C11.2403 16.9099 11.6234 17.4169 11.83 18.0025H22V20.0025H11.83C11.6234 20.588 11.2403 21.095 10.7334 21.4537C10.2265 21.8123 9.62091 22.0049 9 22.0049C8.37909 22.0049 7.77346 21.8123 7.2666 21.4537C6.75974 21.095 6.3766 20.588 6.17 20.0025H2V18.0025H6.17ZM12.17 11.0025C12.3766 10.4169 12.7597 9.90988 13.2666 9.55124C13.7735 9.1926 14.3791 9 15 9C15.6209 9 16.2265 9.1926 16.7334 9.55124C17.2403 9.90988 17.6234 10.4169 17.83 11.0025H22V13.0025H17.83C17.6234 13.588 17.2403 14.095 16.7334 14.4537C16.2265 14.8123 15.6209 15.0049 15 15.0049C14.3791 15.0049 13.7735 14.8123 13.2666 14.4537C12.7597 14.095 12.3766 13.588 12.17 13.0025H2V11.0025H12.17ZM6.17 4.00245C6.3766 3.41692 6.75974 2.90988 7.2666 2.55124C7.77346 2.1926 8.37909 2 9 2C9.62091 2 10.2265 2.1926 10.7334 2.55124C11.2403 2.90988 11.6234 3.41692 11.83 4.00245H22V6.00245H11.83C11.6234 6.58798 11.2403 7.09502 10.7334 7.45366C10.2265 7.8123 9.62091 8.0049 9 8.0049C8.37909 8.0049 7.77346 7.8123 7.2666 7.45366C6.75974 7.09502 6.3766 6.58798 6.17 6.00245H2V4.00245H6.17ZM9 6.00245C9.26522 6.00245 9.51957 5.89709 9.70711 5.70956C9.89464 5.52202 10 5.26767 10 5.00245C10 4.73723 9.89464 4.48288 9.70711 4.29534C9.51957 4.10781 9.26522 4.00245 9 4.00245C8.73478 4.00245 8.48043 4.10781 8.29289 4.29534C8.10536 4.48288 8 4.73723 8 5.00245C8 5.26767 8.10536 5.52202 8.29289 5.70956C8.48043 5.89709 8.73478 6.00245 9 6.00245ZM15 13.0025C15.2652 13.0025 15.5196 12.8971 15.7071 12.7096C15.8946 12.522 16 12.2677 16 12.0025C16 11.7372 15.8946 11.4829 15.7071 11.2953C15.5196 11.1078 15.2652 11.0025 15 11.0025C14.7348 11.0025 14.4804 11.1078 14.2929 11.2953C14.1054 11.4829 14 11.7372 14 12.0025C14 12.2677 14.1054 12.522 14.2929 12.7096C14.4804 12.8971 14.7348 13.0025 15 13.0025ZM9 20.0025C9.26522 20.0025 9.51957 19.8971 9.70711 19.7096C9.89464 19.522 10 19.2677 10 19.0025C10 18.7372 9.89464 18.4829 9.70711 18.2953C9.51957 18.1078 9.26522 18.0025 9 18.0025C8.73478 18.0025 8.48043 18.1078 8.29289 18.2953C8.10536 18.4829 8 18.7372 8 19.0025C8 19.2677 8.10536 19.522 8.29289 19.7096C8.48043 19.8971 8.73478 20.0025 9 20.0025Z" fill="#A1A3D4" />
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div> */}
                        </div>
                    </div>
                </nav>
                {console.log({profileToggle})}

                <div className={`header-profile-box ${profileToggle ? "open" :""}`}>
                    <div className="header-profile-inner">
                        <div className="details header-profile-item">
                            <div className="profile-img">
                                <img src="assets/images/profile-img.png" alt="" />
                            </div>
                            <p className="title">Gregory Castillo</p>
                            <label className="caption">GregoryC@bluechip.com</label>
                            <button className="btn outline rounded">Manage your Profile</button>
                        </div>
                        <div className="profile-theme-toggle-wrap header-profile-item">
                            <div className="profile-theme-toggle">
                                <label className="body-2">Theme</label>

                                <div className="theme-toggle-switch">
                                    <input type="checkbox" onChange={e => {
                        if (e.target.checked) {
                            setThemeSetting({ theme_color: 'dark-theme' })

                        } else {
                            setThemeSetting({ theme_color: 'light-theme' })
                        }
                    }} checked={theme.theme_color === "dark-theme" ? true : false}/>
                                    <label></label>
                                    <img src="assets/images/switch-body-light.svg" className="light" alt="" />
                                    <img src="assets/images/switch-body-dark.svg" className="dark" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="profile-sign-out header-profile-item">
                            <button className="btn outline">Sign Out of Account</button>
                        </div>
                        <div className="policy header-profile-item">
                            <ul>
                                <li>
                                    <a href="#!" className="caption">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#!" className="caption">Terms of Service</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </header>
        </>
    );

}

const mapStateToProps = createStructuredSelector({
    theme: selectThemeSetting,
});

const mapDispatchToProps = (dispatch) => ({
    setThemeSetting: (theme) => dispatch(setThemeSetting(theme)),
});

export default connect(mapStateToProps,mapDispatchToProps)(Header);
