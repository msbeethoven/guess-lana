import React from 'react';

const Song = (props) => {
  const song = props;
  console.log('sdfdjs',song)
  return (
    
    <div className="App">
      <h3>{song.title}</h3>
    </div>
  )
}



export default Song;