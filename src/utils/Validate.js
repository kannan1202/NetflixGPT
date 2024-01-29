

export const checkValidData = (email,password,...SignUpArgs)=>{

    if(SignUpArgs.length > 0){
    const [name] = SignUpArgs;
    const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
    if(!isNameValid) return "Username is not valid."
    }
    const isEmailvalid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isEmailvalid) return "Email ID is not valid.";
    if(!isPasswordValid) return "Password is not valid.";

    return null;
}