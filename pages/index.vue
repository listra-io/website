<template>
  <div class="h-screen w-full relative bg-[#020A1D] flex items-center">
    <img
      src="/buble.svg"
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[650px]"
      alt=""
    />
    <img
      src="/listra.svg"
      class="absolute right-0 h-full top-0 object-cover"
      alt=""
    />
    <div class="flex flex-col gap-2 text-white ml-16 mr-auto max-md:ml-0 max-md:mr-0 max-md:w-full max-md:px-4">
      <h2 class="block text-sm font-medium text-gray-900 dark:text-white">
        Join the list
      </h2>
      <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
          <svg
            class="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 16"
          >
            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
          </svg>
        </div>
        <input
          type="text"
          id="input-group-1"
          class="bg-gray-50 border max-sm:w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@listra.io"
          v-model="email"
        />
      </div>
      <button
        @click="submitJoin"
        class="text-white z-20 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        join
      </button>
      <p v-if="resStatus.status" class="text-green-500">{{ resStatus.message }}</p>
      <p v-else-if="resStatus.status === false" class="text-red-500">{{ resStatus.message }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const resStatus = ref({
  status: false,
  message: ''
})

const submitJoin = async () => {
  console.log('clciked')
  try {
    const response = await fetch('https://server-production-e4fb.up.railway.app/join', {
      method: 'POST',
      body: JSON.stringify({ email: email.value }),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (response.ok) {
      resStatus.value.message = 'Thanks for joining Listra!'
      resStatus.value.status = true
    } else {
      resStatus.value.message = 'Email already exists!'
      resStatus.value.status = false
    }

    email.value = ''
  } catch (error) {
    console.log(error)
  }
}
</script>

<style>
*{
  @apply m-0 p-0 overflow-hidden
}
.lista {
  @apply h-screen w-full relative bg-[#020A1D];
}
</style>
