<template>
  <div class="max-w-xl mx-auto pb-20 sm:pt-10">
    <main v-if="!pending">
      <header class="p-8">
        <h1 class="text-3xl font-bold dark:text-white">F1 {{ racesData.MRData.RaceTable.season }} Calendar</h1>
      </header>
      <section>
        <OverviewHeading>
          <template v-slot:default>
            Upcoming races
          </template>
          <template v-slot:extra>
            <p class="dark:text-slate-200">
              <span class="font-semibold dark:text-white">{{ upcomingRaces.length }}</span>
              out of
              <span class="font-semibold dark:text-white">{{ racesData.MRData.total }}</span>
              races remaining
            </p>
          </template>
        </OverviewHeading>
        <CardRace v-for="race in upcomingRaces" :key="race.round" :race="race" :upcoming="true" />
      </section>
      <section class="mt-20">
        <OverviewHeading>
          Past races
        </OverviewHeading>
        <CardRace v-for="race in pastRaces" :key="race.round" :race="race" :upcoming="false" />
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: 'bg-slate-200 dark:bg-black'
  }
})

const { data: racesData, pending } = await useFetch('https://ergast.com/api/f1/current.json');

const races = computed(() => racesData.value.MRData.RaceTable.Races);
const pastRaces = useArrayFilter(races, race => pastRace(race));
const upcomingRaces = useArrayFilter(races, race => upcomingRace(race));
</script>
