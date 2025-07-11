<template>
    <div>
        <h1>Garden of Poems</h1>

        <div>
            <div v-for="poem in poems" :key="poem.id"
            >
                <h2>{{ poem.title }}</h2>
                <p>{{ poem.content }}</p>
                <div>
                    <span>Poem ID : {{ poem.id }}</span>
                    <button @click="likePoem(poem.id)">
                        ❤️ {{ poem.likes }} Like{{ poem.likes > 1 ? '' : 's' }}

                    </button>
                </div>
            </div>
        </div>
    </div>
</template>



<script setup>
//To be later changed to API calls
import {ref, onMounted} from 'vue';

const poems = ref([]);

function loadPoems() {
    const stored = JSON.parse(localStorage.getItem('poems')) || [];
    poems.value = stored
}

function likePoem(id) {
    const index = poems.value.findIndex(poem => poem.id === id);
    if (index !== -1) {
        poems.value[index].likes += 1;
        localStorage.setItem('poems', JSON.stringify(poems.value));
    }
}

onMounted(loadPoems)
</script>