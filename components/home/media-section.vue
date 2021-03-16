<template>
  <div class="media">
    <ul class="media-list">
      <li v-for="item in items" :key="item.id">
        <div class="media-content">
          <div class="img-wrap icon-wrap">
            <img :src="item.img" alt="feature-icon" />
          </div>
          <div class="media-info">
            <div class="header">
              <h5>{{ item.header }}</h5>
            </div>
            <div class="description">
              {{ item.description }}
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MediaSection",
  data() {
    return {
      items: [
        {
          id: 0,
          img: "/home/media/risk-free.svg",
          header: "Risk free",
          description:
            "You can try our core plan over a 15 day billing free period. We understand it takes\n" +
            "              time to see if we’re the right fit for each other so now you can test us out without\n" +
            "              being billed! We have no minimum terms, so if at any point during the 15 days or\n" +
            "              beyond you decide to stop working with us, there is no obligation to stay (*sniff*).",
        },
        {
          id: 1,
          img: "/home/media/no-limit.svg",
          header: "Uncapped monthly tasks",
          description:
            "We allow for a generous number of tasks to be worked on simultaneously for each plan\n" +
            "              PLUS we don’t have a monthly cap on the number of tasks you can submit. This makes us\n" +
            "              the perfect partner for your ongoing design jobs.",
        },
        {
          id: 2,
          img: "/home/media/fast.svg",
          header: "Designs that have it all",
          description:
            "We believe we have found the ultimate balance of making sure that your designs are\n" +
            "              beautiful, modern and returned to you as quickly as possible!",
        },
        {
          id: 3,
          img: "/home/media/real-human.svg",
          header: "Real human support",
          description:
            "We’re passionate about having real people to support you. This ensures that your\n" +
            "              projects reaches the best outcome possible. Our support penguins are not outsourced so\n" +
            "              there won’t be any language barriers getting in the way of your requests. We’re also\n" +
            "              across 2 time zones (in Australia and the US) so you get responses faster.",
        },
        {
          id: 4,
          img: "/home/media/everything.svg",
          header: "You own everything",
          description:
            "Everything we do for you is - yours! You own it! You can request the source files\n" +
            "              every step of the way while on a paid subscription plan. And, on our Plus and\n" +
            "              Enterprise plans you have reselling rights to any designs we do!",
        },
        {
          id: 5,
          img: "/home/media/concept.svg",
          header: "No limit on concepts or revisions",
          description:
            "We understand that design is subjective so we don’t have limits on the amount of\n" +
            "              concepts and revisions you can have. If a design isn’t exactly how you want it, you\n" +
            "              can get as many revisions or additional concepts as you want until you’re ecstatic\n" +
            "              with the end outcome.",
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.media {
  padding: 1rem 10rem;
  margin-bottom: 4rem;
  @screen md {
    padding: 1rem 3rem;
  }
  @screen sm {
    padding: 1rem 0;
  }
  .media-list {
    display: flex;
    flex-wrap: wrap;
    li {
      flex: 50%;
      margin-bottom: 50px;
      padding: 0 20px;
      @screen md {
        flex: 100%;
      }
      @screen sm {
        margin-bottom: 30px;
      }
      .media-content {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        @screen sm {
          flex-wrap: wrap;
        }
        .icon-wrap {
          flex: 30%;
          @screen sm {
            flex: 100%;
          }
          img {
            width: 160px;
            margin: 0 auto;
          }
        }
        .media-info {
          flex: 70%;
          @screen sm {
            flex: 100%;
            text-align: center;
            font-size: 0.9rem;
          }
          .header {
            margin-bottom: 10px;
            line-height: 1.5;
          }
          .description {
            line-height: 1.5;
          }
        }
      }
    }
  }
}
</style>
