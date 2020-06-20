const generateMessage = (username, text) => {
    return {
        username,
        text,
        createAt: new Date().getTime()
    }
}

const generateLocationMessage = (username, location) => {
    return {
        username,
        location,
        createAt: new Date().getTime()
    }
}

module.exports = {
    generateMessage,
    generateLocationMessage
}