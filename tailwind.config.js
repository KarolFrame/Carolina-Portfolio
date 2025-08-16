import plugin from 'tailwindcss/plugin';

const myColors = {
  'primary-blue': 'var(--color-primary-blue)',
  'primary-cyan': 'var(--color-primary-cyan)',
  'primary-green': 'var(--color-primary-green)',
  'primary-yellow': 'var(--color-primary-yellow)',
  'primary-orange': 'var(--color-primary-orange)',
  'primary-red': 'var(--color-primary-red)',
  'primary-purple': 'var(--color-primary-purple)',
};

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary': 'var(--color-primary)',
                'background': 'var(--color-background)',
                'text': 'var(--color-text)',
                'button': 'var(--bg-button)',
            },
        },
    },
    plugins: [
        plugin(function({ addUtilities }) {
            const newUtilities = {
                ...Object.entries(myColors).reduce((acc, [name, value]) => ({
                    ...acc,
                    [`.text-${name}`]: {
                        color: value,
                    },
                    [`.bg-${name}`]: {
                        backgroundColor: value,
                    },
                }), {}),
            };

            addUtilities(newUtilities);
        }),
    ],
    safelist: [
        'bg-gray-100',
        'dark:bg-gray-700'
    ]
};