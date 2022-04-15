<template>
  <div class="objectlist">
    <br />
    <div class="row">
      <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2" />
      <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
        <div class="panel panel-info">
          <div class="panel-heading">
            <h3 class="panel-title">Object Detail</h3>
          </div>
          <div class="panel-body">
            <div class="row">
              <div class="col-sm-6 col-md-6" style="text-align: left">
                <p>Object ID: {{qobject._id}}</p>
                <p>Object Type: {{qobject.type}}</p>
                <p>WxHxD: {{qobject.width}}x{{qobject.height}}x{{qobject.depth}}</p>
                <p>Area: {{calobject.area}}</p>
                <p>Volume: {{calobject.volume}}</p>
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
import { calObject, getObject } from "../services/object.service";
export default {
  name: "QObjectList",
  data() {
    return {
      msg: "EGCI427 LabQuiz",
      calobject: { area: "2", volume: "6" },
      qobject: {
        _id: "1111",
        objtype: "rectangle",
        width: "1",
        height: "2",
        depth: "3",
      },
    };
  },
  async created() {
    this.calobject = await calObject(this.$route.params);
    this.qobject = this.$route.params;
  },
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