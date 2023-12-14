const TitlePage = ({ hide, handleEnter, handleAbout }) => {
  const pageHide = hide ? "hide" : "";
  return (
    <div className='screen-container'>
      <div className={`${pageHide} screen`}>
        <div>
          Indigenous Religious Traditions In <span className='emph'>2</span> Minutes{" "}
          <a href='https://www.equinoxpub.com/home/indigenous-religious-traditions5m/' target='_blank'>
            #
          </a>
        </div>
        <div className='title-screen-course'>Schermerhorn · AMST128 Indigenous Lifeways · Fall 2023</div>
        <div className='title-screen-credits'>
          By{" "}
          <a href='https://github.com/darenhua' target='_blank'>
            Daren Hua
          </a>
        </div>
        <div className='title-screen-button-group'>
          <button className='button-style' onClick={handleEnter}>
            Enter
          </button>
          <button className='button-style' onClick={handleAbout}>
            About
          </button>
        </div>
      </div>
    </div>
  );
};

export default TitlePage;
