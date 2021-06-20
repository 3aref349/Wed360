
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


import { getArticles } from "../../../redux/articles";
import { deleteArticle } from "../../../redux/articles";

function AdminArticles() {
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

            {articles.loading ?
                <p>loading</p> :
                articles.articles.map((item) => (
                    <div key={item.id}   style={{ padding: "20px"}} >

                    <Card key={item.id}>

                        <Image src={item.imageUrn} wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>{item.title}</Card.Header>
                            <Card.Meta>{item.createdAt}</Card.Meta>
                            <Card.Description>
                                {item.description}
                            </Card.Description>
                        </Card.Content>

                        <Card.Content extra>
                            <Link to={`/edit/${item.id}`}>
                                <button style={{ color: "blue" }} >update form</button>
                            </Link>
                            {/* onClick ={()=>{dispatch(deleteArticle({iid:item.id}))}} */}
                            <button style={{ color: "red" }} onClick={() => {
                                dispatch(deleteArticle({ id: item.id }))
                            }
                            }>Delete</button>
                        </Card.Content>
                    </Card>

                    </div>
                ))}
        </div>
        </div>
    )
}

export default AdminArticles
