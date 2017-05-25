import Rebase from 're-base'
import firebase from 'firebase/app'
import database from 'firebase/database'
import 'firebase/auth'

const app = firebase.initializeApp( {
    apiKey: "AIzaSyB45hzZPAeReSPSAez6G8spmr3cYGeAUgY",
    authDomain: "thing-list-d473d.firebaseapp.com",
    databaseURL: "https://thing-list-d473d.firebaseio.com",
    projectId: "thing-list-d473d",
    storageBucket: "thing-list-d473d.appspot.com",
    messagingSenderId: "1003754390505"

})

const db = database(app) 

export const auth = app.auth()
export const githubProvider  = new firebase.auth.GithubAuthProvider()

export default Rebase.createClass(db)