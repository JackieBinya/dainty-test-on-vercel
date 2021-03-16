<template>
  <div class="about-body_section">
    <div class="section-title">
      <h2>Terms Of Service</h2>
    </div>
    <div class="about-list_header">The language in this document</div>
    <div class="about-list_description">
      Although we like to be as human as possible, some of the below points are worded in a way that
      cannot be written how we’d like, due to legal reasons for both parties… If you've done work
      with us you know that we don't like sounding highly professional, so this terms of service
      does hurt our soul a little bit but it’s necessary.
    </div>
    <ul class="about-list">
      <li class="collapsible-item">
        <div class="collapsible-button" @click="collapseToggle(0)">
          We`re a service, not a product
          <collapse-button></collapse-button>
        </div>
        <div class="collapsible-content">
          When you join Dainty, you're not paying for a product, a logo, a website mockup, a certain
          design, or a particular piece of stationery. You're paying for the use of our team who
          will provide digital products to you.
          <br /><br />
          However, design is incredibly subjective.
          <br /><br />
          You're entitled to request a revision after revisions from our designers within the
          limitations of your selected plan, however, we may not be the right flavor for everyone!
          We do our best to ensure you're happy and that's why we allow for ongoing concepts and
          revision, however, if at any point you feel that we're not meeting your vision, you're
          more than welcome cancel your membership.
          <br /><br />
          Unlike a lot of design companies out there that charge per concept or per revision, we're
          not here to rip anyone off. Hence it being a subscription based model until you're 100%
          thrilled.
          <br /><br />
          Therefore, each membership payment is deemed as services rendered.
        </div>
      </li>
      <li class="collapsible-item">
        <div class="collapsible-button" @click="collapseToggle(1)">
          Payments & billing
          <collapse-button></collapse-button>
        </div>
        <div class="collapsible-content">
          <div class="about-list_header">Date of billing</div>
          <div class="about-list_description">
            Payments for active subscribers happen on the same date every month unless the sign up
            date was on the 31st and the debit date falls on a month that does not have 31 days -
            then the debit will occur on the last business date of the month.
          </div>
          <div class="about-list_header">Cancellations</div>
          <div class="about-list_description">
            All requests for cancellation must be submitted a minimum of
            <strong>three days</strong> before the billing date.<br /><br />Subscriptions are
            debited on the same date monthly - within 24 hours of the same date of sign up. Prior to
            cancellation we recommend you have all the files you need to move forward with another
            designer to you by our support staff. Once a subscription has been canceled, any files
            kept on our server related to that subscription will be removed immediately.
            <br /><br />
            Cancellations cannot be for a future date.
            <br /><br />
            When a subscription has been canceled, any service provided by Dainty will be
            immediately suspended and/or canceled until the subscription has been renewed. This is
            inclusive of any pending jobs, tasks, revisions, hosting and support.
          </div>
          <div class="about-list_header">Canceling outside of business hours</div>
          <div class="about-list_description">
            If a cancellation happens outside of business hours, the cancellation takes effect upon
            the next operating business day. Cancellation requests must be made at least a business
            day before payment is due. Upon cancellation, any files of the clients kept on our
            server will be removed. <br /><br />
            It's the client's responsibility to ask for all needed files prior to their subscription
            being canceled, and to download any files from the links given to them previously.
          </div>
          <div class="about-list_header">Past due subscriptions</div>
          <div cclass="about-list_description">
            If a subscription becomes past due, any pending projects and revisions will be halted
            until the subscription has been reactivated by a successful debit.
          </div>
          <div class="about-list_header">Declining Payments</div>
          <div class="about-list_description">
            If your subscription payment becomes past due, the debit attempts will happen
            intermittently until the subscription payment attempt is successful or canceled. Once
            the overdue payment is successful the debit will continue as normal on the same date as
            the initial sign up.
          </div>
          <div class="about-list_header">If you don`t use it you lose it</div>
          <div class="about-list_description">
            Payments are recurring regardless of how much or how little you use the service. Think
            of it as an unlimited phone plan - just because you didn't use it doesn't mean you don't
            have a phone bill.
          </div>
          <div class="about-list_header">Pausing of memberships</div>
          <div class="about-list_description">
            At this point in time we do not offer the ability for pausing memberships, however you
            can cancel your subscription and re-join at any point in time at the current plan rates.
            <br /><br />

            Alternatively, if you're going to be away for a bulk period of time, you're more than
            welcome to give us a bulk amount of tasks to be distributed over that period of time.
          </div>
          <div class="about-list_header">Zombie apocalypse</div>
          <div class="about-list_description">
            In the event that you become a Zombie, we're not liable for if you're unable to stop any
            of your recurring payments, you're more than welcome to continue utilizing our services
            as long as you do not cause any harm ourselves, staff, clients or any penguins.
          </div>
        </div>
      </li>
      <li class="collapsible-item">
        <div class="collapsible-button" @click="collapseToggle(2)">
          Communication & support
          <collapse-button></collapse-button>
        </div>
        <div class="collapsible-content">
          <div class="about-list_header">Response Time</div>
          <div class="about-list_description">
            We endeavor to respond to our clients within 24 business hours.
          </div>
          <div class="about-list_header">Requests outside business hours</div>
          <div class="about-list_description">
            Any revisions sent by clients will be commenced to within 24 hour of receipt, during the
            business hours of 0900 to 1700 AEST (excluding weekends or public holidays). Meaning
            anything sent outside of the aforementioned business hours will not be attended to until
            the following business day. <br /><br />
            Meaning officially the job request was received on the next business day.
          </div>
          <div class="about-list_header">Communication channels</div>
          <div class="about-list_description">
            Intercom is currently our preferred method of communication for any matters including
            tasks and revision. We will respond to emails as well but response times will be longer
            than those on Intercom. <br /><br />
            Also, we cannot promise that revisions or requests will not be missed if you’re using
            email, especially if these are spread over multiple e-mails and various project
            revisions are mentioned inside an unrelated email.
          </div>
          <div class="about-list_header">Igloo</div>
          <div class="about-list_description">
            We're in the process of building a backend client portal for job submissions (and much
            more!) called Igloo. This will have a communication channel built into one portal for
            your convenience.
          </div>
          <div class="about-list_header">Phone Support</div>
          <div class="about-list_description">
            We do not offer phone support as this does not fit into our efficiency model. However,
            we can organize to have online discussions and meetings if required at a particular
            time.
          </div>
          <div class="about-list_header">Time Off</div>
          <div class="about-list_description">
            We’re an Australian company and we take Australian national holidays off.
          </div>
          <div class="about-list_header">This includes:</div>
          <div class="about-list_header">Christmas Break</div>
          <div class="about-list_description">
            We’re always off between 23rd of December until January 2nd unless those dates fall on a
            weekend and/or there’s a public holiday pushed forward, then we will return to work on
            the following business day.
          </div>
        </div>
      </li>
      <li class="collapsible-item">
        <div class="collapsible-button" @click="collapseToggle(3)">
          File Sharing
          <collapse-button></collapse-button>
        </div>
        <div class="collapsible-content">
          <div class="about-list_description">
            Pretty please learn Dropbox or another file sharing tool, you’ll love yourself for it,
            once you start using it, you’ll never go back!
          </div>
          <div class="about-list_description">
            We cannot promise emails are received if you’re sending attachments.
          </div>
          <div class="about-list_description">
            Because some email servers will automatically pop it in Spam folders
          </div>
          <div class="about-list_description">
            Sometimes the email won’t even be received if the file size is too large and sometimes
            no one will even be notified that the email was blocked by your server
          </div>
          <div class="about-list_description">
            Your hosting provider’s fair use policy and your server space - some hosting companies
            that say you have unlimited hosting space, in fact, don’t give you unlimited hosting
            space, and the attachments you send through contribute to your server space which your
            hosting company won’t like. Considering you may be with us for some time, each file you
            send will be contributing to your server space which and one day you may discover that
            you in fact don’t haven’t been given unlimited server space!
          </div>
          <div class="about-list_description">
            We recommend sending shareable Dropbox links pasted into the email’s body, this takes
            away the risk of emails being stopped by Spam filters due to email size and also frees
            up your own email space.
          </div>
          <div class="about-list_header">
            Why shareable links and not just invite one email address to view the file?
          </div>
          <div class="about-list_description">
            Because if you give access to only one person, then we can’t share the link with our
            team and that then puts us back at the start of sending attachments. 🙂 Shareable links
            are an amazing resource. Please, just trust us on this one.
          </div>
          <div class="about-list_header">File keeping:</div>
          <div class="about-list_description">
            If you cancel your service or let your subscription lapse, we keep your files on our
            server for 72 hours. Due to the large volume of clients, we cannot hold files beyond
            this time. <br /><br />
            Please ensure you download and save all files properly upon us sending them or ensure
            you have done so before canceling.
          </div>
        </div>
      </li>
      <li class="collapsible-item">
        <div class="collapsible-button" @click="collapseToggle(4)">
          Timeframes
          <collapse-button></collapse-button>
        </div>
        <div class="collapsible-content">
          <div class="about-list_header">Revisions and additional concepts:</div>
          <div class="about-list_description">
            You can have as many revisions as you like until you’re happy! 🙂 It’s important to
            understand, that as long as you’re making revisions, the time-frame of having an end
            digital product is going to be stretched out.
          </div>
          <div class="about-list_description">Typical Turnaround Times:</div>
          <div class="about-list_header">Initial design concept:</div>
          <div class="about-list_description">2-3 business days for the majority of tasks</div>
          <div class="about-list_header">Design revision:</div>
          <div class="about-list_description">1-2 business days</div>
          <div class="about-list_header">Cooperation</div>
          <div class="about-list_description">
            This is a joint relationship with an equal share of responsibility. <br /><br />
            The more responsive you are, and the more cooperative you are, the faster things can
            move.
            <br /><br />
            Although we do wish we had the ability to read minds, unfortunately we can't, so if you
            go missing in action, we can't finish your designs without getting a sufficient amount
            of information from you. We can’t continue to work on things without your approval.
            <br /><br />
            We're a company of relationships, and a relationship is a two-way street, meaning we
            need to bounce around ideas, and make sure we're moving in the right direction if you're
            distracted by life ... it's not our job to stay on your back.
            <br /><br />
            Although, we absolutely don't mind if you take your time getting back to us, and we
            don't mind at all if you go MIA for a long period of time, but just understand we can't
            work on your materials if we haven't had communication from you.
          </div>
        </div>
      </li>
      <li class="collapsible-item">
        <div class="collapsible-button" @click="collapseToggle(5)">
          Severability
          <collapse-button></collapse-button>
        </div>
        <div class="collapsible-content">
          <div class="about-list_description">
            In the event any one or more of the provisions of this agreement shall be held to be
            invalid, illegal or unenforceable, the remaining provisions of this Agreement shall be
            unimpaired and the Agreement shall not be void for this reason alone. Such invalid,
            illegal or unenforceable provision shall be replaced by a mutually acceptable valid,
            legal and enforceable provision, which comes closest to the intention of the parties
            underlying the invalid.
          </div>
        </div>
      </li>
      <li class="collapsible-item">
        <div class="collapsible-button" @click="collapseToggle(6)">
          Misuse of Service
          <collapse-button></collapse-button>
        </div>
        <div class="collapsible-content">
          <div class="about-list_header">Abuse or disrespectful language</div>
          <div class="about-list_description">
            If a client becomes disrespectful or abusive at any point in time, their communications
            will be ignored and will halt work on any active tasks. The client’s subscription may
            also be canceled at any point in time if we feel the client is failing to understand
            particular circumstances; abusing us for their domain name expiring when it's not our
            responsibility; having the content management system they have chosen to utilize get
            hacked; <br /><br />
            We're happy to work with all understanding clients through any challenges as long as
            it's done in a respectful manner, we do not work for you ... we work with you.
          </div>
          <div class="about-list_header">Harassment</div>
          <div class="about-list_description">
            It will be found to be harassment if you're found to be contacting any of our staff
            members via their personal social media profiles without their permission.
            <br /><br />
            If this occurs we will remove your subscription and discontinue any ongoing work and
            delete any files of yours that we have on our server.
            <br /><br />
          </div>
          <div class="about-list_header">
            Suspected illegal activity / unethical use of our services
          </div>
          <div class="about-list_description">
            If we find out you're using our services for something we think is unethical we may stop
            any tasks / jobs that you have pending, and withhold any files that we feel could be
            used for any illegal or malicious intent. In this scenario, we would pause your
            membership until further notice or confirmation that your activity is not breaking the
            law in any way.
          </div>
        </div>
      </li>
      <li class="collapsible-item">
        <div class="collapsible-button" @click="collapseToggle(7)">
          15 Day Money Back Guarantee
          <collapse-button></collapse-button>
        </div>
        <div class="collapsible-content">
          <div class="about-list_description">
            Once work is approved or sent back for revision this period is null and void and no
            refund can be given.
          </div>
        </div>
      </li>
      <li class="collapsible-item">
        <div class="collapsible-button" @click="collapseToggle(8)">
          Refunds
          <collapse-button></collapse-button>
        </div>
        <div class="collapsible-content">
          <div class="about-list_header">Refund Policy</div>
          <div class="about-list_description">
            The subscription for our services is for ongoing use of your chosen plan and we do not
            offer refunds for any services rendered or for unused subscriptions.
          </div>
        </div>
      </li>
      <li class="collapsible-item">
        <div class="collapsible-button" @click="collapseToggle(9)">
          Privacy
          <collapse-button></collapse-button>
        </div>
        <div class="collapsible-content">
          <div class="about-list_header"></div>
          <div class="about-list_description">
            At Dainty, we take privacy and security very seriously, so much so that it's even an
            internal procedure between staff. We need to, and are legally obligated to not make this
            a joking matter. <br /><br />
            So, here is our privacy agreement is below! 🙂
          </div>
          <div class="about-list_header">Trademark and Copyright</div>
          <div class="about-list_description">
            This is something we don't do, as the laws for these are very different for each
            country, and we're not trademarking lawyers, We're not responsible for if someone
            decides to steal any of your design elements and use them once your visual culture is
            public. <br /><br />
            We do provide you with all the raw design files you would require in order to have your
            materials overseen by your trademarking lawyer and have anything you wish trademarked
            and so forth.
            <br /><br />
            As all our plans include unlimited revisions we're more than happy to accommodate for
            any revisions which are required by your trademarking lawyer for you to meet the
            trademarking requirements.
            <br /><br />
            One more time for good measure I'd like to type the word ... trademarking.
          </div>
          <div class="about-list_header">Imagery</div>
          <div class="about-list_description">
            Any images we use are always stock images, and you're more than welcome to provide your
            own images / photography, as we only use royalty free images that we can dig up based on
            your specifications. We do not have a library for you to browse through.
            <br /><br />
            We do not hold any rights to any of the images that we use on our websites or anything
            designed by us, we do use free images which are royalty free for any of the photos for
            display on your website. We do recommend and instruct that you purchase or provide your
            own photos as we do not hold any responsibility for any consequences that could arise
            from the photos displayed on your website once your website is published.
          </div>
          <div class="about-list_header">Content Writing</div>
          <div class="about-list_description">
            We do not nor are responsible for any content that is on any of the materials we design,
            we're roles are strictly only design. All content for all materials must be provided by
            the client. Thus, we're not liable for any content that's on said website.
          </div>
          <div class="about-list_header">NDA / NDS Agreements</div>
          <div class="about-list_description">
            Do we sign them? Yes! But ... Only if they're sent in an electronic format, we're
            strictly a paperless environment for obvious reasons, and refuse to print and manually
            sign documents. <br /><br />
            Any agreement we feel strays outside of the normal privacy agreement will need to be
            adjusted prior to signing.
            <br /><br />
            We authorize our Creative Directors at Dainty permission to sign these documents on the
            company's behalf once it's been reviewed by our privacy culture team.
            <br /><br />
            And hold no responsibility for anything once it's in the public domain.
          </div>
          <div class="about-list_header">Marketing and re-targeting</div>
          <div class="about-list_description">
            That by visiting dainty.io third party advertises may place cookies on users’ browsers
            for targeted advertising purposes. <br /><br />
            IP addresses, cookie identifiers, website activity will be collected for targeted
            advertising.
            <br /><br />
            This data may be used by third parties to target advertising on other sites based on our
            users’ online activity.
            <br /><br />
            Users can opt out of receiving targeted advertising by visiting DAA opt-out site
            www.aboutads.info or the NAI opt-out site at networkadvertising.org/choices, or for
            those in Europe, the EDAA opt-out site at youronlinechoices.eu.
            <br /><br />
          </div>
        </div>
      </li>
      <li class="collapsible-item">
        <div class="collapsible-button" @click="collapseToggle(10)">
          Review
          <collapse-button></collapse-button>
        </div>
        <div class="collapsible-content">
          <div class="about-list_description">
            These terms of service were last reviewed on:
            <br /><br />
            October, 2019.
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import CollapseButton from "./collapse-button"
export default {
  name: "AboutTerms",
  components: { CollapseButton },
  methods: {
    collapseToggle(index) {
      const buttons = document.getElementsByClassName("collapsible-button")
      const content = document.getElementsByClassName("collapsible-content")
      if (content[index].style.display === "block") {
        content[index].style.display = "none"
        buttons[index].classList.remove("collapsible-button_active")
      } else {
        content[index].style.display = "block"
        buttons[index].classList.add("collapsible-button_active")
      }
    },
  },
}
</script>

<style lang="scss">
.collapsible-item:first-child {
  border-top: 2px solid #e9edf5;
  margin-top: 30px;
}
.collapsible-item:hover {
  background: #fbfcfd;
}
.collapsible-content {
  display: none;
  padding: 30px 30px 10px 0;
}
.collapsible-button {
  font-weight: 600;
  font-size: 1.2rem;
  padding: 2rem 0;
  @screen sm {
    font-size: 0.95rem;
  }
  .collapsible-button-img {
    display: inline;
    float: right;
    margin-right: 50px;
    width: 28px;
    height: 28px;
    font-size: 14px;
    border: 3px solid;
    border-radius: 8px;
    padding: 0 4px;
    -moz-transition: all 0.1s linear;
    -ms-transition: all 0.1s linear;
    -o-transition: all 0.1s linear;
    transition: all 0.1s linear;
    @screen sm {
      margin-right: 0;
      width: 20px;
      height: 20px;
      border: none;
    }
  }
  .collapsible-button-img_plus {
    border-color: var(--acc-purple-color);
    color: var(--acc-purple-color);
  }
  .collapsible-button-img_minus {
    display: none;
    border-color: grey;
    color: grey;
  }
  .collapsible-button-img_minus:hover {
    border-color: var(--acc-purple-color);
    color: var(--acc-purple-color);
  }
}
.collapsible-button_active {
  .collapsible-button-img_plus {
    display: none;
  }
  .collapsible-button-img_minus {
    display: inline;
  }
}
</style>
