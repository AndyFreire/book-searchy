import React from "react";


// The Thumbnail component renders a div that uses some CSS to render a background image
// It will always keep square proportions at any size without the image warping
// The "role" and "aria label" are there to identify the element's purpose as an image for accessibility purposes
function Thumbnail({ src }) {
  return (
    <div
      className="thumbnail"
      role="img"
      aria-label="Book Image"
      style={{
        width: 80,
        height: 80,
        backgroundImage: `url(${src})`,
        backgroundSize: "cover"
      }}
    />
  );
}

export default Thumbnail;
