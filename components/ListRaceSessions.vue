<template>
  <ul class="text-sm font-mono">
    <li v-if="race.FirstPractice" class="flex justify-between">
      <div>1st practice</div>
      <ClientOnly>
        <div class="text-slate-500 dark:text-gray-400">{{
          localDate(`${race.FirstPractice.date}T${race.FirstPractice.time}`) }}</div>
        <template #fallback>
          <p>Getting local date</p>
        </template>
      </ClientOnly>
    </li>
    <li v-if="race.Sprint && race.Qualifying" class="flex justify-between">
      <div>Qualifying</div>
      <ClientOnly>
        <div class="text-slate-500 dark:text-gray-400">{{ localDate(`${race.Qualifying.date}T${race.Qualifying.time}`)
          }}</div>
        <template #fallback>
          <p>Getting local date</p>
        </template>
      </ClientOnly>
    </li>
    <li v-if="race.SecondPractice" class="flex justify-between">
      <div>2nd practice</div>
      <ClientOnly>
        <div class="text-slate-500 dark:text-gray-400">{{
          localDate(`${race.SecondPractice.date}T${race.SecondPractice.time}`) }}</div>
        <template #fallback>
          <p>Getting local date</p>
        </template>
      </ClientOnly>
    </li>
    <li v-if="race.ThirdPractice" class="flex justify-between">
      <div>3rd practice</div>
      <ClientOnly>
        <div class="text-slate-500 dark:text-gray-400">{{
          localDate(`${race.ThirdPractice.date}T${race.ThirdPractice.time}`) }}</div>
        <template #fallback>
          <p>Getting local date</p>
        </template>
      </ClientOnly>
    </li>
    <li v-if="!race.Sprint && race.Qualifying" class="flex justify-between">
      <div>Qualifying</div>
      <ClientOnly>
        <div class="text-slate-500 dark:text-gray-400">{{ localDate(`${race.Qualifying.date}T${race.Qualifying.time}`)
          }}</div>
        <template #fallback>
          <p>Getting local date</p>
        </template>
      </ClientOnly>
    </li>
    <li v-if="race.Sprint" class="flex justify-between">
      <div>Sprint</div>
      <ClientOnly>
        <div class="text-slate-500 dark:text-gray-400">{{ localDate(`${race.Sprint.date}T${race.Sprint.time}`) }}</div>
        <template #fallback>
          <p>Getting local date</p>
        </template>
      </ClientOnly>
    </li>
    <li class="flex justify-between">
      <div>Race</div>
      <ClientOnly>
        <div class="text-slate-500 dark:text-gray-400">{{ localDate(`${race.date}T${race.time}`) }}</div>
        <template #fallback>
          <p>Getting local date</p>
        </template>
      </ClientOnly>
    </li>
  </ul>
</template>

<script setup>
defineProps({
  race: Object
});
</script>
