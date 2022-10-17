import './post.css'

const Post = () => {
    return (

        <div className='post'>
            <img
                className='postImg'
                src="https://mk0healthista7wl964d.kinstacdn.com/wp-content/uploads/2019/02/running-for-fitness-running-with-a-friend.jpg" alt="..." />

            <div className='postInfo'>
               <div className='postCats'>
                <span className="postCat">Running for fitness</span>
               </div>
               <span className="postTitle">
               Running can significantly improve physical and mental health. 
               </span>
               <span className='postDate' > 1 week ago</span>
            </div>
          <p className='postDesc'>As a form of aerobic exercise, running can reduce stress, improve heart health, and even help alleviate symptoms of depression. Some researchers think running may be so good for us because its something we evolved to do.'</p>
        </div>

    )
}

export default Post