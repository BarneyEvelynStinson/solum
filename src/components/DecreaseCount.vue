<template>
    <div>
      Inside decrement Component Count is {{ getCount }}
    </div>
  </template>
  
  <script>
  import counter from '../mixins/counter';
  
  export default {
    mixins: [counter],
  }
  </script>