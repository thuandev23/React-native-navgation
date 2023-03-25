export const isValidateEmail = (stringEmail:any) => {
    return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(stringEmail))
};

export const isValidatePassword = (stringPassword:any) => stringPassword.length >= 6
 
