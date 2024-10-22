import { ref, toRefs } from 'vue'
import { defineStore } from 'pinia'

interface Task {
  title :string,
  description :string,
}
export const useTaskStore = defineStore('task', () => {
  const task = ref([])

  function addTask(taskData: Task) {
    console.log(taskData)
    task.value.push(taskData)
  }
  function removeTask(title:string) {
    const findIndex = task.value.findIndex((task)=> title === task.title)
    task.value.splice(findIndex)
  }
  function updateTask(title:string,data: Task) {
    const findIndex = task.value?.findIndex((task)=> title === task.title)
    task.value[findIndex].title = data.title
    task.value[findIndex].description = data.description
  }

  return { addTask, removeTask,updateTask,task }
})
