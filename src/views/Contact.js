const Contact = () => (
    <div className="page">
      <h2>Get in Touch – Let’s Brew Some Conversation!</h2>
      <p>At Papillon Café, we believe the best connections start over coffee — whether you want to share your latest coffee obsession, spill the beans, or just want to perk our ears.
        <br></br><br></br>
        Drop us a message below, and we’ll get back to you faster than a pour-over drips. <br></br>(Okay, maybe not that fast, but we promise no one here sleeps on emails — too much espresso, you see.)</p>
      <form action="mailto:x24172901@student.ncirl.ie?subject=EnergyInformation.net%20Contact%20Form" method="post" enctype="text/plain">
        <label>Name: <input type="text" name="Name " required /></label><br></br><br></br>
        <label>Email: <input type="email" name="Email " required /></label><br></br><br></br>
        <label>Message: <textarea name="Message " required></textarea></label><br></br><br></br>
        <button type="submit">Send</button>
      </form>
    </div>
  );
  
  export default Contact;
  