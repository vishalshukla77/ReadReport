import React from 'react'
import { truncate } from '../../utils';

const EntImgs = ({ entNews }) => {
    return (
        <>
            <h2 className='entertainment__right-h2'>
                ETIMES PHOTOS &#62;
            </h2>
            <div className="entertainment__rightImages">
                {entNews && entNews.slice(6, 15).map(entNew => (
                    <a
                        key={entNew.id}
                        href={entNew.webUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="entertainment__rightImg-container">
                            <div>

                            <img
                                src={entNew.fields.thumbnail}
                                alt={entNew.webTitle}
                                />
                            </div>
                            {/* <h3 className="count">
                                <CropOriginalIcon className="img-icon" />
                                10
                            </h3> */}
                            
                            <p>
                                {truncate(entNew.webTitle, 25)}
                            </p>
                        </div>
                    </a>
                ))
                }
            </div>
        </>
    )
}

export default EntImgs
