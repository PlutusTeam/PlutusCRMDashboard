<template>
  <div class="charts" v-if="isMounted">
    <div class="row row-equal">
      <plutus-info-block />
      <!-- <div class="markup-tables flex"> -->
      <div class="markup-tables flex md6 xs12">
        <va-card :title="$t('tables.stripedHoverable')">
          <va-card-content>
            <div class="table-wrapper">
              <table class="va-table va-table--striped">
                <thead>
                  <tr>
                    <th>Plutus ID</th>
                    <th>Transaction Date</th>
                    <th>Age</th>
                    <th>Total Spent</th>
                    <th>Items Purchased</th>
                  </tr>
                </thead>

                <tbody>
                  <tr v-for="user in users" :key="user.plutus_id">
                    <td>{{ user.plutus_id }}</td>
                    <td>{{ user.transaction_date }}</td>
                    <td>{{ user.age }}</td>
                    <td>{{ user.total_spent }}</td>
                    <td>{{ user.items_purchased }}</td>
                  </tr>
                </tbody>
              </table>          
            </div>
          </va-card-content>
        </va-card>
      </div>
    </div>

    <div class="row row-equal">
      <div class="flex xs12 xl6">
        <va-card
          class="chart-widget"
          :title="$t('charts.lineChart')"
        >
          <va-card-content>
            <va-chart title="This is the chart" :data="lineChartData" type="line"/>
          </va-card-content>
        </va-card>
      </div>

      <div class="flex xs12 xl6">
        <va-card
          class="chart-widget"
          :title="$t('charts.donutChart')"
        >
          <!-- Donut chart -->
          <va-card-content>
            <va-chart :data="donutChartData" type="donut"/>
          </va-card-content>
        </va-card>
      </div>
    </div>

    <!-- Table -->
    <div class="markup-tables">
      <va-card :title="$t('tables.stripedHoverable')">
        <va-card-content>
          <div class="table-wrapper">
            <table class="va-table va-table--striped">
              <thead>
                <tr>
                  <th>Plutus ID</th>
                  <th>Age</th>
                  <th>Notification Date</th>
                  <th>Most Recent Visit</th>
                  <th>Total Number of Visits</th>
                  <th>Send Notification?</th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="user in users" :key="user.plutus_id">
                  <td>{{ user.plutus_id }}</td>
                  <td>{{ user.age }}</td>
                  <td>{{ user.notification_date }}</td>
                  <td>{{ user.most_recent_visit }}</td>
                  <td>{{ user.number_of_total_visits }}</td>
                  <td><va-button> Send </va-button></td>
                </tr>
              </tbody>
            </table>          
          </div>
        </va-card-content>
      </va-card>
    </div>
  </div>
</template>

<script>
import PlutusInfoBlock from './PlutusInfoBlock'
import VaChart from '@/components/va-charts/VaChart'
import data from '@/data/plutus/tables/data.json'
import { getLineChartData } from '@/data/plutus/charts/LineChartData'
import { getBubbleChartData } from '@/data/charts/BubbleChartData'
import { getPieChartData } from '@/data/charts/PieChartData'
import { getDonutChartData } from '@/data/plutus/charts/DonutChartData'
import { getVerticalBarChartData } from '@/data/charts/VerticalBarChartData'
import { getHorizontalBarChartData } from '@/data/charts/HorizontalBarChartData'
import { useGlobalConfig } from 'vuestic-ui'

export default {
  name: 'charts',
  components: { VaChart, PlutusInfoBlock },
  data () {
    return {
      bubbleChartData: null,
      lineChartData: null,
      pieChartData: null,
      donutChartData: null,
      verticalBarChartData: null,
      horizontalBarChartData: null,
      isMounted: false,
      users: data.slice(0, 8),
    }
  },
  mounted() {
    this.isMounted = true
    this.bubbleChartData = getBubbleChartData(this.theme)
    this.lineChartData = getLineChartData(this.theme)
    this.pieChartData = getPieChartData(this.theme)
    this.donutChartData = getDonutChartData(this.theme)
    this.verticalBarChartData = getVerticalBarChartData(this.theme)
    this.horizontalBarChartData = getHorizontalBarChartData(this.theme)
  },
  computed: {
    theme() {
      return useGlobalConfig().getGlobalConfig().colors
    }
  },
  methods: {
    refreshData () {
      this.lineChartData = getLineChartData(this.theme)
    },
    getStatusColor (status) {
      if (status === 'paid') {
        return 'success'
      }

      if (status === 'processing') {
        return 'info'
      }

      return 'danger'
    },
  },
}
</script>

<style lang="scss">
.chart-widget {
  .va-card__body {
    height: 550px;
  }
}
.markup-tables {
  .table-wrapper {
    overflow: auto;
  }

  .va-table {
    width: 100%;
  }
}
</style>
