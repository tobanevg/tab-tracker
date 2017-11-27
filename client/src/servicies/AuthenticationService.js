import Api from '/home/gtobanev/tab-tracker/client/src/servicies/Api'

export default {
    register(credentials){
        return Api().post('register',credentials)
    }
}