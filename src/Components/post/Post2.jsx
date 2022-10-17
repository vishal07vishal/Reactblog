import './post.css'

const Post = () => {
    return (

        <div className='post'>
            
            <img
                className='postImg'
                src="https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/artificial-intelligence-AI.png" alt="..." />

            <div className='postInfo'>
               <div className='postCats'>
                <span className="postCat">Artificial Inteligence</span>

               </div>
               <span className="postTitle">
               Before 1949, computers could execute commands, but they could not remember what they did as they were not able to store these commands. 
               </span>
               <span className='postDate' > 15 hr ago</span>
            </div>
          <p className='postDesc'>In 1950, Alan Turing discussed how to build intelligent machines and test this intelligence in his paper “Computing Machinery and Intelligence.” Five years later, the first AI program was presented at the Dartmouth Summer Research Project on Artificial Intelligence (DSPRAI).This event catalyzed AI research for the next few decades.Computers became faster, cheaper, and more accessible between 1957 and 1974. Machine learning algorithms improved and, in 1970, one of the hosts of DSPRAI told Life Magazine that there would be a machine with the general intelligence of an average human being in three to eight years. Despite their success, computers’ inability to efficiently store or quickly process information created obstacles in the pursuit of artificial intelligence for the next ten years.'</p>
        </div>

    )
}

export default Post