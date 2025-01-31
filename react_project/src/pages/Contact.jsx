export const Contact = ()=>{
    const handleSubmit = (formData)=>{
        const data = Object.fromEntries(formData.entries());
        console.log(data);

    }
    return(<>
   <section className="section-contact">
    <h2 className="container-title">Contact us</h2>
<div className="contact-wrapper container">
<form action={handleSubmit}>
        <input
         type="text"
          name="username" 
          autoComplete="off"
          placeholder="enter your name"
          className="form-control"
          required
           />
        <input
         type="email"
          name="email" 
          autoComplete="off"
          placeholder="enter your email"
          className="form-control"
          required
           />

           <textarea 
           name="message"
           autoComplete="off"
           placeholder="Enter your message"
           className="form-control"
           rows="10" 
           required

           ></textarea>
           <button type="submit" value="send">send</button>
    </form>
</div>
   
   </section>
    </>)
}