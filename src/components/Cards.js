import React from 'react'
import '../css/bootstrap/bootstrap.css';

export function Cards(props) {

  const title = props.title || 'Cards';
  const images = props.imgs || ['img1.png', 'img2.png'];
  const headings = props.headings || ['heading1', 'heading2'];

  return (
        <div className="container px-4 py-4" id="cards">
          <h2 className="pb-2 border-bottom">{title}</h2>
          <div className="d-flex flex-wrap justify-content-between bg-body-tertiary p-5 rounded">

            {
            images.map((img, idx) => 
            <div className="card m-3" style={{width: '18rem'}}>
              <img src={`/imgs/${img}`} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">{headings[idx]}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>)
            }

          </div>
        </div>
  )
}
