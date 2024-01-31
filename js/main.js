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

      newTask: [
        {
          text: "",
          done: false,
        },
      ],
    };
  },

  methods: {
    deleteTask(i) {
      this.tasks.splice(i, 1);
    },

    saveNewTask() {
      const newTaskCopy = { ...this.newTask };
      if (!newTaskCopy.text) {
        alert("Non hai inserito il prodotto");
        return;
      }
      this.tasks.push(newTaskCopy);
    },

    ChangeDone(task) {
      if (task.done) {
        task.done = false;
      } else {
        task.done = true;
      }
    },
  },

  mounted() {},
}).mount("#app");
