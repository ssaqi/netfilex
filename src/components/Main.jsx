import React from 'react'
import Slider from './Slider'
import IMG1 from './assest/m1.jpg'
import IMG2 from './assest/m2.jpg'
import IMG3 from './assest/m3.jpg'
import IMG4 from './assest/m4.jpg'

function Main() {
  return (
    <>
    <Slider/>
   
   <br/><br/>

    <div className="container">


    <div className="row row-cols-1 row-cols-md-4 g-4">
  <div className="col">
    <div className="card">
      <img src={IMG1} className="card-img-top" alt="..."  height={'250px'} />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          This is a longer card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={IMG2} className="card-img-top" alt="..."  height={'250px'} />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          This is a longer card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={IMG3} className="card-img-top" alt="..."  height={'270px'} />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          This is a longer card with supporting text below as a natural lead-in
          to additional content.
        </p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={IMG4} className="card-img-top" alt="..." height={'250px'}  />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          This is a longer card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
      </div>
    </div>
  </div>
</div>
<br/>
<div className="row row-cols-1 row-cols-md-4 g-4">
  <div className="col">
    <div className="card">
      <img src={IMG1} className="card-img-top" alt="..."  height={'250px'} />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          This is a longer card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={IMG2} className="card-img-top" alt="..."  height={'250px'} />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          This is a longer card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={IMG3} className="card-img-top" alt="..."  height={'270px'} />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          This is a longer card with supporting text below as a natural lead-in
          to additional content.
        </p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={IMG4} className="card-img-top" alt="..." height={'250px'}  />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          This is a longer card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
      </div>
    </div>
  </div>
</div>

<br/>
<div className="row row-cols-1 row-cols-md-4 g-4">
  <div className="col">
    <div className="card">
      <img src={IMG1} className="card-img-top" alt="..."  height={'250px'} />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          This is a longer card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={IMG2} className="card-img-top" alt="..."  height={'250px'} />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          This is a longer card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={IMG3} className="card-img-top" alt="..."  height={'270px'} />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          This is a longer card with supporting text below as a natural lead-in
          to additional content.
        </p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={IMG4} className="card-img-top" alt="..." height={'250px'}  />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          This is a longer card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
      </div>
    </div>
  </div>
</div>
    </div>

    </>
  )
}

export default Main