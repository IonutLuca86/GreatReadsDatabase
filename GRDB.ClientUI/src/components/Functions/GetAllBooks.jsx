import {BASE_URL} from '../../config'

export default async function getAllBooks() {

    try{
        const response = await fetch(`${BASE_URL}/Books`);
        if (!response.ok)
            {
                throw new Error(`Login failed with status: ${response.status}`)
            }
        const data = await response.json();
       
        return data;    
    }catch(error)
    {
        console.log('login error:' + error);           
    }
}