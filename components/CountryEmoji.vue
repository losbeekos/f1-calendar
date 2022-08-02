<template>
  <div class="text-3xl">
    {{ flag }}
  </div>
</template>

<script setup>
const flags = {
  'Australia': '🇦🇺',
  'Austria': '🇦🇹',
  'Azerbaijan': '🇦🇿',
  'Bahrain': '🇧🇭',
  'Belgium': '🇧🇪',
  'Brazil': '🇧🇷',
  'Canada': '🇨🇦',
  'France': '🇫🇷',
  'Hungary': '🇭🇺',
  'Italy': '🇮🇹',
  'Japan': '🇯🇵',
  'Mexico': '🇲🇽',
  'Monaco': '🇲🇨',
  'Netherlands': '🇳🇱',
  'Saudi Arabia': '🇸🇦',
  'Singapore': '🇸🇬',
  'Spain': '🇪🇸',
  'UAE': '🇦🇪',
  'UK': '🇬🇧',
  'USA': '🇺🇸',
}
const props = defineProps({
  country: String,
})

const flag = computed(() => {
  return flags[props.country];
})
</script>
