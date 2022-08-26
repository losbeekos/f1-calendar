import { h } from 'vue';

const OverviewHeading = (_, { slots }) => {
  return h(
    'div',
    {
      class: 'px-8',
    },
    [
      h(
        'h2',
        {
          class: 'text-2xl font-bold mb-4 dark:text-gray-200',
        },
        slots.default(),
      ),
      slots.extra ? slots.extra() : '',
    ],
  );
};

export default OverviewHeading;
