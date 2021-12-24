import React from 'react'
import NewsCard from './NewsComponents/NewsCard'
import './News.css'
import Fade from 'react-reveal'
// import {Link} from 'react-router-dom'

//The below data can be fetched from a database.
//I am using static data
const NewsData = [
    {
        date: new Date(2021,12,2),
        type: '[Event/Awards]',
        title: '',
        description: 'Our CTO,Yasuhiro Nose was selected "CTO of the year" at TechCrunch Japan.',
        link: 'https://prtimes.jp/main/html/rd/p/000000032.000066162.html'
    },
    {
        date: new Date(2021,11,29),
        type: '[Events/Exhibitions]',
        title: '',
        description: '[Japan-India collaboration] MOU concluded with Indian Institute of Technology Hyderabad. Promoting joint research and co-creation in the fields of image, sound, psychology, and design.',
        link: 'https://prtimes.jp/main/html/rd/p/000000032.000066162.html'
    },
    {
        date: new Date(2021,12,2),
        type: '[Event / Awards]',
        title: '',
        description: 'Our CTO,Yasuhiro Nose was selected "CTO of the year" at TechCrunch Japan.',
        link: 'https://prtimes.jp/main/html/rd/p/000000032.000066162.html'
    },
    {
        date: new Date(2021,11,1),
        type: '[Awards / Selection]',
        title: '',
        description: 'Won at CIC Pitch in CIC Tokyo 1 year anniversary event.',
        link: 'https://prtimes.jp/main/html/rd/p/000000032.000066162.html'
    },
    {
        date: new Date(2021,11,29),
        type: '[Events/Exhibitions]',
        title: '',
        description: '[Japan-India collaboration] MOU concluded with Indian Institute of Technology Hyderabad. Promoting joint research and co-creation in the fields of image, sound, psychology, and design.',
        link: 'https://prtimes.jp/main/html/rd/p/000000032.000066162.html'
    },
    {
        date: new Date(2021,12,2),
        type: '[Event / Awards]',
        title: '',
        description: 'Our CTO,Yasuhiro Nose was selected "CTO of the year" at TechCrunch Japan.',
        link: 'https://prtimes.jp/main/html/rd/p/000000032.000066162.html'
    },
    {
        date: new Date(2021,10,11),
        type: '[News]',
        title: '',
        description: 'Featured in Times of India about our collaboration with Mr.Anand Kumar.',
        link: 'https://prtimes.jp/main/html/rd/p/000000032.000066162.html'
    },
    {
        date: new Date(2021,10,11),
        type: '[Awards / Selection]',
        title: '',
        description: 'Selected Global TOP100 of Entrepreneurship World Cup from 100,000 companies in 200 countries.',
        link: 'https://prtimes.jp/main/html/rd/p/000000032.000066162.html'
    },
    {
        date: new Date(2021,10,6),
        type: '[News]',
        title: '',
        description: 'Featured in Asahi about our collaboration with IIT.',
        link: 'https://prtimes.jp/main/html/rd/p/000000032.000066162.html'
    },
    {
        date: new Date(2021,10,11),
        type: '[News]',
        title: '',
        description: 'Featured in Times of India about our collaboration with Mr.Anand Kumar.',
        link: 'https://prtimes.jp/main/html/rd/p/000000032.000066162.html'
    },
    {
        date: new Date(2021,10,11),
        type: '[Awards / Selection]',
        title: '',
        description: 'Selected Global TOP100 of Entrepreneurship World Cup from 100,000 companies in 200 countries.',
        link: 'https://prtimes.jp/main/html/rd/p/000000032.000066162.html'
    },
    {
        date: new Date(2021,10,6),
        type: '[News]',
        title: '',
        description: 'Featured in Asahi about our collaboration with IIT.',
        link: 'https://prtimes.jp/main/html/rd/p/000000032.000066162.html'
    },
    

]

function News() {
    return (
        <Fade bottom>
        <div className='news-container'>
            <h1 className='app-heading'>News</h1>
            <div className='news-list-container'>
                {NewsData.map((news) => {
                    return (<NewsCard date={`${news.date.getFullYear()}.${news.date.getMonth()}.${news.date.getDate()}`} type={news.type} description={news.description} link={news.link}/>)
                })}
            </div>
        </div>
        </Fade>
    )
}

export default News
