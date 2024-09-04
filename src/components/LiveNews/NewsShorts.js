import React from 'react'
import { truncate } from '../../utils'
const NewsShorts = ({ liveNews }) => {
    return (
        <div className="newsShorts">
        {liveNews && liveNews.slice(20, 39).map(liveShorts => (
            <ul key={liveShorts.id} className="newsShorts__single">
                <li>
                    <a 
                        href={liveShorts.webUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <span>{truncate(liveShorts.webTitle, 55)}</span>
                    </a>
                </li>
            </ul>
        ))
        }
        </div>
    )
}

export default NewsShorts