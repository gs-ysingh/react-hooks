import React, { useState, Component } from "react";
import ReactDOM from "react-dom";
import Input from "../presentational/Input.jsx";

const FormContainer = (props) => {
  const [seoTitle, setSeoTitle] = useState('');

  const handleChange = (event) => {
    setSeoTitle(event.target.value);
  }

  return (
    <form id="article-form">
      <Input
        text="SEO title"
        label="seo_title"
        type="text"
        id="seo_title"
        value={seoTitle}
        handleChange={handleChange}
      />
    </form>
  );
}

export default FormContainer;
