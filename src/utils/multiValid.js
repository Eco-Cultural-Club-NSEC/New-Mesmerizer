export const multiValid = (data) => {
    console.log(data);
  if (Array.isArray(data)) {
    for(let e of data){
        if(e==="")
            return false;
    }
    return true;
  } else return false;
};
