module.exports = {
  theme: {
    extend: {
      colors: {
        background: 'hsl(0 0% 98%)',
        foreground: 'hsl(240 5.3% 26.1%)',
        border: 'hsl(220 13% 91%)',
        ring: 'hsl(217.2 91.2% 59.8%)',
      },
      borderColor: {
        border: 'var(--color-sidebar-border)', // o el color que uses
      },
      outlineColor: {
        ring: 'var(--color-sidebar-ring)',
      },
      outlineWidth: {
        DEFAULT: '1px',
        'ring/50': '0.5px', // Solo si quieres este tamaño
      },
    },
  },
}
