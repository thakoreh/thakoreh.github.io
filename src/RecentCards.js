import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBView, MDBIcon } from 'mdbreact';
import ranger from './ranger.jpg';
const RecentCards = () => {
  return (
      <div style={{display:'flex'}}>
    <MDBRow style={{justifyContent:'center'}}>
      <br />
      <MDBCol md='10'>
        <MDBCard>
          <MDBCardImage
            hover
            overlay='white-light'
            className='card-img-top'
            src={ranger}
            alt='man'
          />

          <MDBCardBody cascade className='text-center'>
            <MDBCardTitle className='card-title'>
              <strong>Robo-Friends</strong>
            </MDBCardTitle>

            <p className='font-weight-bold blue-text'> Learning React Framework</p>

            <MDBCardText>
             It was my first attempt and was successfull learning React Framework and Thereafter I began to hone and advance my skills in it.{' '}
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    <MDBRow style={{justifyContent:'center'}}>
      <br />
      <MDBCol md='10'>
        <MDBCard>
          <MDBCardImage
            hover
            overlay='white-light'
            className='card-img-top'
            src={ranger}
            alt='man'
          />

          <MDBCardBody cascade className='text-center'>
            <MDBCardTitle className='card-title'>
              <strong>Robo-Friends</strong>
            </MDBCardTitle>

            <p className='font-weight-bold blue-text'> Learning React Framework</p>

            <MDBCardText>
             It was my first attempt and was successfull learning React Framework and Thereafter I began to hone and advance my skills in it.{' '}
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    </div>
  )
}

export default RecentCards;