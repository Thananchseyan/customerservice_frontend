export const emptyValidator = (val,message) =>{

    if(!val){
        return message;
    }
    
};

export const phoneValidator =(val) => {
   
    const phoneValid = new RegExp('^\\d+$');
    if(!val){
        return "Please enter";
    }else if(!phoneValid.test(val)){
        return "Please enter a valid phone number";
    }
    
}

export const nicValidator =(val) => {
    const nicValid = new RegExp('^(\\d{9}(v|V))|(\\d{12})$');

    if(!val){
        return "Please enter";
    }else if(!nicValid.test(val)){
        return "Please enter a valid NIC"
    }
    
}

export const passwordValidator =(val) => {
    const capitalValid = new RegExp('[A-Z]+');
    const numValid = new RegExp('\\d+');

    if(!val){
        return "Please enter";
    }else if(val.length < 3 ){
        return "Password should have min 3 letters"
    }else if(!capitalValid.test(val)){
        return "Please include a capital letter"
    }else if(!numValid.test(val)){
        return "Please inclue a number"
    }
    
}


export const emailValidator = (value) =>{
    const emailValid = new RegExp('.*\\@\\w+\\.\\w{3}');

    if(!value){
        return "Please enter";
    }else if(!emailValid.test(value)){
        return "Please enter a valid email";
    }
}