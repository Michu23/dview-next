export const convertToUrlString = (title) =>{
    return title?.split(" ").map(st=>st.toLowerCase()).join("-")
}

export const convertFromUrlToString = (title) =>{
    return title.split("-").map(st=>st.toLowerCase()).join(" ")
}