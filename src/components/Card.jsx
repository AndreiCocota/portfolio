import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/Card.scss';
import Zoom from 'react-reveal/Zoom';


function Card (props) {

    //working with ReactHooks 

    const [isHover, setIsHover] = useState(true);
    const [show, setShow] = useState(false);

    const hoverCard = () => setIsHover(false);
    const noHoverCard = () => setIsHover(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const webImages = [];
    let image= [];

    for (let i = 1 ; i <= props.numberOfPhotos; i++) {
        webImages.push(require('../portfolio-image/' + props.name + '/'  + i + '.png'));
        console.log(webImages);
    }


    return (
        <Zoom clear>
        <div className="card">
            <div style={isHover? {visibility:"hidden"} : {visibility:"visible"}  } className="website-title">
                 
                 <h4>{props.name}</h4>          

            </div>

            <img onMouseEnter={hoverCard} onMouseLeave={noHoverCard} onClick={handleShow}  className="website-img"src={props.img} alt="cardImage" />

            <Modal show={show} onHide={handleClose}  size="lg">
                        <Modal.Header closeButton>
                            <Modal.Title>{props.name}</Modal.Title>
                        </Modal.Header>
                <Modal.Body>

                    <Carousel>
                                     
                                    {webImages.map( (url, index) => (
                                        
                                        <Carousel.Item key={index}>
                                        <img 
                                         style= {{width: "100%"}}  
                                         src={url.default}
                                         alt="websitesImage"
                                         
                                          />
                                        </Carousel.Item>
                                    
                                        ) ) 
                                    
                                    }
                
                    </Carousel>




                </Modal.Body>

                <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                                        Close
                        </Button>
                       
                </Modal.Footer>
            </Modal>
                
        </div>
        </Zoom>
    )
}

export default Card;