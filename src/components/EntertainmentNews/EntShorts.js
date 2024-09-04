import React from 'react'
// import { truncate } from '../../utils'
const EntShorts = ({ entNews }) => {
    return (
        <div className="entertainment__leftShorts">
        {entNews && entNews.slice(15, 27).map(entNew => (
            <ul key={entNew.id} className="entertainment__leftBottom-ul">
                <li>
                    <a 
                        href={entNew.webUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <span>{entNew.webTitle}</span>
                    </a>
                </li>
            </ul>
        ))
        }
        </div>
    )
}

export default EntShorts