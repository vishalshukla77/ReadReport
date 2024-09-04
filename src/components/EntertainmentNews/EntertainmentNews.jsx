import React, { useEffect, useState } from 'react'
import axios from 'axios';
import EntMain from './EntMain';
import EntOthers from './EntOthers';
import EntShorts from './EntShorts';
import EntImgs from './EntImgs';
import './EntertainmentNews.css'

const EntertainmentNews = (props) => {
    const baseURL = 'https://content.guardianapis.com'
    const apiKey = `api-key=${props.apikey}`

    const [entNews, setEntNews] = useState()

    const fetchEntNews = async() => {
        const dataEntNews = await axios.get(`${baseURL}/search?q=india&tag=film/film,tone/reviews&page-size=30&show-fields=thumbnail&${apiKey}`)

        // console.log(dataEntNews.data.response.results);

        setEntNews(dataEntNews.data.response.results)
    }

    useEffect(() => {
        fetchEntNews()
        // eslint-disable-next-line
    }, [])

    return (
        <div className="entertainment">
            <span className="double-dot-line"></span>
            <h1 className="entertainment__heading">
                Entertainment &#62;
            </h1>

            <div className="entertainment__wrapper">
                <div className="entertainment__left">
                    <div className="entertainment__leftMain">
                        <EntMain entNews={entNews} />
                        <EntOthers entNews={entNews} />

                    </div>
                    <EntShorts entNews={entNews}/>
                </div>
                <div className="entertainment__right">
                    <EntImgs entNews={entNews} />
                </div>
            </div>
        </div>
    )
}

export default EntertainmentNews