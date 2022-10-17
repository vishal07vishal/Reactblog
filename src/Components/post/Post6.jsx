import './post.css'

const Post = () => {
    return (

        <div className='post'>
                 <img
                className='postImg'
                src="https://i.ndtvimg.com/i/2017-09/pasta-con-pomodoro-e-basilico_625x350_51506418092.jpg" alt="..." />

            <div className='postInfo'>
               <div className='postCats'>
                <span className="postCat">Pasta Con Pomodoro E Basilico</span>

               </div>
               <span className="postTitle">
               This is the most basic and simplest cooked pasta sauce, hence it is the benchmark of a good Italian home cook.
               </span>
               <span className='postDate' > 1 hr ago</span>
            </div>
          <p className='postDesc'>This one boats of being among the original Italian recipes of pasta. easy and quick, this pasta recipe can be made under half an hour. Serve as a breakfast, pack for kid tiffin or savour as an evening snack. You can even cook this for a casual and lazy dinner and pair this up with red wine.'</p>
        </div>

    )
}

export default Post