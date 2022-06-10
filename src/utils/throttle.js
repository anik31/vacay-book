export const throttle = (fn, delay) => {
    let flag = true;
    return function(){
        if(flag){
            fn();
            flag = false;
            setTimeout(() => {
                flag = true;
            },delay)
        }
    }
};
