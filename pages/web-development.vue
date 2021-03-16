<template>
  <div>
    <div>
      <section>
        <div class="about-header">
          <div class="about-header_title">
            <h2>
              How we are working
              <img class="text-img" src="/about/common_questions.png" alt="" />
            </h2>
          </div>
        </div>
      </section>
      <section class="about-body">
        <div class="text-center section-title">
          <h2>Web Development</h2>
        </div>
        <div class="development-section">
          <div class="development-section_item">
            <div class="info">
              <div class="title">Research and Insight</div>
              <div class="text">
                At Dainty, we believe your website is your biggest digital asset. We follow
                carefully our principles and processors to build your website exactly how you
                envision it.
                <ul>
                  <li>
                    We learn - listening and understanding your brand, your vision and your ideas.
                  </li>
                  <li>We plan - mapping out ideas and thoughts onto a wireframe</li>
                  <li>
                    We research - making sure we have the latest technology and framework that is
                    best suited for your website needs.
                  </li>
                  <li>We build - where things start coming to life</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="development-section_item">
            <img src="/web-development/1.jpg" alt="" />
          </div>
        </div>
        <div class="development-section">
          <div class="development-section_item">
            <img src="/web-development/2.png" alt="" />
          </div>
          <div class="development-section_item">
            <div class="info">
              <div class="title">UI/UX Design</div>
              <div class="text">
                With the team at Dainty, we have world class designers and developers that will work
                hand in hand with the scrum master to develop the most marketable and user friendly
                website. Sometimes the best is stepping away professionally and looking in the
                perspective of a user. Extensive revision will be utilised to make sure we have a
                product that has perfect persona & branding definition, user experience flow and
                site-mapping.
                <br />
                <br />
                The user interface mantra we go off by is “a UI is like a joke, if you have to
                explain it, it's not good”. Beautifully designed, simple solutions that make sense.
              </div>
            </div>
          </div>
        </div>
        <div class="development-section">
          <div class="development-section_item">
            <div class="info">
              <div class="title">Development</div>
              <div class="text">
                We understand that for this process to go smoothly, communication is paramount.
                Throughout the journey of development, we will test, demo, get your thoughts, build,
                test and repeat. We want you to be as involved as much as our development team is to
                ensure the product you paid for exceeds your expectations. We work with all major
                open source CMS, eCom platforms and web application framework. You choose, we do.
              </div>
            </div>
          </div>
          <div class="development-section_item">
            <img src="/web-development/3.jpg" alt="" />
          </div>
        </div>
        <div class="development-section">
          <div class="development-section_item">
            <img src="/web-development/4.png" alt="" />
          </div>
          <div class="development-section_item">
            <div class="info">
              <div class="title">Evolve</div>
              <div class="text">
                Our main objective is to hand you a MVP (minimal viable product) as fast as we can
                so you can deploy your business. This stage does not end our relationship there, we
                have ongoing meetings and discussions with you to make sure your digital asset is
                constantly evolving with the fast pace of technology. We want you to have the best
                possible product and are more than happy to make any changes to your design.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "WebDevelopment",
}
</script>

<style lang="scss">
.development-section {
  display: flex;
  @screen md {
    flex-direction: column;
  }
  .development-section_item {
    width: 50%;
    height: auto;
    align-self: center;
    margin: 30px 0;
    padding: 20px;
    @screen md {
      width: 100%;
      margin: 10px 0;
    }
    .info {
      width: 90%;
      margin-right: auto;
      @screen md {
        width: 100%;
        margin-right: 0;
      }
      .title {
        font-size: 1.1rem;
        font-weight: 600;
        margin-bottom: 10px;
        color: var(--dark-color);
      }
      .text {
        ul {
          margin: 10px;
          li {
            padding: 0 5px;
            border-bottom: none;
            &:before {
              content: "📌";
            }
          }
        }
      }
    }
  }
  &:nth-child(odd) {
    @screen md {
      flex-direction: column-reverse;
    }
    .development-section_item {
      .info {
        margin-right: 0;
        margin-left: auto;
        @screen md {
          margin-left: 0;
        }
      }
    }
  }
}
</style>
