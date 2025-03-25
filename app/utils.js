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
    } else {
        const date = new Date();
        date.setFullYear(date.getFullYear() + 1);
        expires = "; expires=" + date.toUTCString();
    }

    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

export const deleteCookie = (name) => {
    if (getCookie(name)){
        document.cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
        return true
    }
    return false
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


export const dateFormat = inputDate => {
    const date = new Date(inputDate);
    const formatedDate = `${date.getDate().toString().padStart(2, '0')}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getFullYear()}`;
    return formatedDate;
}