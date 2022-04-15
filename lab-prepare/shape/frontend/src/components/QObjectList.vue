<template>
  <div class="objectlist">
    <br />
    <div class="row">
      <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2" />
      <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
        <div class="panel panel-info">
          <div class="panel-heading">
            <h3 class="panel-title">List of Objects</h3>
          </div>
          <div class="panel-body">
            <div class="row" v-for="qobject in qobjects" :key="qobject.id">
              <div class="col-sm-6 col-md-6">
                <div class="thumbnail">
                  <img :src="`/src/assets/images/${qobject.objtype}.png`" width="100" alt />
                  <div class="caption">
                    <p>
                      <b>{{qobject._id}}</b>
                    </p>
                    <p>{{qobject.objtype||"rectangle"}}</p>
                    <p>WxHxD : {{qobject.width}}x{{qobject.height}}x{{qobject.depth}}</p>
                    <router-link :to="{ name: 'Detail',params:qobject}">
                      <button class="btn btn-success" role="button">Detail</button>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2" />
    </div>
    <br />
  </div>
</template>

<script>
import { getObjectList, calObject } from "../services/object.service";

export default {
  name: "QObjectList",
  data() {
    return {
      msg: "EGCI427 LabQuiz",
      // qobject: null,
      qobjects: {},
    };
  },
  async created() {
    this.qobjects = await getObjectList();

    console.log(this.qobjects);
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  /* display: inline-block; */
  margin: 0 10px;
}
a {
  color: #ffffff;
}
p.citydetail {
  text-align: justify;
}
</style>