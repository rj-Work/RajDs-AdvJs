import React from 'react'
//import ButtonComponent from './platform/components/button/adobereactbutton'
import ButtonComponent from 'C:/Users/rads/Documents/ReactCode/reactdemo/src/platform/components/button/adobereactbutton'

export default class LoginComponent extends React.Component {
    constructor() {
        super();
    }

    render(){
        return(<table>
                <tr>
                <td>Username </td>
                <td> <input type="text"/> </td>
                </tr>
                <tr>
                    <td>Password </td>
                    <td> <input type="password"/> </td>
                </tr>
                <tr>
                    <td><button>Login</button></td>
                    <td><button>Clear</button></td>
                </tr>
                
             </table>
        );
    }
}