export const Card = ({ id, title, cover, body}) => {
    return (
        <div className='post' key={id}>
        <img src={cover} alt={title}/>
        <div className='post-content'>
        <h2>{title}</h2>
        <p>{body}</p>
        </div>
    </div>
    )
}