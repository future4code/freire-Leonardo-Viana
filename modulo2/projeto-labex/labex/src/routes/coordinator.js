export const goBack = (navigate) => {
    navigate(-1)
}

export const goToCreateTripPage = (navigate) => {
    navigate("/admin/trips/create")
}

export const goToLoginPage = (navigate) => {
    navigate("/login")
}

export const goToAdminHomePage = (navigate) => {
    navigate("/admin/trips/list")
}

export const goToListTripPage = (navigate) => {
    navigate("/trips/list")
}

export const goToApplicationFormPage = (navigate) => {
    navigate("/trips/application")
}

export const goToHome = (navigate) => {
    navigate("/")
}

export const goToTripDetailsPage = (navigate) => {
    navigate("/admin/trips/:id")
}