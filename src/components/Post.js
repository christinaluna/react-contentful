
import React from 'react'
import marked from 'marked'

const Post = ({ article }) => {
    const {title, description, image} = article.fields
    const postDescription = marked(description);
    return (     
        <div className="post">
            <h2 className="title">{title}</h2>
            {image && <img className='featured-image' src={image.fields.file.url} alt={title} title={title} />}
    <section dangerouslySetInnerHTML={{ __html: postDescription }}/>
            
        </div>
    )
}

export default Post