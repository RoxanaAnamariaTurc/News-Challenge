import './NewsArticle.css'
import React from 'react';
import { useLocation } from 'react-router-dom';

const NewsArticle = (props) =>
{
    const location = useLocation();
    const { title, body, photoUrl } = location.state;
    return (
        <div className="article">
            <h1>{title}</h1>
            <img src={photoUrl} alt="news" />
            <p>{body}</p>


        </div>

    )
}
export default NewsArticle;