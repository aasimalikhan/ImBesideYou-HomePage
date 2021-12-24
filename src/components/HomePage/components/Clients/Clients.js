import React from 'react'
import './Clients.css'
import ClientCard from './components/ClientCard'

const imageData = [
    {
        image: 'https://static.wixstatic.com/media/be8e7d_01a8bbe688c4492fa17148b5e3765685~mv2.png/v1/fill/w_111,h_111,al_c,q_85,usm_0.66_1.00_0.01/education.webp',
    },
    {
        image: 'https://static.wixstatic.com/media/be8e7d_dbb3dbc3b9e04a8ab2a89062419a22a4~mv2.png/v1/fill/w_110,h_111,al_c,q_85,usm_0.66_1.00_0.01/mentalhealth.webp',
    },
    {
        image: 'https://static.wixstatic.com/media/be8e7d_f7a2ae362db94ecdb2e2f3072cef91b3~mv2.png/v1/fill/w_110,h_111,al_c,q_85,usm_0.66_1.00_0.01/hr.webp'
    },
    {
        image: 'https://static.wixstatic.com/media/be8e7d_a4866ab8dfb1420b910eaf3dc740758f~mv2.png/v1/fill/w_110,h_110,al_c,q_85,usm_0.66_1.00_0.01/others.webp'
    },
    {
        image: 'https://static.wixstatic.com/media/be8e7d_7874b121554c4d74ad1ae18b2ef4f3b8~mv2.png/v1/fill/w_94,h_77,al_c,q_85,usm_0.66_1.00_0.01/benesse.webp'
    },
    {
        image: 'https://static.wixstatic.com/media/be8e7d_a2624c975ace4f29a519f1e3420e4998~mv2.png/v1/fill/w_164,h_41,al_c,q_85,usm_0.66_1.00_0.01/lifeistech-logo.webp'
    },
    {
        image: 'https://static.wixstatic.com/media/be8e7d_57ee6d8b4665486895f81520b8f3d1d8~mv2.jpg/v1/fill/w_142,h_34,al_c,q_80,usm_0.66_1.00_0.01/hamamatsu%E3%82%88%E3%81%93.webp'
    },
    {
        image: 'https://static.wixstatic.com/media/be8e7d_9ca2914b868b4cf699a7041d3e3f9312~mv2.png/v1/fill/w_76,h_66,al_c,q_85,usm_0.66_1.00_0.01/%E3%83%9E%E3%82%A4%E3%83%8A%E3%83%92%E3%82%99.webp'
    },
    {
        image:'https://static.wixstatic.com/media/be8e7d_e2b5580cb51d46e2ab087b784e6492ff~mv2.png/v1/fill/w_126,h_30,al_c,q_85,usm_0.66_1.00_0.01/az.webp'
    },
    {
        image: 'https://static.wixstatic.com/media/be8e7d_f92255f1946342248f186272e998b1dd~mv2.png/v1/fill/w_79,h_33,al_c,q_85,usm_0.66_1.00_0.01/cork.webp'
    },
    {
        image:'https://static.wixstatic.com/media/be8e7d_ab5d3b92a05243048b807c54a60449b9~mv2.png/v1/fill/w_156,h_34,al_c,q_85,usm_0.66_1.00_0.01/banzan.webp'
    },
    {
        image: 'https://static.wixstatic.com/media/be8e7d_3af274fa2b8c43ec9717d954c87620b0~mv2.png/v1/fill/w_111,h_111,al_c,q_85,usm_0.66_1.00_0.01/sales.webp'
    },
    {
        image:'https://static.wixstatic.com/media/be8e7d_ca8e857e74c24693aea6d58e8fbbaa2d~mv2.png/v1/fill/w_71,h_59,al_c,q_85,usm_0.66_1.00_0.01/bjit.webp'
    },
    {
        image: 'https://static.wixstatic.com/media/be8e7d_21b3defafcf542e6b9793f9de32b8c77~mv2.png/v1/fill/w_49,h_64,al_c,q_85,usm_0.66_1.00_0.01/one.webp'
    },
    {
        image:'https://static.wixstatic.com/media/be8e7d_f6bbcdde747c47588aba2d9722ab7f29~mv2.png/v1/fill/w_121,h_17,al_c,q_85,usm_0.66_1.00_0.01/studylab.webp'
    },
    {
        image: 'https://static.wixstatic.com/media/be8e7d_401fced7e77448688357f620984b9e84~mv2.png/v1/fill/w_126,h_26,al_c,q_85,usm_0.66_1.00_0.01/willseed.webp'
    },
    {
        image:'https://static.wixstatic.com/media/be8e7d_8ec370a888ea4e588499c1720b32b6b5~mv2.png/v1/fill/w_116,h_30,al_c,q_85,usm_0.66_1.00_0.01/nexway.webp'
    },
    {
        image: 'https://static.wixstatic.com/media/be8e7d_47d87e0a898348a6bdf359719ca52ff7~mv2.jpeg/v1/fill/w_65,h_60,al_c,q_80,usm_0.66_1.00_0.01/%E3%83%93%E3%82%B8%E3%83%8D%E3%82%B9%E3%82%B3%E3%83%BC%E3%83%81%E3%83%AD%E3%82%B4.webp'
    },
    {
        image:'https://static.wixstatic.com/media/be8e7d_f974786a5c404af08d24ecc5262a19c3~mv2.png/v1/fill/w_120,h_33,al_c,q_85,usm_0.66_1.00_0.01/nmp-logo.webp'
    },
    {
        image: 'https://static.wixstatic.com/media/be8e7d_74ea1ba1caf846a48d136720be970950~mv2.png/v1/crop/x_20,y_0,w_337,h_120/fill/w_112,h_41,al_c,q_85,usm_0.66_1.00_0.01/%E3%82%B9%E3%82%BF%E3%82%B9%E3%82%BF.webp'
    },
    {
        image:'https://static.wixstatic.com/media/be8e7d_56b051ec6eea477d9d47e46ab46dfd35~mv2.png/v1/fill/w_87,h_55,al_c,q_85,usm_0.66_1.00_0.01/swing.webp'
    },
]

function Clients() {
    return (
        <div className='client-container'>
            <p className='app-heading'>Our Clients</p>
            <div className='client-images-container'>
                {imageData.map((img)=>{
                    return (<ClientCard src={img.image}/>)
                })}
            </div>
        </div>
    )
}

export default Clients
