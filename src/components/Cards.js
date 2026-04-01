import React, {useState} from 'react'
import '../css/bootstrap/bootstrap.css';
import {seedGenerator} from '../services/seido-helpers'

export function Cards(props) {

  const title = props.title || 'Cards';
  const images = props.imgs || ['img1.png', 'img2.png'];
  const headings = props.headings || ['heading1', 'heading2'];

  const seed = new seedGenerator();
  const initDescriptions = [...props.imgs].map(img => seed.latinSentences(4));



  const [clickCount, setClickCount] = useState(0);
  const [descriptions, setDescriptions] = useState(initDescriptions);
  

  const OnClickCard = e => {

    setClickCount(clickCount + 1);
  };
  const OnClickDescription = e => {
    const idx = e.target.dataset.idx;

    const newDescriptions = [...descriptions];
    newDescriptions[idx] = seed.latinSentences(4);
    setDescriptions(newDescriptions);
  };

  return (
        <div className="container px-4 py-4" id="cards">
          <h2 className="pb-2 border-bottom">{title}</h2>
          <h3>Nr of clicks: {clickCount}</h3>
          <div className="d-flex flex-wrap justify-content-between bg-body-tertiary p-5 rounded">

            {
            images.map((img, idx) => 
            <div className="card m-3" style={{width: '18rem'}}>
              <img src={`/imgs/${img}`} className="card-img-top" alt="..." onClick={OnClickCard}/>
              <div className="card-body" onClick={OnClickCard}>
                <h5 className="card-title">{headings[idx]}</h5>
                <p data-idx={idx} className="card-text" onClick={OnClickDescription}>{descriptions[idx]}</p>
                <a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>)
            }

          </div>
        </div>
  )
}
