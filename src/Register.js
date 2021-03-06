import React, {useState} from 'react'
import { makeStyles, TextField } from '@material-ui/core';
import './register.css'

const useStyles = makeStyles((theme) => ({
    labelRoot: {
        marginLeft: 10
      },
    labelFocused: {},
    customError: {
        color: 'red',
        fontSize: '0.8rem',
        marginTop: 10
    }
}));

function Register() {
    const [fullname, setFullname] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState('');
    const classes = useStyles();
    const handleRegister = (event) => {
        event.preventDefault();
    }
    return (
        <div className="register__app">
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" />
            <div id="wrapper">
                <div className="container">
                    <div className="phone-app-demo"></div>
                    <div className="form-data">
                        <form action="" onSubmit={handleRegister}>
                            <div className="logo">
                                <h1 className="instaName">Instagram</h1>
                                <h2 className="policyLogo">Sign up to see photos and videos from your friends.</h2>
                            </div>
                            <div className="form-btn">
                                <a href="/" className="facebook-register">
                                    <i className="fab fa-facebook"></i> Log in with Facebook
                                </a>
                            </div>
                            <span className="has-separator">Or</span>
                            <TextField 
                                InputLabelProps={{classes: {root: classes.labelRoot,focused: classes.labelFocused}}} 
                                InputProps={{ disableUnderline: true }} 
                                id="email" name="email" label="Email" type="email" helperText={errors.email} error={errors.email ? true : false} 
                                value={email} onChange={(e) => setEmail(e.target.value)} fullWidth/>
                            <TextField 
                                InputLabelProps={{classes: {root: classes.labelRoot,focused: classes.labelFocused}}} 
                                InputProps={{ disableUnderline: true }} 
                                id="fullname" name="fullname" label="Full Name" type="text" helperText={errors.name} error={errors.name ? true : false} 
                                value={fullname} onChange={(e) => setFullname(e.target.value)} fullWidth/>
                            <TextField 
                                InputLabelProps={{classes: {root: classes.labelRoot,focused: classes.labelFocused}}} 
                                InputProps={{ disableUnderline: true }} 
                                id="username" name="username" label="Username" type="text" helperText={errors.handle} error={errors.handle ? true : false} 
                                value={username} onChange={(e) => setUsername(e.target.value)} fullWidth/>
                            <TextField InputLabelProps={{classes: {root: classes.labelRoot,focused: classes.labelFocused}}} 
                                InputProps={{ disableUnderline: true }} 
                                id="password" name="password" label="Password" type="password" helperText={errors.password} error={errors.password ? true : false} 
                                value={password} onChange={(e) => setPassword(e.target.value)} fullWidth/>
                            <TextField InputLabelProps={{classes: {root: classes.labelRoot,focused: classes.labelFocused}}} 
                                InputProps={{ disableUnderline: true }} 
                                id="confirmPassword" name="confirmPassword" label="Confirm Password" type="password" helperText={errors.confirmPassword} 
                                error={errors.confirmPassword ? true : false} value={confirmPassword} onChange={(e) => setconfirmPassword(e.target.value)} fullWidth/>
                            {errors.general}
                            <button className="form-btn" type="submit">Sign up</button>
                            <h2 className="policyLogo">By signing up, you agree to our Terms , Data Policy and Cookies Policy .</h2>
                        </form>
                        <div className="sign-up">
                            Have an account? <a href="">Log in</a>
                        </div>
                        <div className="get-the-app">
                            <span>Get the app</span>
                            <div className="badge">
                                <img className="badgeimg" src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png" alt="android App" />
                                <img className="badgeimg" src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png" alt="ios app" />
                            </div>
                        </div>
                    </div>
                </div>
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
        </div>
    )
}

export default Register
