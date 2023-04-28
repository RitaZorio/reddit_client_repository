
//will return randomly a class to apply different styles in css to the posts
export const postClass = ()=>{
    let random = Math.floor(Math.random() * 3);
    let rotate
    if(random === 0){
            rotate = 'rotate1';
        }else if (random === 1){
            rotate = 'rotate2';
        } else if (random === 2){
            rotate = 'rotate3';
        }else{
            rotate = 'rotate4';
       }
        return rotate
};
