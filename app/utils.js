export const getCookie = (name) => {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) {
        return match[2]
    }
    return null;
  }

export const setCookie = (name, value, minutes) => {
    let expires = ""

    if(minutes) {
        const date = new Date();
        date.setTime(date.getTime() + (minutes * 60 * 1000))
        expires = "; expires=" + date.toUTCString();
    }

    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

export const getFullName = (userData = null) => {
    let fullName = ""
    if(userData){
        fullName = `${userData.first_name} ${userData.last_name}`
    } else {
        fullName = `${getCookie("first_name")} ${getCookie("last_name")}`
    }
    return fullName
}