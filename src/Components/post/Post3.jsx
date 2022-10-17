import './post.css'

const Post = () => {
    return (

        <div className='post'>
                    <img
                className='postImg'
                src="https://images.hindustantimes.com/img/2022/09/01/550x309/Yahya_Abdul-Mateen_1662038935830_1662038940223_1662038940223.jpg" alt="..." />

            <div className='postInfo'>
               <div className='postCats'>
                <span className="postCat">Yahya Abdul-Mateen II</span>

                

               </div>
               <span className="postTitle">
               Yahya Abdul-Mateen II has worked in critical successes like The Trial of the Chicago 7 and The Handmaid’s Tale and also in commercial blockbusters like The Matrix Resurrections.
               </span>
               <span className='postDate' > 5 hr ago</span>
            </div>
          <p className='postDesc'>Apart from Aquaman, he has also played a superhero in the HBO series Watchmen. He is set to reprise his Aquaman role in the sequel Aquaman: The Lost Kingdom.In an interview with Variety, the actor spoke about the difference in working in both kinds of storytelling. “Everything should be about getting to the truth. But sometimes you got to know which movie or genre you are in. Something like Aquaman, thats clown work. Aquaman is not The Trial of the Chicago 7. You have got to get over yourself,” he said.'</p>
        </div>

    )
}

export default Post