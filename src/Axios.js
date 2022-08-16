import Axios from 'axios'

const firebaseAuth = Axios.create({
    baseURL:"https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="
})


export{
    firebaseAuth
}