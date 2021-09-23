import Content from '../components/home';

import {useQuery, gql} from '@apollo/client';
import {VIEW_MODERATORS} from "../GraphQL/Queries";
import { useEffect } from "react";
import {useState} from "react";


function Home() {

    const {error,loading, data} = useQuery(VIEW_MODERATORS);
    const [datas,setData] = useState();

    useEffect(()=>{
        setData(datas)
        console.log(data,error,loading);
    },[data]);

    return (
        <div>
            
        {/*<!-- [ Main Content ] start -->*/}
        {data? <Content/> :null}
        {/*<!-- [ Main Content ] end --> */}
        </div>
    );
  }
  
  export default Home;
  