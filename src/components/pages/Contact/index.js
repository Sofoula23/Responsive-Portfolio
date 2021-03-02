import "./Contact.css";

const ContactPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <form>
            <div className="mb-3">
              <h1>Contact</h1>
              <hr />
              <label for="exampleInputName" className="form-label">
                Name
              </label>
              <input
                type="Name"
                placeholder="Your Full Name Here"
                className="form-control"
                id="inputyourname"
                aria-describedby="nameHelp"
              />
              <div id="nameHelp" className="form-text"></div>
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail" className="form-label">
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                className="form-control"
                id="exampleInputEmail"
              />
            </div>
            <div className="mb-4">
              <label for="exampleInputMessage" className="form-label">
                Message
              </label>
              <textarea
                className="form-control lg"
                placeholder="Message"
                name="Message"
                id="exampleInputMessage"
                row="4"
              ></textarea>
            </div>

            <button id="submit" type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
          <br />
          <div className="container">
            <h3 id="contact">
              <strong>Contact me</strong>
            </h3>
            <h2>&hearts;</h2>
            <a id="email" href="mailto: sofimantas@gmail.com">
              Send Email
            </a>
            <br />
          </div>
          <h5>Phone number: (386)215-2021</h5> <br />
        </div>
      </div>
    </div>
  );
};
export default ContactPage;
