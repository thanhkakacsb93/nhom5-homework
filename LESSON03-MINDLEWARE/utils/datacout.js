import users from "./mokedata.js"
let arrcouter = users.map(user => {
    return {
        user: user.username,
        student: 0,
        teacher: 0,
        subject: 0
    };
});
export default arrcouter