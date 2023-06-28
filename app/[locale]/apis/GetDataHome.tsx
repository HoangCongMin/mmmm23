import http from "../utils/http"

export const  GetMenuData = ()=>http.post('HomePage/GetMainMenu');
export const GetItemServices = (id) =>http.post(`HomePage/GetItem?id=${id}`);
export const GetAbout=(param:number)=>http.post(`HomePage/GetItem?id=${param}`);
export const GetLanguage=()=>http.post(`HomePage/GetListLanguage`);
