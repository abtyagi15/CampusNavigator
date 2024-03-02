import { createContext,useState } from "react";

export const SignupContext = createContext(null);

export const SignupProvider = (props) => {
    const [userForm, setUserForm] = useState({
        formData: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
        otp: ""
    });
  return <SignupContext.Provider value={{userForm,setUserForm}}>{props.children}</SignupContext.Provider>;
};
