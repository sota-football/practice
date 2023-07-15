import React, { useEffect, useState } from 'react'
import "./Home.css";
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { auth, db } from '../firebase';

export default function Home() {
  const [postList, setPostList] = useState([]);

useEffect(()=> {
  const getPosts = async () => {
    const data = await getDocs(collection(db, "posts"));
    //console.log(data);
    //console.log(data.docs);
    //console.log(data.docs.map((doc) => ({doc})));
    //パッケージ？とドキュメントとデータがあることを考えて、
    //...doc.data()を使うと簡単にデータがとってこれる(深いときに有効)...doc.data().author.usernameでとってこれる
    //console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  }
  getPosts();
},[]);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "posts", id));
    window.location.href = "/";
  };

  return (
    <div className="homePage">
      {postList.map((post) => {
        return (
          <div className="postContents" key={post.id}>
            <div className="postHeader">
              <h1>{post.title}</h1>
            </div>
            <div className="postTextContainer">
              {post.postsText}
            </div>
            <div className="nameAndDeleteButton">
              <h3>@{post.author.username}</h3>
              {post.author.id === auth.currentUser?.uid && (
                <button onClick={() => handleDelete(post.id)}>削除</button>
              )}
            </div>
          </div>
        )
      })}
      
    </div>
  );
};

//映像授業とfrcを打った時が違うけど、同じ内容(最後に;をつけるのを忘れないように)
//export default Home;
