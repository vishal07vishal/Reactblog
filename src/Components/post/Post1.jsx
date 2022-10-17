import './post.css'

const Post = () => {
    return (

        <div className='post'>
             <img
                className='postImg'
                src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQkZ9n1SV0ALx_E6cUg-MfMsujvB0KjE9GYLUA8FQ3OMukB_ajJ" alt="..." />

            <div className='postInfo'>
               <div className='postCats'>
                <span className="postCat">Amir Khan</span>

               

               </div>
               <span className="postTitle">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis placeat pariatur, autem reprehenderit quas perferendis dolore 
               </span>
               <span className='postDate' > 2 days ago</span>
            </div>
          <p className='postDesc'>Aamir Khan’s latest release Laal Singh Chaddha failed to bring audience to the theatres, perhaps striking the biggest blow on an already hurting Hindi film industry that has seen a number of prestige titles flopping at the box office. The actor has been missing from the scene as speculation about the film continues in the industry circles.</p>
        </div>

    )
}

export default Post