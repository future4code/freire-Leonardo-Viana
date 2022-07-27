export const goToSignUpPage = (navigate) => {
    navigate("/signup")
}

export const goToFeedPage = (navigate) => {
    navigate("/feed")
}

export const goToDetailPostPage = (navigate, id) => {
    navigate(`/feed/post/${id}`)
}

export const goToLoginPage = (navigate) => {
    navigate("/")
}