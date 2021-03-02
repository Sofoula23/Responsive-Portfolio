import './Footer.css';

const Footer = ()  => {
 return (
  <footer className="footer fixed">
  <div className="container">
    <div className="row">
      <div className="col-l3-s12">
        <div className="container">
          <a href="https://linkedin.com"><i className="fa fa-linkedin-square fa-icon"></i></a>
          <a href="https://twitter.com"><i className="fa fa-twitter-square fa-icon"></i></a>
          <a href="https.facebook.com"><i className="fa fa-facebook-square fa-icon"></i></a>
          <a href="https:github.com"><i className="fa fa-github-square fa-icon"></i></a>
        </div>
      </div>
    </div>
  </div>
  <h6>Copyright &copy; 2021</h6>
</footer>
 )
}

export default Footer;