import React from 'react'

//Component and CSS Import
import './Team.css'
import TeamCard from './components/TeamCard'

//The below data can be fetched from an API.
// Data (Team Details)
const dataForTeam = [
    {
        name: 'Shozo Kamiya',
        image: 'https://static.wixstatic.com/media/be8e7d_333bec9ec9df4a528161b57abd942b29~mv2.png/v1/fill/w_260,h_262,al_c,q_85,usm_0.66_1.00_0.01/%E4%BB%A3%E8%A1%A8%E3%83%A1%E3%83%83%E3%82%BB%E3%83%BC%E3%82%B7%E3%82%99%E5%86%99%E7%9C%9F.webp',
        about: [
            'Kobe University Bachelor of Economics',
            'Planned, launched SaaS businesses at NTTData',
            'Engaged in M&A and alliances at NTT Docomo, led investments for startups',
            'Co-founding member of TimeLeap Academy, an online entrepreneurship education for elementary, middle and high school students'
        ]
    },
    {
        name: 'Kotaro Ando',
        image: 'https://static.wixstatic.com/media/be8e7d_d1e144e317f14d59b0cd62e53395d1d6~mv2.png/v1/crop/x_0,y_10,w_506,h_496/fill/w_260,h_248,al_c,q_85,usm_0.66_1.00_0.01/be8e7d_d1e144e317f14d59b0cd62e53395d1d6~mv2.webp',
        about: [
            'Kyushu University Faculty of Science, Graduate school of science',
            'Engaged in the development of services using video and AI, mainly in the media industry at NTTData',
            'Development of hybrid AI and multimodal AI that combines various types of AI and optimal results. System architect with a deep knowledge of the SaaS business.'
        ]
    },
    {
        name: 'Yasuhiro Nose',
        image: 'https://static.wixstatic.com/media/be8e7d_85f5570a76d3443cb0664a28c6013fde~mv2.png/v1/fill/w_260,h_264,al_c,q_85,usm_0.66_1.00_0.01/be8e7d_85f5570a76d3443cb0664a28c6013fde~mv2.webp',
        about: [
            'Osaka University Graduate School of Information Science and Technology',
            'Built the AI business for all three Japanese mobile carriers and was responsible for projects such as image and voice recognition in robots',
            'A full-stack engineer with the ability to perform a wide range of tasks from front-end to back-end.'
        ]
    },
    {
        name: 'Minoru Nakahata',
        image: 'https://static.wixstatic.com/media/be8e7d_d5650a0f7bfb4b0f949904daef53c06f~mv2.png/v1/crop/x_0,y_10,w_574,h_514/fill/w_300,h_264,al_c,q_85,usm_0.66_1.00_0.01/be8e7d_d5650a0f7bfb4b0f949904daef53c06f~mv2.webp',
        about: [
            'Graduated from Yokohama City Graduate School (Master of Science)',
            'In 2011, passed patent attorney bar examination, and engaged in both foreign and domestic cases at a patent office. Joined Colopl (a mobile game) in 2013.',
            'Structured in-house invention and creation to dramatically increase the number of patent applications'
        ]
    }
]

function Team() {
    return (
        <div className='team-container'>
            <p className='app-heading'>Team</p>
            <div className='team-details-container'>
                {
                    dataForTeam.map((member) => {
                        return (<TeamCard image={member.image} name={member.name} about={member.about} />)
                    })
                }
            </div>
            <div className='client-images-container'>
            </div>
        </div>
    )
}

export default Team

