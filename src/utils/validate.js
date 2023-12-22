export const validationCheckSignIn = (email,password)=>{
    const isEmailValid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-+.]).{6,20}$/.test(password);

    if(!isEmailValid) return "Email is not valid";
    if(!isPasswordValid) return "Password is  not valid (Uppercase , lowercase , numbers)";

    return null;
}

export const validationCheckSignUp = (email,password,name,phone)=>{
    const isEmailValid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-+.]).{6,20}$/.test(password);
    const isNameValid = /^[a-zA-Z]+ [a-zA-Z]+$/.test(name);
    const isPhoneValid = /^\d{10}$/.test(phone);

    if(!isEmailValid) return "Email is not valid";
    if(!isPasswordValid) return "Password is  not valid (Uppercase , lowercase , numbers)";
    if(!isNameValid) return "Name is not valid";
    if(!isPhoneValid) return "Phone is not valid";

    return null;
}