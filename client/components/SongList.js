import React from 'react';
import Song from './Song';

export default (props) => {
  const {data} = props;

  return(
    <div className="App">
    
       {
        data.map((item, index) => {
          return(
            
            <Song 
              key={index}
              title = {item.result.title} 
            />
          )
        })
      }  
    </div>
  );
}

