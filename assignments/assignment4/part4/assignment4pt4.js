const aliceTumbling = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' }
  ];
  
  const aliceTiming = {
    duration: 2000,
    iterations: 1,
    fill: 'forwards'
  }
  
  const alice1 = document.querySelector("#alice1");
  const alice2 = document.querySelector("#alice2");
  const alice3 = document.querySelector("#alice3");


  async function forAnimation ()  {
    const firstAnimation = alice1.animate(aliceTumbling, aliceTiming);
    await firstAnimation.finished

    const secondAnimation = alice2.animate(aliceTumbling, aliceTiming)
    await secondAnimation.finished

    const thirdAnimation = alice3.animate(aliceTumbling, aliceTiming)
    await thirdAnimation.finished
};
forAnimation();