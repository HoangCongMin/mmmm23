export const handleItemNavBar=(value): string=>{
    const arr = JSON.parse(value);
    if( arr[0].title === 'Home'){
      return arr[0].title=''
    }
    // console.log(arr[0].title.string.replace(/\s+/g, ''))
    return arr[0].title.replace(/\s+/g, '');
}

export const getCurrentYear = () => {
  return new Date().getFullYear();
};


export const getImg=(value:string)=>{
    return `https://backend.smartwork.3i.com.vn/${value}`
}
