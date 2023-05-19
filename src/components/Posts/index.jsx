import { Card } from "./Card"

export const Posts = (props) => {

    return (
        <div className='posts'>
            {props.posts.map((post) => (
                <Card 
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    cover={post.cover}
                    body={post.body}
                />
            ))}
        </div>
    )
}