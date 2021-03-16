<template>
  <div>
    <div class="pricing-support">
      <div class="pricing-support_item">
        <div class="info info-left">
          <div class="title"><h5>You can count on us</h5></div>
          <div class="text">
            We're here to help from day one, with 24/6 outstanding support, backed up by a 30-day
            money back guarantee. This is the beginning of a beautiful friendship.
          </div>
        </div>
      </div>
      <div class="pricing-support_item">
        <div class="image">
          <div class="background" style="background-image: url('/pricing/team-brush.jpg')">
            <img src="/pricing/team--1.jpg" alt="" />
            <img src="/pricing/team--2.jpg" alt="" />
            <img src="/pricing/team--3.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PricingSupport",
}
</script>

<style lang="scss">
.pricing-support {
  display: flex;
  flex-wrap: wrap;
  @screen md {
    flex-direction: column;
  }
  &:nth-child(2) {
    @screen md {
      flex-direction: column-reverse;
    }
  }
  .pricing-support_item {
    height: auto;
    width: 50%;
    @screen md {
      width: 100%;
      margin-bottom: 0;
    }
    .info {
      width: 60%;
      padding: 70px 0;
      @screen md {
        width: 90%;
        padding: 30px 0;
      }
      .title {
        margin: 30px 0;
      }
      .text {
        font-size: 18px;
        line-height: 1.8;
        color: #556575;
      }
    }
    .info-left {
      margin-right: 10%;
      margin-left: auto;
      @screen md {
        margin: 0 auto;
      }
    }
    .info-right {
      margin-left: 10%;
      margin-right: auto;
      @screen md {
        margin: 0 auto;
      }
    }
    .image {
      .background {
        position: relative;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        height: 395px;
        width: 530px;
        @screen md {
          width: 80vw;
          height: 55vw;
          margin: 0 auto 10%;
        }
        img {
          border-radius: 50%;
          left: 50%;
          top: 30%;
          position: absolute;
          width: auto;
          &:nth-child(1) {
            transform: translate(20%, -44%);
            height: 180px;
            @screen md {
              height: 35vw;
            }
          }
          &:nth-child(2) {
            transform: translate(-150%, 0);
            height: 150px;
            @screen md {
              height: 30vw;
            }
          }
          &:nth-child(3) {
            margin-left: -112.5px;
            margin-top: 35px;
            height: 220px;
            @screen md {
              margin-left: -25%;
              margin-top: 8%;
              height: 45vw;
            }
          }
        }
      }
    }
    img {
      width: 80%;
      margin-left: auto;
      @screen md {
        margin: 0 auto 30px;
      }
    }
  }
}
</style>
