export const jsonToQueryString = (json) => {
    return Object.entries(json).map(e => e.join('=')).join('&')
}