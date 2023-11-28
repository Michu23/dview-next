import React from "react";
import { Link } from "react-router-dom";
import { convertToUrlString } from "../../../app/util/stringUtils";

const BlogOption = (props) => {
    const { id, img, tagName, readTime, title, shortContent, onClick } = props;
    return(
        <Link to={`/blog/${id}/${convertToUrlString(title)}`} onClick={onClick}>
            <div className="article__box" key={id}>
                <img src={img} alt={title} className="blog__thumbnail__img" />
                <div className="article__box__">
                    <div className="article__top__header">
                    <div className="tag__box">
                        <span>{tagName}</span>
                    </div>
                    <p>{`${readTime} min read`}</p>
                    </div>
                    <div className="article__content">
                    <h3>{title}</h3>
                    <p>{shortContent}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default BlogOption;