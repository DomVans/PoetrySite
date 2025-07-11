<template>
    <div class="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-12">
        <h1 class="text-3xl font-bold mb-6">Submit Your Poem</h1>
        <form @submit.prevent="submitPoem" class="flex flex-col gap-4 w-full max-w-md">
            <input type="text"
                placeholder="Poem Title"
                v-model="title"
                class="p-2 border border-gray-300 rounded"
            />
            <textarea
                placeholder="Write your poem here..."
                v-model="content"
                rows="8"
                class="p-2 border border-gray-300 rounded resize-none">
            </textarea>
            <button
                type="submit"
                class="bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700 transition duration-200 font-bold"
                >
                Submit Poem
            </button>
                    
        </form>

        <p v-if="submitted" class="text-green-600 mt-4">Poem submitted</p>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const title = ref('');
const content = ref('');
const submitted = ref(false);
const router = useRouter();

function submitPoem() {
    const poem = {
        id : Date.now(),
        title: title.value || 'Untitled',
        content: content.value,
        likes: 0,
    }

    //Function to Store in Local Storage, to be changed later to API call
    const existing = JSON.parse(localStorage.getItem('poems')) || [];
    existing.unshift(poem);
    localStorage.setItem('poems', JSON.stringify(existing));

    submitted.value = true;
    setTimeout(() => {
        router.push('/poems');
    }, 2000);
}
</script>