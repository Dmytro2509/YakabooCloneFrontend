"use client"

import { useEffect, useState } from "react";
import { Endpoints } from "../endpoints";


export const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const getCookie = (name) => {
        const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        if (match) {
            return match[2]
        }
        return null;
    }

    const setCookie = (name, value, minutes) => {
        let expires = ""

        if(minutes) {
            const date = new Date();
            date.setTime(date.getTime() + (minutes * 60 * 1000))
            expires = "; expires=" + date.toUTCString();
        }

        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    const refreshAccessToken = () => {
        const refreshToken = getCookie("refresh_token")
        if(refreshToken){
            console.log("Refresh token exists")
            fetch(Endpoints.jwtRefreshToken, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ refresh_token: refreshToken })
            })
            .then(res => res.json())
            .then(data => {
                if (data.access_token){
                    setCookie("access_token", data.access_token, 60);
                    setIsAuthenticated(true)
                } else {
                    setIsAuthenticated(false)
                }
            })
            .catch(() => {
                setIsAuthenticated(false)
            })
        }

        return isAuthenticated
    }

    useEffect(() => {
        const accessToken = getCookie("access_token")

        if(accessToken){
            fetch(Endpoints.checkAccessToken, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${accessToken}`
                }
            })
            .then(response => {
                if(response.ok){
                    setIsAuthenticated(true);
                } else {
                    refreshAccessToken()
                }
            })
            .catch(() => {
                refreshAccessToken();
            })
        } else {
            refreshAccessToken()
        }
    }, [])

    return isAuthenticated
}