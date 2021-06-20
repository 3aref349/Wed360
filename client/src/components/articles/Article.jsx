
// ─── REACT REDUX ────────────────────────────────────────────────────────────────
//
import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

        import { Card, Icon, Image } from 'semantic-ui-react'


//
// ─── ACTIONS ────────────────────────────────────────────────────────────────────
//
// Get Courses 


import { getArticles } from "../../redux/articles";
import {deleteArticle} from "../../redux/articles";

function Articles() {
    const params = useParams()

    const dispatch = useDispatch();
     //const { errors, loading } = useSelector((state) => state.articles);
    const articles = useSelector(state => state.articles)
    useEffect(() => {
        dispatch(getArticles())
    }, [])

 
    console.log(params)
    return (

        <div>
            <h1  style={{ textAlign: 'center' }}>Articles List</h1>
        
 <div  style={{ display:"flex" ,flexDirection:"row"}}>
        { articles.loading ?
             <p>loading</p> :
             articles.articles.map((item) => (
<div key={item.id}   style={{ padding: "20px"}} >
<Card >
          
          <Image src={item.imageUrn} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{item.title}</Card.Header>
            <Card.Meta>{item.createdAt}</Card.Meta>
            <Card.Description>
             {item.description}
            </Card.Description>
          </Card.Content>
        
            
        </Card>
</div>

         ))}

 </div>
 </div> 
  
        // <div style={{ height: "100vh" }}>
        //     { articles.loading ?
        //         <p>loading</p> :
        //         articles.articles.map((item) => (
        //             <div key={item.id}>
        //                <p >{item.title}</p>

        //                 <p>{item.description}</p>
        //                 <button style={{ color: "red" }} onClick={() => { deleteArticle(item.id) }}>delete</button>

        //             </div>

        //         ))}



        // </div>
    )
}

export default Articles
