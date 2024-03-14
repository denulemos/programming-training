const clearCookies = document.cookie
    .split(';')
    .forEach(
        cookie => (
            document.cookie = cookie.replace(/^ +/, '')
                .replace(/=.*/, '=;expires=' + new Date(0).toUTCString()+';path=/')
        )
    )

// You can delete all the cookies stored by the app by setting the expiry date
// to a date that has already passed