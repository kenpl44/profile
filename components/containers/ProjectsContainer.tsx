import axios from 'axios';
import React, { useEffect,useState } from 'react';

import api from './api';



export const ProjectsContainer = ({
    children,
    categories=undefined,
    order='asc',
    page=undefined,
    per_page=undefined,
})=>{

    const [projects,setProjects] = useState('');
    
/***********useEffect*******/
useEffect(()=>{
    const url  = `${api.url}/wp/v2/projects`;
    const token = api.token;


    const fetchProjects = async()=>{
      
        const headers = {
            Authorization:`Bearer ${token}`
        }
        const config = {
            headers:headers
        }
        
        const params = {
            _embed:'',
            categories,
            order,
            page,
            per_page
        }
        try{
            const response = await axios({
                url:url,
                method:'get',
                headers:headers,
                params:params
            })
            setProjects(response.data)
            
        }catch(e){console.log(e)}
    }
    
    fetchProjects();

    
},[]);



/*******render************/
return(
    <>
     {React.Children.map(children,child=>{
        if(React.isValidElement(child)){
            return React.cloneElement(child,{projects});
        }

        return child;
     })}

  


    </>
)


}