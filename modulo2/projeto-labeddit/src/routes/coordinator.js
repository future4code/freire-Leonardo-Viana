export const goToSignUpPage = (navigate) => {
    navigate("/signup")
    window.location.reload()
}

export const goToFeedPage = (navigate) => {    
    navigate("/feed")
    window.location.reload()
}

export const goToDetailPostPage = (navigate, id) => {
    navigate(`/feed/post/${id}`)
    window.location.reload()
}

export const goToLoginPage = (navigate) => {
    navigate("/")
    window.location.reload()
}