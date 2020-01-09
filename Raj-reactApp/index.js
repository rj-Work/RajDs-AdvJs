import ReactDom from 'react-dom'
import { AppComponent } from './app/app.component'
import LoginComponent from './login/loginComponent'
import SignupComponent from './signup/signupComponent'
import HeaderComponent from "./headerfooter/headerComponent";
import FooterComponent from "./headerfooter/footerComponent";



import  React from 'react'

ReactDom.render(<AppComponent/>, document.getElementById('root'));

ReactDom.render(<LoginComponent/>, document.getElementById('login'));

ReactDom.render(<SignupComponent/>, document.getElementById('signup'));

ReactDom.render(<headerComponent/>, document.getElementById('header'));

ReactDom.render(<footerComponent/>, document.getElementById('footer'));