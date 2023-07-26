<template>
    <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
        {{ capitalizeFirstLetter(name) }}
    </label>

    <input
        class="transition ease-in-out duration-300 border-2 border-primary-500 rounded w-full py-2 px-3 text-gray-800 leading-tight focus:ring-4"
        :id="id" 
        :type="type" 
        :name="name" 
        :placeholder="placeholder" 
        :value="modelValue"
        :class="error ? 'border-red-500 focus:ring-red-300/40' : ''"
        @input="$emit('update:modelValue', $event.target.value)" />

        <p v-if="error" class="mt-2 text-sm text-red-600 dark:text-red-500">
            <span class="font-medium">{{ error }}</span>
        </p>
</template>
  
<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
    id: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    placeholder: {
        type: String,
        required: true
    },
    modelValue: String,
    error: String
});

function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

</script>
  