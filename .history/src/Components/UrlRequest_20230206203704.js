import React from "react";
import { useParams } from "react-router-dom";

function AnotherComponent() {
  const { categoryId, phraseId } = useParams();

  return (
    <div>
      <h1>Category ID: {categoryId}</h1>
      <h1>Phrase ID: {phraseId}</h1>
    </div>
  );
}


export default UrlRequest
