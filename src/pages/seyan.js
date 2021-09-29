import React from "react"
import {gql, useQuery} from "@apollo/client";

const SeyanPage = ()=>{
    const Query = gql`
    query Query {
  showCustomers {
    id
    username
    password
  }
}
    `
    const customerQuery = useQuery(Query)
    if (customerQuery.loading) return <p>Loading</p>
    return(
        <div>
            {customerQuery.data.showCustomers[0].username}
            {customerQuery.data.showCustomers[0].password}
        </div>
    )
}
export default  SeyanPage
