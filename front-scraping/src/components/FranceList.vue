<template>
  <div class="fr-body">
    <table class="styled-table">
      <thead>
        <tr>
          <td>Name</td>
          <td>Zip Code</td>
          <td>City</td>
          <td>C.A.</td>
          <td>More Info</td>
        </tr>
      </thead>
      <atom-spinner
        v-if="!items"
        :animation-duration="2000"
        :size="80"
        :color="'#009879'"
      />
      <tbody>
        <tr class="top-france" v-for="(item, index) in items" :key="index">
          <td id="name-td">{{ item.title }}</td>
          <td>{{ item.code }}</td>
          <td>{{ item.city }}</td>
          <td id="ca-td">{{ item.ca }}</td>
          <td>
            <a :href="'https://www.verif.com' + item.url" target="_blank">
              +
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import { AtomSpinner } from "epic-spinners";

export default {
  name: "FranceList",
  components: {
    AtomSpinner,
  },
  data() {
    return {
      items: null,
    };
  },
  mounted() {
    axios.get("http://localhost:8000/big-top").then((response) => {
      this.items = response.data;
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  text-decoration: none;
  color: black;
}

#ca-td {
  width: 15%;
}

#name-td {
  width: 37%;
}

.fr-body {
  display: flex;
  justify-content: center;
  align-items: center;
}

.styled-table {
  width: 80%;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}

.styled-table thead tr {
  background-color: #009879;
  color: #ffffff;
}

.styled-table td {
  padding: 12px 15px;
}

.styled-table tbody tr {
  border-bottom: 1px solid #dddddd;
  text-transform: uppercase;
}

.styled-table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}

.styled-table tbody tr:hover {
  background-color: #b1e0d6;
}

.styled-table tbody tr:last-of-type {
  border-bottom: 2px solid #009879;
}
</style>
