export default defineAppConfig({
  ui: {
    primary: "zinc",
    gray: "zinc",
    icons: {
      dynamic: true,
    },
    button: {
      color: {
        black: {
          solid:
            "transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,.7)]",
        },
      },
    },
  },
});
