
export const required = value => {
    if (value) return undefined;
    return "Field is required";
};



export const maxLengthCreator = (maxLength) => (value)=>{
    if (value && value.length > maxLength) return `max length is ${maxLength} symbol`;
    return undefined;
};

// export const maxLength50 = (value) =>{
//     if (value && value.length>50)   return "max length is 50 symbol";
//     return undefined;
// };