import './post.css'

const Post = () => {
    return (

        <div className='post'>
            <img
                className='postImg'
                src="https://images.hindustantimes.com/img/2022/09/01/550x309/John_Krasinski_1662036596913_1662036605851_1662036605851.jpg" alt="..." />

            <div className='postInfo'>
               <div className='postCats'>
                <span className="postCat">Doctor Strange: Mr Fantastic</span>

                

               </div>
               <span className="postTitle">
               Doctor Strange in the Multiverse of Madness was fan service of the highest order. 
               </span>
               <span className='postDate' > 1 hr ago</span>
            </div>
          <p className='postDesc'>Not only did the film bring back some popular faces in familiar Marvel roles, but it also introduced some actors in roles fan had been asking for. One such was John Krasinski who made his MCU debut in a cameo is Reed Richards aka Mr Fantastic. However, the film’s screenwriter has revealed that the character was to be introduced in Marvel films years ago.</p>
        </div>

    )
}

export default Post