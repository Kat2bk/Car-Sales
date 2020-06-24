export function addFeature(id) {
    return {
        type: "ADD_FEATURE",
        payload: id
    }
}

export function removeFeature(id) {
    return {
        type: "REMOVE_FEATURE",
        payload: id
    }
}