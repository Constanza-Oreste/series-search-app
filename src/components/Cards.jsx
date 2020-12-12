import React from 'react'
import './cssComponents/Cards.css'
import { Card, Col, Row } from 'antd';

const { Meta } = Card;

const Cards = ({serie}) => {
    
    return (
        <div className="cards">
            <Col span={30}>
            <Card
                hoverable={true}
                style={{ width: 240 }}
                cover={<img className="cardImage"
                src={serie.show.image.medium}
                alt={serie.show.name + 'poster'}
            />}
            >
            <Meta
                title={serie.show.name} 
            />
            <p><small>Language: {serie.show.language}</small></p>
                <p><small>Rating: {serie.show.rating.average}</small></p>
                <a target="blank" href={serie.show.officialSite}>
                <p><small>Official WebSite</small></p>
                </a>
                <p><small>Genres: {serie.show.genres}</small></p>
                <p><small>Summary: {serie.show.summary}</small></p>
                <p><small>State: {serie.show.status}</small></p>
            </Card>
            </Col>
            
            
        </div>
    )
}

export default Cards
