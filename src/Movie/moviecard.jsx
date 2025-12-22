function MovieCard({ title='', image, release }) {
  return (


    <>
    
    <div className="movie-card bg-dark text-white rounded">
   <a href="https://youtu.be/GV3HUDMQ-F8?si=j_4GZenj9OI6golq"><img  src={image} className="w-100 movie-img" alt={title} /></a>

   <div className="p-2">
        <p className="mb-1 small"> {title}</p>
    <p className="text-secondary small mb-0">{release}</p>
      </div>
    </div>

    
    </>
    

    
  )
}

export default MovieCard
