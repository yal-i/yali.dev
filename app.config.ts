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
            "transition-shadow duration-300 hover:shadow-[0_0_10px_rgba(0,0,0,.5)]",
        },
      },
    },
  },
});
