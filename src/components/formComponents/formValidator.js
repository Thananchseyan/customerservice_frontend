export const emptyValidator = (e,setFunc) =>{
    
    const val = e.target.value;

    if(val){
        setFunc(false);
    }else{
        setFunc(true);
    }
    
};

export const phoneValidator =(e,setPhoneError) => {
    const val = e.target.value;
    const phoneValid = new RegExp('^\\d+$');

    if(phoneValid.test(val)){
        setPhoneError(false);
    }else{
        setPhoneError(true);
    }
    
}

export const nicValidator =(e,setFunc) => {
    const val = e.target.value;
    const nicValid = new RegExp('^(\\d{9}(v|V))|(\\d{12})$');

    if(nicValid.test(val)){
        setFunc(false);
    }else{
        setFunc(true);
    }
    
}

export const passwordValidator =(e,setFunc,setPassword) => {
    const val = e.target.value;
    const capitalValid = new RegExp('[A-Z]+');
    const numValid = new RegExp('\\d+');

    if(val.length < 3 ){
        setFunc("Password should have min 3 letters");
    }else if(!capitalValid.test(val)){
        setFunc("Please include a capital letter");
    }else if(!numValid.test(val)){
        setFunc("Please inclue a number");
    }else {
        setFunc(false);
        setPassword(val);
    }
    
}

export const confirmPasswordValidator =(e,setFunc,password,setPassword) => {
    const val = e.target.value;
    
    if(val === password){
        setFunc('');
        setPassword('');
    }else{
        setFunc("Password doesn't matching");
    }
    
}

export const emailValidator = (e,setFunc) =>{
    const value = e.target.value;
    const emailValid = new RegExp('.*\\@\\w+\\.\\w{3}');

    if(!emailValid.test(value)){
        setFunc(true);
    }else{
        setFunc(false);
    }
}