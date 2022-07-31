<template>
  <article class="bg-white shadow-xl mx-2 my-8 p-6 rounded-lg dark:bg-slate-900 dark:text-slate-200">
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-lg font-bold">
        <NuxtLink :to="race.url">
          {{ race.raceName }}
        </NuxtLink>
      </h2>
      <div class="w-10 h-10 flex justify-center items-center rounded-full font-bold bg-slate-100 shadow-inner dark:bg-slate-700">
        {{ race.round }}
      </div>
    </div>
    <ListRaceSessions v-if="upcoming" :race="race" />
    <p v-else class="text-sm">
      <ClientOnly>
        {{ localDate(`${race.date} ${race.time}`) }}
      </ClientOnly>
    </p>
  </article>
</template>

<script setup>
defineProps({
  race: Object,
  upcoming: Boolean,
})
</script>
