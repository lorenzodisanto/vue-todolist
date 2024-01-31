const { createApp } = Vue;

createApp({
  data() {
    return {
      title: "Todolist",

      tasks: [
        {
          text: "Latte",
          done: false,
        },
        {
          text: "Caffè",
          done: true,
        },
        {
          text: "Biscotti",
          done: true,
        },
        {
          text: "Cioccolato",
          done: false,
        },
        {
          text: "Carne",
          done: false,
        },
        {
          text: "Gelato",
          done: true,
        },
        {
          text: "Pasta",
          done: false,
        },
      ],
    };
  },

  methods: {
    deleteTask(i) {
      this.tasks.splice(i, 1);
    },
  },

  mounted() {},
}).mount("#app");
