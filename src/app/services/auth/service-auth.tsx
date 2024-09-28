

export default function getAuth() {
    const username = localStorage.getItem('username')
    const profile = localStorage.getItem('profile')

    if(username && username.length > 0 && profile) {
        return true;
    }else{
        return false;
    }
}