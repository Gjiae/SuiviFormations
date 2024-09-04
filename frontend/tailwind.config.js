/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      white: '#ffffff',
      dark: '#1C2434',
      darkgray: '#8A99AF',
      stroke: '#E2E8F0',
      medgray: '#DEE4EE',
      gray: '#EFF4FB',
      primary: '#3C50E0',
      bordergray: '#cfd8dc',
      secondary: '#80CAEE',
      textcolor: '#64748B',
      green: '#10B981',
      yellow: '#F0950C',
      red: '#FB5454',
      bggray: '#ECEFF1',
      bluegray800: '#424242',
      bluegray900: '#263238',
    },

    fontSize: {
      H4: [
        '28px',
        {
          lineHeight: '34px',
          letterSpacing: '0px',
          fontWeight: 'Bold',
        },
      ],
      H5: [
        '24px',
        {
          lineHeight: '38px',
          letterSpacing: '0px',
          fontWeight: 'Bold',
        },
      ],
      H6: [
        '22px',
        {
          lineHeight: '28px',
          letterSpacing: '0px',
          fontWeight: 'Bold',
        },
      ],
      '16Reg': [
        '16px',
        {
          lineHeight: '24px',
          letterSpacing: '0px',
          fontWeight: '500',
        },
      ],
      '16Med': [
        '16px',
        {
          lineHeight: '24px',
          letterSpacing: '0px',
          fontWeight: '600',
        },
      ],
      '14Reg': [
        '14px',
        {
          lineHeight: '20px',
          letterSpacing: '0px',
          fontWeight: '500',
        },
      ],
      '14Med': [
        '14px',
        {
          lineHeight: '22px',
          letterSpacing: '0px',
          fontWeight: '600',
        },
      ],
      '12Reg': [
        '12px',
        {
          lineHeight: '18px',
          letterSpacing: '0px',
          fontWeight: '500',
        },
      ],
      '12Med': [
        '12px',
        {
          lineHeight: '15px',
          letterSpacing: '0px',
          fontWeight: '600',
        },
      ],
    },

    borderRadius: {
      soft: '5px',
      DEFAULT: '10px',
      semi: '30px',
      full: '9999px',
    },

    extend: {},
  },
  plugins: [],
}
