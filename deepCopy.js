function deepCopy(obj) {
    // whereas the whole new copy are seperated from the original one.
    // check if vals of the keys if they are objects
    // if so, copy that object (deep copy)
    // else return the value.

    const keys = Object.keys(obj) // get all the keys of the object.
    const newObject = {} // whereas the copy process will be done.

    for (let i = 0; i < keys.length; i++) {
        const key = keys[i]
        if (typeof obj[keys[i]] === "object") {
            newObject[key] = deepCopy(obj[key])
        } else {
            newObject[key] = obj[key]
        }
    }
    return newObject
}

const obj1 = {
    key1: "key1",
    key2: "key2",
    subObj: {
        subKey: "subKey"
    }
}

// deep coping the object
const obj2 = deepCopy(obj1)

// try to change some keys from the original one..
obj1.subObj.subKey = "New SubKey"

// logging the subJey object from the new created object..
console.log(obj2.subObj.subKey) // and Voila! the old value still exist..

