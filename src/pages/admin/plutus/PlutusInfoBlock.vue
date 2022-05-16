<template>
  <div class="flex xl6 xs12">
    <div class="row">
      <div
        class="flex xs12 sm4"
      >
        <va-card class="mb-4" color="success">
          <va-card-content>
            <p class="display-2 mb-0" style="color: white;"> 200 </p>
            <p style="color: white;">Number of Orders</p>              
          </va-card-content>
        </va-card>
      </div>
      <div
        class="flex xs12 sm4"
      >
        <va-card class="mb-4" color="danger">
          <va-card-content>
            <p class="display-2 mb-0" style="color: white;">$1,468</p>
            <p style="color: white;">Total Revenue</p>
            <!-- <va-button @click="test">Test</va-button>            -->
          </va-card-content>
        </va-card>
      </div>
      <div
        class="flex xs12 sm4"
      >
        <va-card class="mb-4" color="info">
          <va-card-content>
            <p class="display-2 mb-0" style="color: white;">$7.34</p>
            <p style="color: white;">Average Order</p>              
          </va-card-content>
        </va-card>
      </div>
    </div>

    <div class="row">
      <div class="flex xs12 md6">
        <va-card>
          <va-card-content>
            <p class="display-2 mb-1" :style="{color: theme.primary}">291</p>
            <p class="no-wrap">{{$t('dashboard.info.completedPullRequests')}}</p>              
          </va-card-content>
        </va-card>
      </div>
      <div class="flex xs12 md6">
        <va-card>
          <va-card-content>
            <div class="row row-separated">
              <div class="flex xs4">
                <p class="display-2 mb-1 text--center" :style="{color: theme.primary}">3</p>
                <p class="text--center mb-1">{{$t('dashboard.info.users')}}</p>
              </div>
              <div class="flex xs4">
                <p class="display-2 mb-1 text--center" :style="{color: theme.info}">24</p>
                <p class="text--center no-wrap mb-1">{{$t('dashboard.info.points')}}</p>
              </div>
              <div class="flex xs4">
                <p class="display-2 mb-1 text--center" :style="{color: theme.warning}">91</p>
                <p class="text--center mb-1">{{$t('dashboard.info.units')}}</p>
              </div>
            </div>
          </va-card-content>

        </va-card>
      </div>
    </div>
  </div>
</template>

<script>
import { useGlobalConfig } from 'vuestic-ui'
import { db, getAllOrderData, getDocs, collection } from '../../../firebase'

export default {
  name: 'PlutusInfoBlock',
  data () {
    return {
      orderData: null
    }
  },
  mounted () {
    this.orderData = getAllOrderData()
  },
  methods: {
    showModal () {
      this.modal = true
    },
    showPrevImage () {
      this.currentImageIndex = !this.currentImageIndex ? this.images.length - 1 : this.currentImageIndex - 1
    },
    showNextImage () {
      this.currentImageIndex = this.currentImageIndex === this.images.length - 1 ? 0 : this.currentImageIndex + 1
    },
    test () {
      console.log(this.orderData)
    },
    anotherTest () {
      const querySnapshot = getDocs(collection(db, 'Businesses/test-business-1/OrderData/AggregateData/Snapshots'));
      const ret = querySnapshot.docs.map(doc => ({id: doc.id, ... doc.data()}))
      console.log(ret)

      console.log('Test')

      Promise.resolve(ret).then((value) => {
        console.log(value)
      })
    }
  },
  computed: {
    theme() {
      return useGlobalConfig().getGlobalConfig().colors || {}
    }
  }
}
</script>

<style lang="scss" scoped>
  .row-separated {
    .flex + .flex {
      border-left: 1px solid var(--va-background);
    }

    // @include media-breakpoint-down(xs) {
    //   p:not(.display-2) {
    //     font-size: 0.875rem;
    //   }
    // }
  }

  .rich-theme-card-text {
    line-height: 24px;
  }

  .dashboard {
    .va-card__header--over {
      // @include media-breakpoint-up(md) {
      //   padding-top: 0 !important;
      // }
    }

    .va-card__image {
      // @include media-breakpoint-up(md) {
      //   padding-bottom: 0 !important;
      // }
    }
    // .image-card {
    //   position: relative;
    //   .va-button {
    //     position: absolute;
    //   }
    // }
  }
</style>
