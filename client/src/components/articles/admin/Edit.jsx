import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import "./edit.css"

import {
    Button,
    Form,
    Grid,
    Header,
    Icon,
    Message,
    Segment,
  } from "semantic-ui-react";
  import { MAIN_COLOR } from "../../../utilities/theme";

export default function Edit() {

    const params = useParams();
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([]);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [authorName, setAuthorName] = useState("");
  

    const getArticle = async () => {
        const res = await axios.get(`http://localhost:4000/api/articles/${params.id}`)
        console.log(res.data)
        setDescription(res.data.description)
        setTitle(res.data.title)
        setAuthorName(res.data.authorName)
        setLoading(false)
    }


    const update = (e) => {
        e.preventDefault()
        
        axios.put(`http://localhost:4000/api/articles/${params.id}`, {
            description:description,
            title: title,
          
            authorName:authorName,
        



        }, {

            withCredentials: true,
        }
        )
            .then(function (response) {

                console.log(response);

            })
    }

    useEffect(() => {
        getArticle();
    }, []);

    return (
        // <div>
        //     <h1 className="center">Update an Article Form </h1>
        //     {loading ? <p>Loading</p> :




        //         <form  className="Form" onSubmit={(e) => update(e)}>



        //             <input  className="input" value={title} placeholder="title" onChange={(e) => setTitle(e.target.value)} />
        //             {/* <input className="input"value={description} placeholder="article" onChange={(e) => setDescription(e.target.value)} /> */}
        //             <textarea  className="input" value={description} placeholder="article" onChange={(e) => setDescription(e.target.value)} />
        //             <input className="input" value={authorName} placeholder="title" onChange={(e) => setAuthorName(e.target.value)} />
                    

        //             <input className="input" type="submit" value="Update" />
        //         </form>

        //     }
        // </div>
<div>
    <h1 style={{ textAlign: 'center' }} >Updated Article Form </h1>
    <Grid
        padded
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        textAlign="center"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
  
          <Form
            size="large"
            onSubmit={(e) => update(e)}
            loading={loading}
            // error={errors}
          >
            <Segment stacked>
              <Form.Input
                fluid
                name="title"
                icon="title"
                iconPosition="left"
                placeholder="Title "
                onChange={(e) => setTitle(e.target.value)} 
                autoComplete="email"
                focus
                label=" Title"
                required
                // error={errors && errors.title}
              />
         
         
              <Form.TextArea
                fluid
                name="description"
                icon="description"
                iconPosition="left"
                placeholder="description"
                onChange={(e) => setDescription(e.target.value)}
                autoComplete="message"
                focus
                required
                label="Description"
                // error={errors && errors.description}
              />
                   <Form.Input
                fluid
                name="authorname"
                icon="authorname"
                iconPosition="left"
                placeholder=" authorname"
                onChange={(e) => setAuthorName(e.target.value)}
                autoComplete="firstname"
                focus
                required
                label=" authorname"
  
                // error={errors && errors.authorName}
              />
              <Button color={MAIN_COLOR} fluid size="large" loading={loading}>
                Update
              </Button>
            </Segment>
          </Form>
  
        </Grid.Column>
      </Grid></div>
        
    )
}
