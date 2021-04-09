import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ArticleForm = () => {
  const [imgUrl, setImgUrl] = useState(null);
  const setImgToUpload = (evt) => {
    setImgUrl(URL.createObjectURL(evt.target.files[0]));
  }
  return (
    <Container>
      <Row>
        <Col>
          <div>
            <label htmlFor="upload-button">
              {imgUrl ? (
                <img className="img-upload" src={imgUrl}/>
              ):(
                <div className="img-upload"/>
              )}
            </label>
            <input type="file" id="upload-button" style={{ display: "none" }} onChange={setImgToUpload}/>
          </div>
        </Col>
        <Col>
        
        </Col>
      </Row>
    </Container>
    
  )
}

export default ArticleForm;