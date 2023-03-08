import React from "react";
import styles from "./IframePreview.css";

export default function ProjectPreview(props) {
  const { displayed } = props.document;

  // this tells Sanity to call the api in the web folder, passing in the secret (secret) page type (eg. project) and the slug (eg. /work/uefa-champions-league)
  const url =
    process.env.NODE_ENV === "production"
      ? `https://carmen-web.vercel.app/api/preview/preview?secret=secret&_type=project&slug=${displayed?.slug?.current}`
      : `http://localhost:3000/api/preview/preview?secret=secret&_type=project&slug=${displayed?.slug?.current}`;

  return (
    <div className={styles.componentWrapper}>
      <div className={styles.iframeContainer}>
        <iframe src={url} frameBorder={"0"} />
      </div>
    </div>
  );
}
