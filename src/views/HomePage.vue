<template>
  <div>
    <NavBar />
    <div class="search-wrapper">
      <v-text-field label="Search Title" v-model="searchText"></v-text-field>
    </div>
    <div>
      <v-data-table :headers="headers" :items="getFilteredPosts" class="elevation-1">
        <!-- eslint-disable-next-line -->
        <template v-slot:item="{ item }">
          <tr :class="getColor(item.id)">
            <td>{{ item.id }}</td>
            <td>{{ item.userId }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.body }}</td>
          </tr>
        </template>
      </v-data-table>
    </div>

    <hr />
    <div>
      <h1>Shared State Example</h1>
      <IncreaseCount />
      <hr />
      <DecreaseCount />
    </div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';
import IncreaseCount from '@/components/IncreaseCount.vue';
import DecreaseCount from '@/components/DecreaseCount.vue';

export default {
  name: 'HomePage',
  components: {
    NavBar,
    DecreaseCount,
    IncreaseCount,
  },
  data() {
    return {
      posts: [],
      searchText: '',
      headers: [
        {
          text: 'ID',
          align: 'start',
          sortable: false,
          value: 'id',
        },
        {
          text: 'User Id',
          align: 'start',
          sortable: false,
          value: 'userId',
        },
        {
          text: 'Title',
          align: 'start',
          value: 'title',
        },
        {
          text: 'Body',
          align: 'start',
          value: 'body',
        },
      ]
    }
  },
  computed: {
    getFilteredPosts() {
      return this.posts.filter(post => post.title.includes(this.searchText.toLowerCase()));
    },
  },
  methods: {
    async getPosts() {
      const posts = await fetch('https://jsonplaceholder.typicode.com/posts');
      const response = await posts.json();
      return response;
    },
    getColor(id) {
      return (+id % 2 === 0) ? 'red' : '';
    }
  },
  async mounted() {
    this.posts = await this.getPosts();
  }
}
</script>

<style scoped>
.red {
  background-color: red !important;
}
.search-wrapper {
  margin: 20px;
}
</style>