import React from "react";

const PageLayout = ({ title, imageSrc, description, sourceLink }) => {
  return (
    <div className="page">
      <h2>{title}</h2>
      <img src={imageSrc} alt={title} />
      <br />
      <br />
      <div class="description" dangerouslySetInnerHTML={{ __html: description }} />
      <p style={{ textAlign: "right" }}>
        <i>Source: </i>
        <a href={sourceLink} target="_blank" rel="noopener noreferrer">
          <i>{sourceLink}</i>
        </a>
      </p>
    </div>
  );
};

export default PageLayout;