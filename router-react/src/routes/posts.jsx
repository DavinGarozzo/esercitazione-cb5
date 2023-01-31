import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./styles/posts.module.scss";

export default function Posts() {
  let { post } = useParams();
  const navigate = useNavigate();

  const [postData, setPostData] = useState({});

  useEffect(() => {
    fetch(`https://dummyjson.com/posts/${post}`)
      .then((res) => res.json())
      .then((data) => setPostData(data));
  }, [post]);

  const onClickPrevBtn = () => navigate(`/posts/${--post}`);
  const onClickNextBtn = () => navigate(`/posts/${++post}`);

  return (
    <div className={styles.Post} id={postData.id}>
      <div className={styles.content}>
        <h3>Title: {postData.title}</h3>
        <h3>Body: {postData.body}</h3>
      </div>
      <div className={styles.buttons}>
        <button onClick={onClickPrevBtn}>Prev</button>
        <button onClick={onClickNextBtn}>Next</button>
      </div>
      <Link to={`/`}>Go to Home</Link>
    </div>
  );
}
