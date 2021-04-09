import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addArticle } from '../../action';
import { Container, Row, Col } from 'react-bootstrap';

const ArticleForm = (props) => {
  const [imgUrl, setImgUrl] = useState(null);
  const [articleText, setArticleText] = useState('');
  const [image, setImage] = useState(null);
  const setImgToUpload = (evt) => {
    setImgUrl(URL.createObjectURL(evt.target.files[0]));
    setImage(evt.target.files[0]);
  }
  const onChangeText = (evt) => {
    setArticleText(evt.target.value);
  }
  const addArticle = () => {
    props.addArticle({
      image: image,
      text: articleText
    })
    setImgUrl(null);
    setArticleText('');
    setImage(null);
  }
  return (
    <Container>
      <Row>
        <button className="btn-register" onClick={addArticle}>Regsiter Now</button>
      </Row>
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
          <textarea className="input-textarea" value={articleText} onChange={onChangeText} />
        </Col>
      </Row>
    </Container>
    
  )
}

export default connect ( null, { addArticle }) (ArticleForm);