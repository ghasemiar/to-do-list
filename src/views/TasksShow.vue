<template>
  <div>
    <CreateTaskForm />
    <div class="grid grid-cols-3 gap-4">
      <div v-for="(item,index) in task" :key="index">
        <div class="card bg-base-100 w-96 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">{{item.title}}</h2>
            <p>{{item.description}}</p>
            <div class="card-actions justify-end">
              <button @click="removeItem(item.title)" class="btn btn-primary">delete</button>
              <button @click="toggleModal" class="btn btn-success">update</button>
              <div
                class="modal"
                :class="{ 'modal-open': showModal }">
                <div class="modal-box">
                  <UpdateTaskForm :afterDone="toggleModal" :prev-title="item.title ? item.title : ''" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script setup lang="ts">
import CreateTaskForm from '@/components/Task/CreateTaskForm.vue'
import { useTaskStore } from '@/stores/task.store'
import { ref } from 'vue'
import UpdateTaskForm from '@/components/Task/UpdateTaskForm.vue'
const {task,removeTask} = useTaskStore()
const showModal = ref(false);

function toggleModal(): void {
  showModal.value = !showModal.value;
}
const removeItem = (item:string)=>{
  removeTask(item)
}
</script>
