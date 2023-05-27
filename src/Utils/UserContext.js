import { createContext } from "react";

const UserContext = createContext({
    user:{
        email:"harshsindhu0402@gmail.com",
        name:"Harsh Sindhu"
    },
});

export default UserContext;