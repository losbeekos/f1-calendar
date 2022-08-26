import { h } from 'vue';

const flags = {
  Australia: '🇦🇺',
  Austria: '🇦🇹',
  Azerbaijan: '🇦🇿',
  Bahrain: '🇧🇭',
  Belgium: '🇧🇪',
  Brazil: '🇧🇷',
  Canada: '🇨🇦',
  France: '🇫🇷',
  Hungary: '🇭🇺',
  Italy: '🇮🇹',
  Japan: '🇯🇵',
  Mexico: '🇲🇽',
  Monaco: '🇲🇨',
  Netherlands: '🇳🇱',
  'Saudi Arabia': '🇸🇦',
  Singapore: '🇸🇬',
  Spain: '🇪🇸',
  UAE: '🇦🇪',
  UK: '🇬🇧',
  USA: '🇺🇸',
};

const CountryEmoji = props => {
  return h(
    'div',
    {
      class: 'text-3xl',
    },
    flags[props.country],
  );
};

export default CountryEmoji;
