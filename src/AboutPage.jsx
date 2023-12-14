const AboutPage = ({ hide, handleReturn }) => {
  const pageHide = hide ? "hide" : "";

  return (
    <div className='screen-container'>
      <div className={`${pageHide} screen`}>
        <div className='about-screen-title'>About</div>
        <div className='about-screen-description'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure totam reiciendis aliquam, unde velit similique enim ipsa eveniet
          sit consequatur, consectetur provident quidem adipisci fugiat cum esse suscipit incidunt architecto. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Quam ullam, fuga dolorem ab atque corrupti hic deleniti doloremque deserunt odio ea, veritatis magni
          doloribus, quaerat unde odit possimus voluptatum? Voluptates.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum perspiciatis iste earum veritatis distinctio nostrum consectetur.
          Sed voluptatem quas ab iure doloremque. Numquam obcaecati magni, laboriosam quasi ab corporis cupiditate! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Deserunt eaque nulla atque, ducimus ullam reiciendis recusandae minus dolorem ut similique
          harum, veniam dolorum eos itaque inventore aliquam amet porro enim!
        </div>
        <button className='button-style' onClick={handleReturn}>
          Return
        </button>
      </div>
    </div>
  );
};

export default AboutPage;
