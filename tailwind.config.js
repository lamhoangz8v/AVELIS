/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        p: {
          50:  "hsl(40, 20%, 98%)",   // #FAFAF8 — Trắng kem
          100: "hsl(40, 30%, 95%)",   // #F5F2EC — Beige nhạt
          200: "hsl(43, 55%, 85%)",   // #ECD9A8 — Vàng kem
          300: "hsl(43, 60%, 70%)",   // #DFB96A — Vàng nhạt
          400: "hsl(43, 65%, 60%)",   // #D4A24A — Vàng trung
          500: "hsl(43, 74%, 49%)",   // #C9921C — Vàng champagne ✨
          600: "hsl(43, 70%, 38%)",   // #A47516 — Vàng đậm
          700: "hsl(40, 20%, 20%)",   // #2E2A22 — Nâu tối
          900: "hsl(0, 0%, 10%)",     // #1A1A1A — Đen khói
          950: "hsl(0, 0%, 5%)",      // #0D0D0D — Đen tuyền
        },
        n: {
          50:  "hsl(40, 15%, 98%)",   // #FAFAF8
          100: "hsl(40, 10%, 93%)",   // #EDEAE6
          200: "hsl(40, 8%,  85%)",   // #D9D5CF
          500: "hsl(40, 5%,  55%)",   // #8E8A84
          600: "hsl(40, 4%,  45%)",   // #736F6A
          700: "hsl(40, 3%,  30%)",   // #4D4A47
          800: "hsl(40, 2%,  15%)",   // #272524
        },
      },
    },
  },
  plugins: [],
};
