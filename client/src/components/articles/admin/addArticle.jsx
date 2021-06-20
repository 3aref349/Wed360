//
// ─── REACT REDUX ────────────────────────────────────────────────────────────────
//
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

// ─── UI ─────────────────────────────────────────────────────────────────────────
//



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

//
// ─── ACTIONS ────────────────────────────────────────────────────────────────────
//

import { createArticle, resetArticles } from "../../../redux/articles";

const AddArticle = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetArticles())
  }, [dispatch])
  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
    authorName: "",

  });

  const handleChange = (e, { name, value }) => {
    setFormValues({ ...formValues, [name]: value });
  };

  const { errors, loading, posted } = useSelector((state) => state.articles);

  const handleSubmit = () => {
    dispatch(createArticle(formValues));
  };
  if (posted) return <p>posted</p>

  return (
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
          onSubmit={handleSubmit}
          loading={loading}
          error={errors}
        >
          <Segment stacked>

            <Form.Input
              fluid
              name="title"
              icon="title"
              iconPosition="left"
              placeholder="Enter the Tite"
              onChange={handleChange}
              autoComplete="title"
              focus
              required
              label="Title "

              error={errors && errors.title}
            />
            <Form.Input
              fluid
              name="description"
              icon="description"
              iconPosition="left"
              placeholder="description"
              onChange={handleChange}
              autoComplete="description"
              focus
              label="description"

              required
              error={errors && errors.description}
            />
            <Form.Input
              fluid
              name="authorName"
              icon="authorName"
              iconPosition="left"
              placeholder="authorName"
              onChange={handleChange}
              autoComplete="authorName"
              focus
              label="authorName"

              required
              error={errors && errors.authorName}
            />

            <Button color={MAIN_COLOR} fluid size="large" loading={loading}>
              Add
            </Button>
          </Segment>
        </Form>

      </Grid.Column>
    </Grid>
  );
};

export default AddArticle;