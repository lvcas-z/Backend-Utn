export const sumar = (a,b)=> {
    if(!a){
        throw{message: "a is invalid"}
    }
    else if (!b) {
        throw{
            message:"b is invalid"
        }
    }    
    return a+b

};
