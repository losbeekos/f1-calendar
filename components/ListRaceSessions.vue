<template>
  <ul class="text-sm">
    <li v-if="race.FirstPractice" class="flex justify-between">
      <div class="font-semibold">First practice</div>
      <ClientOnly>
        <div>{{ localDate(`${race.FirstPractice.date}T${race.FirstPractice.time}`) }}</div>
        <template #fallback>
          <p>Getting local date</p>
        </template>
      </ClientOnly>
    </li>
    <li v-if="race.Sprint && race.Qualifying" class="flex justify-between">
      <div class="font-semibold">Qualifying</div>
      <ClientOnly>
        <div>{{ localDate(`${race.Qualifying.date}T${race.Qualifying.time}`) }}</div>
        <template #fallback>
          <p>Getting local date</p>
        </template>
      </ClientOnly>
    </li>
    <li v-if="race.SecondPractice" class="flex justify-between">
      <div class="font-semibold">Second practice</div>
      <ClientOnly>
        <div>{{ localDate(`${race.SecondPractice.date}T${race.SecondPractice.time}`) }}</div>
        <template #fallback>
          <p>Getting local date</p>
        </template>
      </ClientOnly>
    </li>
    <li v-if="race.ThirdPractice" class="flex justify-between">
      <div class="font-semibold">Third practice</div>
      <ClientOnly>
        <div>{{ localDate(`${race.ThirdPractice.date}T${race.ThirdPractice.time}`) }}</div>
        <template #fallback>
          <p>Getting local date</p>
        </template>
      </ClientOnly>
    </li>
    <li v-if="!race.Sprint && race.Qualifying" class="flex justify-between">
      <div class="font-semibold">Qualifying</div>
      <ClientOnly>
        <div>{{ localDate(`${race.Qualifying.date}T${race.Qualifying.time}`) }}</div>
        <template #fallback>
          <p>Getting local date</p>
        </template>
      </ClientOnly>
    </li>
    <li v-if="race.Sprint" class="flex justify-between">
      <div class="font-semibold">Sprint</div>
      <ClientOnly>
        <div>{{ localDate(`${race.Sprint.date}T${race.Sprint.time}`) }}</div>
        <template #fallback>
          <p>Getting local date</p>
        </template>
      </ClientOnly>
    </li>
    <li class="flex justify-between">
      <div class="font-semibold">Race</div>
      <ClientOnly>
        <div>{{ localDate(`${race.date}T${race.time}`) }}</div>
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
