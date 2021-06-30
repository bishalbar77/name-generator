import React from 'react';
import './NameCard.css';

const NameCard = ({suggestedName}) => {
    return (
        <a className="card-link" href={`https://www.hostinger.in/domain-checker?domain=${suggestedName}&list=homepage-search`} target="_blank">
            <div className="result-name-card">
                <div className="result-name">
                    {suggestedName}
                </div>
            </div>
        </a>
    )
}

export default NameCard;