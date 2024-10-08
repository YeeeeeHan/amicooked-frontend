/** @type {import('tailwindcss').Config} */

// Configuration reference for core plugins: https://tailwindcss.com/docs/theme#configuration-reference
export default {
  darkMode: ['class'],
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      // boxShadow: {
      //   customShadow: '0 35px 60px 0 var(--neutral-foundation)',
      // },
      borderRadius: {
        DEFAULT: '.25rem',
        lg: '.5rem',
        md: 'calc(var(--radius) - 2px)',
        full: '20px',
      },
      colors: {
        // border: 'blue',
        input: 'var(--input)',
        ring: 'var(--ring)',

        background: 'var(--neutral-empty)',
        foreground: 'var(--neutral-default)',
        primary: {
          DEFAULT: 'var(--neutral-default)',
          heavy: 'var(--neutral-heavy)',
          strong: 'var(--neutral-strong)',
          weak: 'var(--neutral-weak)',
          ghost: 'var(--neutral-ghost)',
          empty: 'var(--neutral-empty)',
          foundation: 'var(--neutral-foundation)',
        },
        // secondary: {
        //   DEFAULT: 'var(--neutral-heavy)',
        // },
        muted: {
          DEFAULT: 'var(--neutral-ghost)',
          background: 'var(--neutral-ghost)',
        },
        accent: {
          DEFAULT: 'var(--accent-strong)',
          background: 'var(--accent-weak)',
        },
        destructive: {
          DEFAULT: 'var(--destructive-strong)',
          background: 'var(--destructive-weak)',
        },
        right: {
          bright: 'var(--right-bright)',
          strong: 'var(--right-strong)',
          weak: 'var(--right-weak)',
          ghost: 'var(--right-ghost)',
        },
        wrong: {
          bright: 'var(--wrong-bright)',
          strong: 'var(--wrong-strong)',
          weak: 'var(--wrong-weak)',
          ghost: 'var(--wrong-ghost)',
        },
        card: {
          background: 'var(--neutral-foundation)',
          foreground: 'var(--neutral-default)',
        },
        popover: {
          background: 'var(--neutral-foundation)',
          foreground: 'var(--neutral-default)',
        },
        chart: {
          1: 'var(--chart-1)',
          2: 'var(--chart-2)',
          3: 'var(--chart-3)',
          4: 'var(--chart-4)',
          5: 'var(--chart-5)',
        },
      },
      fontSize: {
        xs: [
          '0.625rem' /* 10px */,
          {
            lineHeight: '0.6rem' /* 9.5px */,
            // letterSpacing: '-0.01em',
            fontWeight: '300',
          },
        ],
        // subtle
        sm: [
          '0.875rem' /* 14px */,
          {
            lineHeight: '1.25rem' /* 20px */,
            // letterSpacing: '-0.01em',
            // fontWeight: '400',
          },
        ],
        base: [
          '1rem' /* 16px */,
          {
            lineHeight: '1.5rem' /* 24px */,
            // letterSpacing: '-0.01em',
            // fontWeight: '400',
          },
        ],
        // Edited
        lg: [
          '1.125rem' /* 18px */,
          {
            lineHeight: '1.75rem' /* 28px */,
            letterSpacing: '0.01em',
            fontWeight: '600',
          },
        ],
        xl: [
          '1.25rem' /* 20px */,
          {
            lineHeight: '1.75rem' /* 28px */,
            // letterSpacing: '-0.01em',
            fontWeight: '500',
          },
        ],
        '2xl': [
          '1.5rem' /* 24px */,
          {
            lineHeight: '2rem' /* 32px */,
            // letterSpacing: '-0.01em',
            fontWeight: '500',
          },
        ],
        '3xl': [
          '1.875rem' /* 30px */,
          {
            lineHeight: '2.25rem' /* 36px */,
            // letterSpacing: '-0.02em',
            fontWeight: '700',
          },
        ],
        '4xl': [
          '2.25rem' /* 36px */,
          {
            lineHeight: '2.5rem' /* 40px */,
            // letterSpacing: '-0.02em',
            fontWeight: '700',
          },
        ],
        '5xl': [
          '3rem' /* 48px */,
          {
            lineHeight: '1',
            letterSpacing: '-0.02em',
            fontWeight: '700',
          },
        ],
      },
      lineHeight: {
        // leading-3 =  .75rem; /* 12px */
        // leading-4 =  1rem; /* 16px */
        // leading-5 =  1.25rem; /* 20px */
        // leading-6 =  1.5rem; /* 24px */
        // leading-7 =  1.75rem; /* 28px */
        // leading-8 =  2rem; /* 32px */
        // leading-9 =  2.25rem; /* 36px */
        // leading-10 =  2.5rem; /* 40px */
        // leading-none =  1;
        // leading-tight =  1.25;
        // leading-snug =  1.375;
        // leading-normal =  1.5;
        // leading-relaxed =  1.625;
        // leading-loose =  2;
      },
      fontWeight: {
        // font-thin = 100;
        // font-extralight = 200;
        // font-light = 300;
        // font-normal = 400;
        // font-medium = 500;
        // font-semibold = 600;
        // font-bold = 700;
        // font-extrabold = 800;
        // font-black = 900;
      },
      animation: {
        shimmer: 'shimmer 2s infinite',
      },
      keyframes: {
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
