const Contact = () => (
    <div className="page">
      <h2>Contact Us</h2>
      <p>Have questions about sustainable energy or want to share your thoughts? Whether you're curious about 
        the technologies we showcase or have ideas for future innovations, we're here to connect.
        <br></br><br></br>
        Fill out the form below, and we'll get back to you as soon as possible. Together, we can power a 
        greener future!</p>
      <form action="mailto:x24172901@student.ncirl.ie?subject=EnergyInformation.net%20Contact%20Form" method="post" enctype="text/plain">
        <label>Name: <input type="text" name="Name " required /></label><br></br><br></br>
        <label>Email: <input type="email" name="Email " required /></label><br></br><br></br>
        <label>Message: <textarea name="Message " required></textarea></label><br></br><br></br>
        <button type="submit">Send</button>
      </form>
    </div>
  );
  
  export default Contact;
  