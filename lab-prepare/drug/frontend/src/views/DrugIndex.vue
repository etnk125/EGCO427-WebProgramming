<template>
  <div>
    <div class="container-fluid">
      <h1>List of Drugs</h1>
      <div class="border" style="padding: 15px">
        <table class="table">
          <tr>
            <th id="panel">panel heading</th>
          </tr>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">id</th>
                <th scope="col">Image</th>
                <th scope="col">Drug Name</th>
                <th scope="col">Dose</th>
                <th scope="col">Package</th>
                <th scope="col">Unit</th>
                <th scope="col">Method</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="drug,idx in drugs">
                <th>{{idx+1}}</th>
                <th>{{drug._id}}</th>
                <td>
                  <img
                    :src="`./src/assets/img/${drug.name||'default'}.jpg`||'../assets/img/default.jpg'"
                    width="40"
                    alt
                  />
                </td>
                <td>{{drug.name}}</td>
                <td>{{drug.dose}}</td>
                <td>{{drug.package}}</td>
                <td>{{drug.unit}}</td>
                <td>
                  <!-- type="button" -->
                  <router-link :to="{ name: 'DrugDetail',params:drug}" class="btn btn-info">Detail</router-link>
                </td>
              </tr>
            </tbody>
          </table>
        </table>
      </div>
    </div>
    <br />
  </div>
</template>

<script>
// import drugsJson from "../drugs.json";
import Detail from "../components/DrugDetail.vue";
import { getDrugList } from "../services/drug.service";
import store from "../store";
export default {
  name: "Main",
  data() {
    return {
      drugs: [],
    };
  },

  async created() {
    try {
      this.drugs = await getDrugList();
    } catch (err) {
      store.addMessage("something went wrong");
      console.error(err);
    }
  },
  mounted() {},
  methods: {},
  components: {
    Detail,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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

.btn {
  background-color: rgb(244, 244, 244);
  border: none;
}
#panel {
  background-color: rgb(244, 244, 244);
  padding: 1em;
}
</style>