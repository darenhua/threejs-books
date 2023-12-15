const AboutPage = ({ hide, handleReturn }) => {
  const pageHide = hide ? "hide" : "";

  return (
    <div className='screen-container'>
      <div className={`${pageHide} screen`}>
        <div className='about-screen-title'>About</div>
        <div className='about-screen-description'>
          This website is my final project for Indigenous Lifeways, a Hamilton College course taught by Prof. J. Seth Schermerhorn.
          Indigenous Lifeways is a course one book, edited by Molly H. Basset and Natalie Avalos, titled{" "}
          <a href='https://www.equinoxpub.com/home/indigenous-religious-traditions5m/'>"Indigenous Religious Traditions in 5 Minutes"</a>.
          It's a great book, and I highly recommend reading it to anyone interested. My website, titled "Indigenous Religious Traditions in
          2 Minutes" is a reference to this title. My website is a collection of the points made in the book that I've found most
          interesting, while adding my own perspective and notes on the things I've learned about "indigenous religious traditions"
          throughout the course. This is not a formal essay: view the content as my personal journal with my own opinions on these topis.
          <br />
          <br />
          Use this website by pressing "Enter" in the title screen (Click Return to go back to the title screen). Once in the main screen,
          click on the various <span className='emph'>topics</span> to scroll to them, and click on the <span className='emph'>book</span>{" "}
          to open my description of that topic. Refresh the page at any time to return to the title page. This website was developed using
          react-three-fiber and its excellent ecosystem.
        </div>
        <button className='button-style' onClick={handleReturn}>
          Return
        </button>
      </div>
    </div>
  );
};

export default AboutPage;
