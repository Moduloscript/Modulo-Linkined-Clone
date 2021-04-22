import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FibreManualRecordIcon from '@material-ui/icons/FiberManualRecord'

function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className='widgets__article'>
            <div className='widgets__articleLeft'>
              <FibreManualRecordIcon />
                
            </div>
            <div className='widgets__articleRight'>
                <h4>
                 {heading}
                    <p>{subtitle }</p>
                </h4>
           </div> 

          
        </div>
        

    )
    
    return (
        <div className="widgets">
            <div className='widgets__header'>

                <h2>
                    LinkedIn News
                     <InfoIcon />
                     
                </h2>
            </div>
            { newsArticle ('Cypressio News updated', 'Gabstby Workshop and Graphql- 990,789 Updates') }
            { newsArticle('#Endsars Protesters In Lekki', 'Inflation Reaches All Time Index of 98% ')}
            { newsArticle('President Buhari in London Admist Covid 19', 'Modulo on Javascript Essential Today')}
            { newsArticle('Frontend 100 Days of code Journey ','Prisma Codegen Secrets ')}
        </div>
        
    )
}

export default Widgets
