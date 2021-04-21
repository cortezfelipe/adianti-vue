new Vue({
  el: '#app',
  data: {
    itens: []
  },

  created: function () {
    setInterval(this.atualiza, 5000);

  },

  methods: {

    atualiza: function () {

      vm = this;
      axios.get('users')
        .then(function (response) {
          vm.itens = response.data;
          console.log(vm.itens);

        })
        .catch(function (error) {
          console.log(error);
        })

    }

  }
})