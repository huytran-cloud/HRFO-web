import { result } from 'lodash';
import React, {useState, useEffect, useHistory} from 'react'
import { firestore as db} from '../../utils/firebase'
import uuid from "uuid";
import {Link} from 'react-router-dom';

export default function PostList() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      // Hook to handle the initial fetching of posts
      db.collection("posts")
        .orderBy("createdAt", "desc")
        .get()
        .then((querySnapshot) => {
          const data = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          if (data.length <= 4) {
            setPosts(data); 
          }else {
              const result = []
              for (let index = 0; index < 3; index++) {
                  result.push(data[index])  
              }
              setPosts(result)
          }
        });
    }, []);

    return (
        <section id="works" class="s-works">
        <div class="intro-wrap">
            <div
            class="row section-header has-bottom-sep light-sep"
            data-aos="fade-up"
            >
            <div class="col-full">
                <h3 class="subhead">Recent Works</h3>
                <h1 class="display-2 display-2--light">
                We love what we do, check out some of our latest works
                </h1>
            </div>
            </div>
        </div>

        <div class="row works-content">
            <div class="col-full masonry-wrap">
                <div class="masonry">
                    <div
                    class="masonry__brick"
                    data-aos="fade-up"
                    onclick="location.href='https://www.facebook.com/hrfowherewefightforourrights/photos/a.105112504593905/314279703677183'"
                    >
                    <div class="item-folio">
                        <div class="item-folio__thumb">
                        <a
                            href="https://www.facebook.com/hrfowherewefightforourrights/photos/a.105112504593905/314279703677183"
                        >
                            <a
                            href="https://www.facebook.com/hrfowherewefightforourrights/photos/a.105112504593905/314279703677183"
                            class="thumb-link"
                            title="Click to open"
                            data-size="1050x700"
                            >
                            <img
                                src="https://scontent.fhan5-6.fna.fbcdn.net/v/t1.6435-9/201194506_314279707010516_9017059554404381968_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=730e14&_nc_ohc=Md8PQ_t6ccUAX-RXfnC&tn=RsVFqyzMx0vjp7bw&_nc_ht=scontent.fhan5-6.fna&oh=409686793be30e5d927610b98d30f1b4&oe=60D2676F"
                                alt=""
                            /> </a
                        ></a>
                        </div>

                        <div class="item-folio__text">
                        <h3 class="item-folio__title">Gia hạn đơn</h3>
                        </div>
                    </div>
                    </div>

                    <div
                    class="masonry__brick"
                    data-aos="fade-up"
                    onclick="location.href='https://www.facebook.com/hrfowherewefightforourrights/photos/a.105112504593905/314279703677183'"
                    >
                    <div class="item-folio">
                        <div class="item-folio__thumb">
                        <a
                            href="https://www.facebook.com/hrfowherewefightforourrights/photos/a.105112504593905/311776710594149/"
                        >
                            <a
                            href="https://www.facebook.com/hrfowherewefightforourrights/photos/a.105112504593905/311776710594149/"
                            class="thumb-link"
                            title="Click to open"
                            data-size="1050x700"
                            >
                            <img
                                src="https://scontent.fhan5-5.fna.fbcdn.net/v/t1.6435-9/197175151_311776713927482_1804495025339955250_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=730e14&_nc_ohc=NSCjz0zaF-sAX-vKJU7&tn=RsVFqyzMx0vjp7bw&_nc_ht=scontent.fhan5-5.fna&oh=5535613f211dd0839e1491fb24118b71&oe=60D315C7"
                                alt=""/> 
                            </a>
                        </a>
                        </div>

                        <div class="item-folio__text">
                        <h3 class="item-folio__title">Bạn hỏi HRFO trả lời</h3>
                        </div>
                    </div>
                    </div>

                    {posts.map((item)=>{
                        console.log(item)
                        return (
                            <div class="masonry__brick" data-aos="fade-up" key={item.id}>
                                <div class="item-folio">
                                    <div class="item-folio__thumb">
                                    <a
                                        href={item.image_src}
                                        class="thumb-link"
                                        title={item.heading}
                                        data-size="1050x700"
                                    >
                                        <img
                                        src={item.image_src}
                                        srcset={`
                                            ${item.image_src}    1x,
                                            ${item.image_src} 2x
                                        `}
                                        alt="post image"
                                        />
                                    </a>
                                    </div>

                                    <div class="item-folio__text">
                                    <h3 class="item-folio__title">{item.heading}</h3>
                                    {/* <p class="item-folio__cat">Web Development</p> */}
                                    </div>
                                    <Link
                                    to={{
                                        pathname: "/blog",
                                        state: item // your data array of objects
                                    }}
                                    >
                                    <a
                                    href="#"
                                    class="item-folio__project-link"
                                    title="Project link"
                                    >
                                    <i class="icon-link"></i>
                                    </a>
                                    </Link>

                                    <div class="item-folio__caption">
                                    <p>
                                        Vero molestiae sed aut natus excepturi. Et tempora numquam.
                                        Temporibus iusto quo.Unde dolorem corrupti neque nisi.
                                    </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
        </section>
    )
}
