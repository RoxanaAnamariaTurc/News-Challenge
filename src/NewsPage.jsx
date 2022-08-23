import './NewsPage.css';
import React from 'react';
import { Link } from 'react-router-dom';
const NewsItem = (props) =>
{
    return (
        <div className="container" key={props.key}>
            <div>
                <img src={props.thumbnail} alt="news" id="img" />
                <a data-testid="original" href={props.webUrl}>
                    <p>{props.headline}</p>
                </a>
                <Link to='/article' state={
                    {
                        title: props.headline,
                        body: props.bodyText,
                        photoUrl: props.thumbnail
                    }
                } id="link">Read More</Link>
            </div>

        </div>
    );
}
const NewsPage = () =>
{
    const newsData = require('./mockNewsData');
    return (

        <>
            <header>
                <h1> Today's headlines </h1>
                <hr></hr>
            </header>

            <div className="news">
                {newsData.response.results.map((data, key) =>
                {
                    return <NewsItem key={key} headline={data.fields.headline} thumbnail={data.fields.thumbnail} webUrl={data.webUrl} bodyText={data.fields.bodyText} />
                })}

            </div>

        </>
    )
};

export default NewsPage;