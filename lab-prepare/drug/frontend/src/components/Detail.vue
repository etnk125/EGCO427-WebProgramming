<template>
  <div>
    <div class="row">
      <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
      <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
        <div class="panel panel-primary">
          <div class="panel-heading">
            <h1 class="panel-title">Drug Detail</h1>
            <br />
          </div>
          <div class="panel-body">
            <div class="border" style="padding: 15px">
              <form action="index.html" method="post">
                <div class="row">
                  <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <b>Name:</b>
                  </div>
                  <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">{{drug.name}}</div>
                </div>
                <hr />
                <br />
                <div class="row">
                  <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <b>Dose:</b>
                  </div>
                  <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">{{drug.dose}}</div>
                </div>
                <hr />
                <br />
                <div class="row">
                  <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <b>No. of Package:</b>
                  </div>
                  <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                    <!-- <input /> -->
                    {{drug.package}}
                  </div>
                </div>
                <hr />
                <br />
                <div class="row">
                  <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <b>Unit:</b>
                  </div>
                  <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">{{drug.unit}}</div>
                </div>
                <hr />
                <br />
                <div class="row">
                  <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <b>Total:</b>
                  </div>
                  <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">{{total}}</div>
                </div>
                <hr />
                <br />
                <div class="row">
                  <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <b>Image:</b>
                  </div>
                  <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                    <img src="../assets/img/default.jpg" width="100" alt />
                  </div>
                </div>
                <hr />
                <br />
                <div class="row">
                  <div class="col-xs-11 col-sm-11 col-md-11 col-lg-11">
                    <router-link to="/" type="button" class="btn btn-info">Back to Main</router-link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
    </div>
    <br />
  </div>
</template>

<script>
import drugsJson from "../drugs.json";
export default {
  name: "Detail",
  data() {
    return {
      drug: "",
      total: "",
    };
  },
  created() {
    console.log(drugsJson);
    this.drug = drugsJson[this.$route.params.id];
    this.total = this.drug["unit"]
      .split("x")
      .reduce((acc, cur) => acc * cur, 1);
  },
  mounted() {},
  methods: {},
};
</script>
<style scoped>
h1,
h2 {
  font-weight: normal;
  margin-top: 50px;
  margin-bottom: 50px;
  color: #42b983;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>