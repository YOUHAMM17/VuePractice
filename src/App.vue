<template>
  <div class="min-h-screen bg-gradient-to-r from-blue-100 to-teal-100 py-6 flex flex-col justify-center sm:py-12">
    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
      <div class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
      <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
        <h1 class="text-4xl font-extrabold text-gray-900 mb-8 text-center">Ma Liste de Tâches</h1>
        <div class="mb-6">
          <input 
            v-model="newTask" 
            @keyup.enter="addTask" 
            placeholder="Nouvelle tâche" 
            class="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
          >
          <button 
            @click="addTask" 
            class="mt-3 w-full bg-gradient-to-r from-blue-500 to-teal-400 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
          >
            Ajouter
          </button>
        </div>
        <ul class="space-y-3">
          <li v-for="(task, index) in tasks" :key="index" class="flex justify-between items-center p-3 bg-gray-100 rounded-lg shadow-sm hover:shadow-md transition duration-300 ease-in-out">
            <span class="text-gray-800">{{ task }}</span>
            <button 
              @click="removeTask(index)" 
              class="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded-full transition duration-300 ease-in-out"
            >
              Supprimer
            </button>
            
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      newTask: '',
      tasks: []
    }
  },
  methods: {
    addTask() {
      if (this.newTask.trim()) {
        this.tasks.push(this.newTask.trim())
        this.newTask = ''
        this.saveTasks()
      }
    },
    removeTask(index) {
      this.tasks.splice(index, 1)
      this.saveTasks()
    },
    saveTasks() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
    },
    loadTasks() {
      const savedTasks = localStorage.getItem('tasks')
      if (savedTasks) {
        this.tasks = JSON.parse(savedTasks)
      }
    }
  },
  mounted() {
    this.loadTasks()
  }
}
</script>