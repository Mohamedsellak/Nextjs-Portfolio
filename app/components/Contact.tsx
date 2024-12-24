import React from 'react'

export default function Contact() {
  return (
    <section className="w-screen text-center p-10 bg-black" id="contact">
    <h3 className="text-lg font-bold">Get In Touch</h3>
    <h2 className="text-4xl font-bold text-purple-700">Contact Me</h2>

      <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-16 mt-24">
          <div className="lg:px-24">
              <h3 className="font-bold text-xl mb-10">Talk To Me</h3>

              <div className="flex items-center justify-center flex-col gap-3">
                  <div className="w-full rounded-lg bg-slate-950 border-b-purple-700 border-b-4  p-8">
                      <i className="fas fa-envelope text-2xl"></i>

                      <h3 className="font-bold text-xl">Email</h3>

                      <span className="contact_card-data">Mohamed._.sellak@hotmail.com</span>

                      <a href="mailto:Mohamed._.sellak@hotmail.com" className="flex items-center justify-center gap-3 text-purple-700 mt-4">
                          Write Me <i className="fas fa-arrow-alt-circle-right"></i>
                      </a>
                  </div>

                  <div className="w-full rounded-lg bg-slate-950 border-b-purple-700 border-b-4  p-8">
                      <i className="fa-brands fa-whatsapp text-2xl"></i>

                      <h3 className="font-bold text-xl">WhatsApp</h3>

                      <span className="contact_card-data">+212 696 165 421</span>

                      <a href="https://wa.me/qr/I6Q5NTXFMJYRO1" target="_blank" className="flex items-center justify-center gap-3 text-purple-700 mt-4">
                          Write Me <i className="fas fa-arrow-alt-circle-right"></i>
                      </a>
                  </div>

                  <div className="w-full rounded-lg bg-slate-950 border-b-purple-700 border-b-4  p-8">
                      <i className="fa-brands fa-linkedin text-2xl"></i>

                      <h3 className="font-bold text-xl">Linkedin</h3>

                      <span className="contact_card-data">Mohammed Sellak</span>

                      <a href="https://www.linkedin.com/in/mohammed-sellak" target="_blank" className="flex items-center justify-center gap-3 text-purple-700 mt-4">
                          Write Me <i className="fas fa-arrow-alt-circle-right"></i>
                      </a>
                  </div>
              </div>
          </div>

          <div className="lg:px-24">
              <h3 className="font-bold text-xl mb-10">Write Me Your Project</h3>
              
              <form className="contact_form pb-40">
                  <div className="contact_form-div">
                      <label htmlFor="" className="contact_form-tag text-xl text-purple-700 bg-black">Name</label>
                      <input type="text" placeholder="Insert Your Name" className="contact_form-input border border-purple-700" />
                  </div>

                  <div className="contact_form-div">
                      <label htmlFor="" className="contact_form-tag text-xl text-purple-700 bg-black">Mail</label>
                      <input type="email" placeholder="Insert Your Email" className="contact_form-input border border-purple-700" />
                  </div>

                  <div className="contact_form-div contact_form-area">
                      <label htmlFor="" className="contact_form-tag text-xl text-purple-700 bg-black">Project</label>
                      <textarea 
                          className="contact_form-input border border-purple-700"
                          placeholder="Write Your Project"
                          cols={30}
                          rows={10}
                      >
                      </textarea>
                  </div>

                  <button className="rounded-lg bg-purple-700 font-bold px-5 py-2 hover:bg-purple-800">Send Message</button>
              </form>
          </div>
      </div>

  </section>
  )
}
