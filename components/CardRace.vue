<template>
  <article class="bg-white shadow-xl mx-2 my-8 rounded-2xl dark:bg-gray-800 dark:text-slate-200">
    <div class="flex justify-between items-center p-6">
      <div class="flex">
        <CountryEmoji :country="race.Circuit.Location.country" />
        <div class="ml-4">
          <h2 class="font-bold">
            <NuxtLink :to="race.url">
              {{ race.raceName }}
            </NuxtLink>
          </h2>
          <NuxtLink class="text-sm text-slate-500 dark:text-gray-400" :to="race.Circuit.url">
            {{ race.Circuit.circuitName }}
          </NuxtLink>
        </div>
      </div>
      <div
        class="w-10 h-10 flex justify-center items-center rounded-full font-bold bg-slate-100 shadow-inner dark:bg-gray-700">
        {{ race.round }}
      </div>
    </div>
    <div class="p-6 bg-slate-100 shadow-inner dark:bg-gray-900 rounded-b-2xl">
      <ListRaceSessions v-if="upcoming" :race="race" />
      <p v-else class="text-sm">
        <ClientOnly>
          {{ localDate(`${race.date}T${race.time}`) }}
        </ClientOnly>
      </p>
    </div>
  </article>
</template>

<script setup>
defineProps({
  race: Object,
  upcoming: Boolean,
})
</script>
