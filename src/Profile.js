import React from 'react'
import './userprofile.css'
import userupload from './images/user-upload-image.jpeg';
import userimage from './images/user-image.png';
import userupload2 from './images/user-upload2-image.jpeg';
import { faCheck, faTable, faTv, faUser, faHeart, faComment, faCaretDown, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Profile() {
    return (
        <div>
            <main>
                <section className="bio">
                    <div className="bio__img-block">
                        <a href="/">
                            <img className="bio__img" src={userimage} alt="Christopher"/>
                        </a>
                    </div>
                    <div className="bio__header">
                        <h1 className="bio__account">Christopher</h1>
                            <span title="Verified" className="bio__verified">
                                <FontAwesomeIcon icon={faCheck} className="verified"/>
                            </span>
                            {/* IF you already Follow him */}
                            {/* <button className="bio__following">Following</button>
                            <button className="bio__suggestfollowed"><FontAwesomeIcon icon={faCaretDown}/></button> */}

                            <button className="bio__follow">Follow</button>
                            <button className="bio__suggest"><FontAwesomeIcon icon={faCaretDown}/></button>
                        <button className="bio__more"><FontAwesomeIcon icon={faEllipsisH}/></button>
                    </div>
                    <div className="bio__stats">
                        <span className="bio__posts stats"><strong>2</strong> posts</span>
                        <button className="bio__statsdialog"><span className="bio_followers stats"><strong>200</strong> followers</span></button>
                        <button className="bio__statsdialog"><span className="bio_followers stats"><strong>30</strong> following</span></button>
                    </div>
                    <div className="bio_blurb">
                        <h1 className="bio__name">Christopher</h1>
                        <p className="bio__description">caption caption</p>
                    </div>
                </section>
                <nav className="story">
                    <ul>
                        <li>
                            <a href="/">
                                <img src="https://www.fillmurray.com/77/77" alt="story with bill murray" />
                                <h2 className="storiesNames">KKW FRAGRANCE</h2>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <img src="https://baconmockup.com/77/77" alt="story with slab of bacon" />
                                <h2 className="storiesNames">SKIMS</h2>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                            <img src="https://www.fillmurray.com/150/150" alt="story" />
                            <h2 className="storiesNames">KKW BEAUTY</h2>
                        </a>
                        </li>
                    </ul>
                </nav>
                <nav className="mobile-stats">
                <ul>
                    <li className="mobile-stats__posts stats"><strong>2</strong><br/>posts</li>
                    <li className="mobile-stats_followers stats"><button><strong>200</strong><br/>followers</button></li>
                    <li className="mobile-stats__following stats"><button><strong>30</strong><br/>following</button></li>
                </ul>
                </nav>
                <section className="tabbed-pane">
                    <nav className="tabbed-pane__header">
                    <ul>
                        <li><a href="/" className="tab-link selected"><FontAwesomeIcon icon={faTable}/><span className="tab-link-text"> Posts</span></a></li>
                        <li><a href="/" className="tab-link"><FontAwesomeIcon icon={faTv}/><span className="tab-link-text"> IGTV</span></a></li>
                        <li><a href="/" className="tab-link"><FontAwesomeIcon icon={faUser}/><span className="tab-link-text"> Tagged</span></a></li>
                    </ul>
                    </nav>
                    <div className="tabbed-pane__posts">
                            <div className="gallery-item" tabIndex={1} key={1}>
                                <a href={`/p/${1}/`}>
                                <img src={userupload} className="gallery-image" alt="Christopher" />
                                <div className="gallery-item-info">
                                    <ul>
                                        {/* <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true"></i>{post.likes}</li> */}
                                        <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><FontAwesomeIcon icon={faHeart}/> 50</li>
                                        <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><FontAwesomeIcon icon={faComment}/> 2</li>
                                    </ul>
                                </div>
                                </a>
                            </div>
                            <div className="gallery-item" tabIndex={2} key={2}>
                                <a href={`/p/${2}/`}>
                                <img src={userupload2} className="gallery-image" alt="Christopher" />
                                <div className="gallery-item-info">
                                    <ul>
                                        {/* <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true"></i>{post.likes}</li> */}
                                        <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><FontAwesomeIcon icon={faHeart}/> 150</li>
                                        <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><FontAwesomeIcon icon={faComment}/> 40</li>
                                    </ul>
                                </div>
                                </a>
                            </div>
                    </div>
                    {/* <a href=""><img src="https://www.fillmurray.com/300/300" alt="bill murray post picture"/></a>
                    <a href=""><img src="https://baconmockup.com/300/300" alt="bacon post picture"/></a>
                    <a href=""><img src="https://www.fillmurray.com/400/400" alt="bill murray post picture"/></a>
                    <a href=""><img src="https://baconmockup.com/400/400" alt="bacon post picture"/></a>
                    <a href=""><img src="https://www.fillmurray.com/500/500" alt="bill murray post picture"/></a>
                    <a href=""><img src="https://baconmockup.com/800/800" alt="bacon post picture"/></a>
                    <a href=""><img src="https://www.fillmurray.com/600/600" alt="post picture"/></a>
                    <a href=""><img src="https://www.fillmurray.com/800/800" alt="bill murray post picture"/></a> */}
                    <div className="tabbed-pane__igtv">
                </div>
                <div className="tabbed-pane__tagged">
        
                </div>
                </section>
            </main>
            <footer className="site-footer">
                <nav className="navButtom">
                    <ul>
                        <li>
                        <a href="https://about.instagram.com/about-us" rel="nofollow noopener noreferrer" target="_blank">About</a>
                        </li>
                        <li>
                        <a href="https://help.instagram.com/">Help</a>
                        </li>
                        <li>
                        <a href="https://instagram-press.com/">Press</a>
                        </li>
                        <li><a href="/developer/">API</a></li>
                        <li><a href="/about/jobs/">Jobs</a></li>
                        <li>
                        <a href="/legal/privacy/">Privacy</a>
                        </li>
                        <li>
                        <a href="/legal/terms/">Terms</a>
                        </li>
                        <li>
                        <a href="/explore/locations/">Locations</a>
                        </li>
                        <li>
                        <a href="/directory/profiles/">Top Accounts</a>
                        </li>
                        <li>
                        <a href="/directory/suggested/kimkardashian">Suggested Accounts</a>
                        </li>
                        <li>
                        <a href="/directory/hashtags/">Hashtags</a>
                        </li>
                        <li>
                            <span className="site-footer__language">Language
                                <select aria-label="Switch Display Language">
                                    <option value="af">Afrikaans</option>
                                    <option value="cs">??e??tina</option>
                                    <option value="da">Dansk</option>
                                    <option value="de">Deutsch</option>
                                    <option value="el">????????????????</option>
                                    <option value="en">English</option>
                                    <option value="es">Espa??ol (Espa??a)</option>
                                    <option value="es-la">Espa??ol</option>
                                    <option value="fi">Suomi</option>
                                    <option value="fr">Fran??ais</option>
                                    <option value="id">Bahasa Indonesia</option>
                                    <option value="it">Italiano</option>
                                    <option value="ja">?????????</option>
                                    <option value="ko">?????????</option>
                                    <option value="ms">Bahasa Melayu</option>
                                    <option value="nb">Norsk</option>
                                    <option value="nl">Nederlands</option>
                                    <option value="pl">Polski</option>
                                    <option value="pt-br">Portugu??s (Brasil)</option>
                                    <option value="pt">Portugu??s (Portugal)</option>
                                    <option value="ru">??????????????</option>
                                    <option value="sv">Svenska</option>
                                    <option value="th">?????????????????????</option>
                                    <option value="tl">Filipino</option>
                                    <option value="tr">T??rk??e</option>
                                    <option value="zh-cn">??????(??????)</option>
                                    <option value="zh-tw">??????(??????)</option>
                                    <option value="bn">???????????????</option>
                                    <option value="gu">?????????????????????</option>
                                    <option value="hi">??????????????????</option>
                                    <option value="hr">Hrvatski</option>
                                    <option value="hu">Magyar</option>
                                    <option value="kn">???????????????</option>
                                    <option value="ml">??????????????????</option>
                                    <option value="mr">???????????????</option>
                                    <option value="ne">??????????????????</option>
                                    <option value="pa">??????????????????</option>
                                    <option value="si">???????????????</option>
                                    <option value="sk">Sloven??ina</option>
                                    <option value="ta">???????????????</option>
                                    <option value="te">??????????????????</option>
                                    <option value="vi">Ti???ng Vi???t</option>
                                    <option value="zh-hk">??????(??????)</option>
                                    <option value="bg">??????????????????</option>
                                    <option value="fr-ca">Fran??ais (Canada)</option>
                                    <option value="ro">Rom??n??</option>
                                    <option value="sr">????????????</option>
                                    <option value="uk">????????????????????</option>
                                </select>
                            </span>
                        </li>
                    </ul>
                </nav>
                <span className="copyright">?? 2020 Instagram Clone from Guyh</span>
            </footer>
        </div>
    )
}

export default Profile
