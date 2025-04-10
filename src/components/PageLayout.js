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
      </p>
    </div>
  );
};

export default PageLayout;