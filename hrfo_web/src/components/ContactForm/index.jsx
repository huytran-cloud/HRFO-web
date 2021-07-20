import React from 'react'

export default function ContactForm() {
    return (
        <section id="contact" class="s-contact">
      <div class="overlay"></div>
      <div class="contact__line"></div>

      <div class="row section-header" data-aos="fade-up">
        <div class="col-full">
          <h3 class="subhead">Contact Us</h3>
          <h1 class="display-2 display-2--light">
            Reach out for some info or just to say hello
          </h1>
        </div>
      </div>

      <div class="row contact-content" data-aos="fade-up">
        <div class="contact-primary">
          <h3 class="h6">Send Us A Message</h3>

          <form
            name="contactForm"
            id="contactForm"
            method="post"
            action=""
            novalidate="novalidate"
          >
            <fieldset>
              <div class="form-field">
                <input
                  name="contactName"
                  type="text"
                  id="contactName"
                  placeholder="Your Name"
                  value=""
                  minlength="2"
                  required=""
                  aria-required="true"
                  class="full-width"
                />
              </div>
              <div class="form-field">
                <input
                  name="contactEmail"
                  type="email"
                  id="contactEmail"
                  placeholder="Your Email"
                  value=""
                  required=""
                  aria-required="true"
                  class="full-width"
                />
              </div>
              <div class="form-field">
                <input
                  name="contactSubject"
                  type="text"
                  id="contactSubject"
                  placeholder="Subject"
                  value=""
                  class="full-width"
                />
              </div>
              <div class="form-field">
                <textarea
                  name="contactMessage"
                  id="contactMessage"
                  placeholder="Your Message"
                  rows="10"
                  cols="50"
                  required=""
                  aria-required="true"
                  class="full-width"
                ></textarea>
              </div>
              <div class="form-field">
                <button class="full-width btn--primary">Submit</button>
                <div class="submit-loader">
                  <div class="text-loader">Sending...</div>
                  <div class="s-loader">
                    <div class="bounce1"></div>
                    <div class="bounce2"></div>
                    <div class="bounce3"></div>
                  </div>
                </div>
              </div>
            </fieldset>
          </form>

          <div class="message-warning">
            Something went wrong. Please try again.
          </div>

          <div class="message-success">
            Your message was sent, thank you!<br />
          </div>
        </div>

        <div class="contact-secondary">
          <div class="contact-info">
            <h3 class="h6 hide-on-fullwidth">Contact Info</h3>

            <div class="cinfo">
              <h5>Where to Find Us</h5>
              <p>
                Số 10 Ngõ 36<br />
                Nguyễn Viết Xuân, Thanh Xuân<br />
                Hà Nội, Việt Nam
              </p>
            </div>

            <div class="cinfo">
              <h5>Email Us At</h5>
              <p>hrfo@gmail.com<br /></p>
            </div>

            <div class="cinfo">
              <h5>Call Us At</h5>
              <p>Mobile: (+84) 971 425 766<br /></p>
            </div>

            <ul class="contact-social">
              <li>
                <a href="https://www.facebook.com/hrfowherewefightforourrights"
                  ><i class="fa fa-facebook" aria-hidden="true"></i
                ></a>
              </li>
              <li>
                <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
              </li>
              <li>
                <a
                  href="https://instagram.com/hrfo_humanrightsfighters?utm_medium=copy_link"
                  ><i class="fa fa-instagram" aria-hidden="true"></i
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    )
}
