import React from 'react';

function App() {
  const backgroundImagePath = process.env.PUBLIC_URL + '/upper.png';
  const boxImagePath = process.env.PUBLIC_URL + '/box.png';
  const climberImagePath = process.env.PUBLIC_URL + '/climber.png';
  const compoImagePath = process.env.PUBLIC_URL + '/compo.png';
  const compo2ImagePath = process.env.PUBLIC_URL + '/compo2.png';
  const scubaImagePath = process.env.PUBLIC_URL + '/scuba.png';
  const bungeeImagePath = process.env.PUBLIC_URL + '/bungee.png';
  const scubatextImagePath = process.env.PUBLIC_URL + '/scubatext.png';
  const bungeetextImagePath = process.env.PUBLIC_URL + '/bungeetext.png';
  const hourImagePath = process.env.PUBLIC_URL + '/hour.png';
  const clockImagePath = process.env.PUBLIC_URL + '/clock.png';
  const goaImagePath = process.env.PUBLIC_URL + '/goa.png';
  const smallImagePath = process.env.PUBLIC_URL + '/small.png';
  const small1ImagePath = process.env.PUBLIC_URL + '/small1.png';
  const small2ImagePath = process.env.PUBLIC_URL + '/small2.png';
  const small3ImagePath = process.env.PUBLIC_URL + '/small3.png';
  const kitchenImagePath = process.env.PUBLIC_URL + '/kitchen.png';
  const carImagePath = process.env.PUBLIC_URL + '/car.png';
  const cameraImagePath = process.env.PUBLIC_URL + '/camera.png';
  const mountainImagePath = process.env.PUBLIC_URL + '/mountain.png';
  const transportImagePath = process.env.PUBLIC_URL + '/transport.png';
  const snackImagePath = process.env.PUBLIC_URL + '/snack.png';
  const photoImagePath = process.env.PUBLIC_URL + '/photo.png';
  const activityImagePath = process.env.PUBLIC_URL + '/activity.png';
  const tailImagePath = process.env.PUBLIC_URL + '/tail.png';
  const underwaterImagePath = process.env.PUBLIC_URL + '/underwater.png';
  const sideImagePath = process.env.PUBLIC_URL + '/side.png';

  const boxImageStyle = {
    position: 'relative',
    display: 'inline-block',
    top: '20px',
    backgroundImage: `url(${boxImagePath})`,
    backgroundSize: '1000px 466px',
    backgroundRepeat: 'no-repeat',
    width: '1000px',
    height: '360px',
  };

  const climberImageStyle = {
    position: 'absolute',
    top: '2%',
    left: '1%',
    width: '26%',
    height: '96%',
    zIndex: 2,
  };

  const scubaImageStyle = {
    position: 'absolute',
    top: '4%',
    left: '28%',
    width: '18%',
    height: '42%',
    zIndex: 4,
  };


  const scubatextImageStyle = {
    position: 'absolute',
    top: '6%',
    left: '48%',
    width: '36%',
    height: '6.6%',
    zIndex: 4,
  };


  const bungeeImageStyle = {
    position: 'absolute',
    top: '54%',
    left: '28%',
    width: '18%',
    height: '42%',
    zIndex: 4,
  };

  const smallImageStyle = {
    position: 'absolute',
    top: '20%',
    left: '48%',
    width: '6%',
    height: '16%',
    zIndex: 4,
  };

  const small1ImageStyle = {
    position: 'absolute',
    top: '20%',
    left: '56%',
    width: '6%',
    height: '16%',
    zIndex: 4,
  };
  const small2ImageStyle = {
    position: 'absolute',
    top: '20%',
    left: '64%',
    width: '6%',
    height: '16%',
    zIndex: 4,
  };
  const small3ImageStyle = {
    position: 'absolute',
    top: '20%',
    left: '72%',
    width: '6%',
    height: '16%',
    zIndex: 4,
  };
  const sideImageStyle = {
    position: 'absolute',
    top: '4%',
    left:  '84.6%',
    width: '12.8%',
    height: '40%',
    zIndex: 5,
  };

  const kitchenImageStyle = {
    position: 'absolute',
    top: '22%',
    left: '50%',
    width: '2.6%',
    height: '8%',
    zIndex: 5,
  };
  const cameraImageStyle = {
    position: 'absolute',
    top: '22%',
    left:  '65.8%',
    width: '2.6%',
    height: '8%',
    zIndex: 5,
  };
  const mountainImageStyle = {
    position: 'absolute',
    top: '22%',
    left:  '73.8%',
    width: '2.6%',
    height: '8%',
    zIndex: 5,
  };

  const carImageStyle = {
    position: 'absolute',
    top: '22%',
    left:  '57.8%',
    width: '2.6%',
    height: '8%',
    zIndex: 5,
  };

  const snackImageStyle = {
    position: 'absolute',
    top: '32%',
    left:  '50%',
    width: '2.8%',
    height: '2%',
    zIndex: 5,
  };
  const transportImageStyle = {
    position: 'absolute',
    top: '32%',
    left:  '57.6%',
    width: '2.8%',
    height: '2%',
    zIndex: 5,
  };
  const photoImageStyle = {
    position: 'absolute',
    top: '32%',
    left:  '65.2%',
    width: '4%',
    height: '2%',
    zIndex: 5,
  };

  const activityImageStyle = {
    position: 'absolute',
    top: '32%',
    left:  '72.8%',
    width: '3.8%',
    height: '2%',
    zIndex: 5,
  };

  const hourImageStyle = {
    position: 'absolute',
    top: '14.2%',
    left: '51.2%',
    width: '4%',
    height: '4%',
    zIndex: 4,
  };

  const goaImageStyle = {
    position: 'absolute',
    top: '15.2%',
    left: '62%',
    width: '6%',
    height: '4%',
    zIndex: 4,
  };


  const clockImageStyle = {
    position: 'absolute',
    top: '14.2%',
    left: '50%',
    width: '1%',
    height: '4%',
    zIndex: 4,
  };

  const bungeetextImageStyle = {
    position: 'absolute',
    top: '58%',
    left: '48%',
    width: '24%',
    height: '6%',
    zIndex: 4,
  };


  const textContainerStyle = {
    position: 'absolute',
    top: '50%',
    left: '12%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    zIndex:3,
  };

  const textStyle = {
    color: 'white',
    fontSize: '24px',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    fontStyle: 'italic',
  };


  const compoImageStyle = {
    position: 'absolute',
    top: '-1%',
    left: '26.2%',
    width: '74.6%',
    height: '54.2%',
    zIndex: 3,
  };

  const compo2ImageStyle = {
    position: 'absolute',
    top: '49.2%',
    left: '26.2%',
    width: '74.6%',
    height: '54.2%',
    zIndex: 3,
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${backgroundImagePath})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '63px',
          position: 'fixed',
          top: '0',
          left: '0',
          zIndex: '9999',
          width: '100%',
        }}
      >
        <h1
          style={{
            color: 'white',
            fontSize: '24px',
            textAlign: 'center',
            margin: '10px',
            marginLeft: '-600px',
          }}
        >
          Universal Adventures
        </h1>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}
      >
        <div style={boxImageStyle}>
          <img
            src={climberImagePath}
            alt="Climber"
            style={climberImageStyle}
          />
<img
            src={compoImagePath}
            alt="Compo"
            style={compoImageStyle}
          />
<img
            src={compo2ImagePath}
            alt="Compo"
            style={compo2ImageStyle}
          />
          <img
            src={scubaImagePath}
            alt="scuba"
            style={scubaImageStyle}
          />
           <img
            src={scubatextImagePath}
            alt="scubatext"
            style={scubatextImageStyle}
          />

<img
            src={bungeeImagePath}
            alt="bungee"
            style={bungeeImageStyle}
          />
          
<img
            src={bungeetextImagePath}
            alt="bungeetext"
            style={bungeetextImageStyle}
          />
          <img
            src={hourImagePath}
            alt="hour"
            style={hourImageStyle}
          />

<img
            src={clockImagePath}
            alt="clock"
            style={clockImageStyle}
          />

<img
            src={goaImagePath}
            alt="goa"
            style={goaImageStyle}
          />

<img
            src={smallImagePath}
            alt="small"
            style={smallImageStyle}
          />

<img
            src={small1ImagePath}
            alt="small1"
            style={small1ImageStyle}
          />
          <img
            src={small2ImagePath}
            alt="small2"
            style={small2ImageStyle}
          />
          <img
            src={small3ImagePath}
            alt="small3"
            style={small3ImageStyle}
          />
          <img
            src={kitchenImagePath}
            alt="kitchen"
            style={kitchenImageStyle}
          />

<img
            src={carImagePath}
            alt="car"
            style={carImageStyle}
          />

<img
            src={cameraImagePath}
            alt="camera"
            style={cameraImageStyle}
          />
          <img
            src={mountainImagePath}
            alt="mountain"
            style={mountainImageStyle}
          />

<img
            src={snackImagePath}
            alt="snack"
            style={snackImageStyle}
          />
          <img
            src={transportImagePath}
            alt="transport"
            style={transportImageStyle}
          />
          <img
            src={photoImagePath}
            alt="photo"
            style={photoImageStyle}
          />
          <img
            src={activityImagePath}
            alt="activity"
            style={activityImageStyle}
          />
           <img
            src={sideImagePath}
            alt="side"
            style={sideImageStyle}
          />
          
          <div style={textContainerStyle}>
          <div style={textStyle}>
              Adventures<br />
              You must try<br />
              Before turning 30!
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
