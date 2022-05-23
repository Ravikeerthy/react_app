import {toast} from 'react-toastify'

export const registerUser = async (user) => {
    try{
    console.log(`output = `, user);
    let users = JSON.parse(localStorage.getItem("persons") || "[]");
    console.log(`length of users = `, users.length);

    let data = {
    
        id: Math.floor(Math.random() * 1000000),
        name: user.name,
        email : user.email,
        mobile : user.mobile,
        password : user.password
    };
    await user.push(data);

    localStorage.setItem("persons", JSON.stringify(users));
    toast.success("User created successfully");
}catch(err) {
    toast.error(err.message);
}}
