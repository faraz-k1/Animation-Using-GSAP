// alert("hi");
var tl = gsap.timeline({ repeat: -1 });

tl.to(
  ".imgcont",
  {
    ease: Expo.easeInOut,
    stagger: 2,
    width: "100%",
    duration: 2,
  },
  "a"
)
  .to(
    "#text h1",
    {
      ease: Expo.easeInOut,
      stagger: 2,
      duration: 1.9,
      top: 0,
    },
    "a"
  )
  .to(
    "#text h1",
    {
      ease: Expo.easeInOut,
      delay: 1.5,
      stagger: 2,
      duration: 1.9,
      top: "-100%",
    },
    "a"
  );
