// to get the data from LocalStorage 
export const loadData = key => {
    try {
        let data = localStorage.getItem(key)
        data = JSON.parse(data)
        return data
    }
    catch (err) {
        return undefined
    }
}

// to push the data to localStorage
export const saveData = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data))
}