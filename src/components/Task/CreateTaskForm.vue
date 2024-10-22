<script setup lang="ts">
import { useForm, useResetForm } from 'vee-validate'
import * as yup from 'yup'
import { useTaskStore } from '@/stores/task.store'


const { addTask } = useTaskStore()
const { errors, handleSubmit, defineField } = useForm({
  validationSchema: yup.object({
    title: yup.string().required(),
    description: yup.string().required(),
  }),
})

const onSubmit = handleSubmit(values => {
    addTask(values)

  useResetForm()
})

const [title, titleAttrs] = defineField('title')
const [description, descriptionAttrs] = defineField('description')
</script>

<template>
  <form @submit="onSubmit">
    <input
      type="text"
      v-model="title"
      class="input input-bordered w-full max-w-xs"
      v-bind="titleAttrs"
    />
    <div>{{ errors.title }}</div>

    <input
      type="text"
      v-model="description"
      class="input input-bordered w-full max-w-xs"
      v-bind="descriptionAttrs"
    />
    <div>{{ errors.description }}</div>

    <button>Submit</button>
  </form>
</template>
