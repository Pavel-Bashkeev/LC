let posXEndCh = 436/6 + "%";
let widthTcLFTP = 966/60 + "%";
let posXEndCh3 = 2253/60 + "%";

let tmInf = gsap.timeline({
  defaults: {
    duration: .9,
    ease: "bounce.out"
  },
  delay:.12,
  repeat: -1,
});
let tmStepTc = gsap.timeline({
  defaults: {
    duration: .9,
    ease: "power2.out"
  }
});
let tmStepTcWord = gsap.timeline({
  defaults: {
    duration: .9,
    ease: "power2.out"
  }
});
let tmStepTc2 = gsap.timeline({
  defaults: {
    duration: .9,
    ease: "power2.out"
  },
  delay: 1.12
});
let dfTm = gsap.timeline({
  defaults: {
    duration: .9,
    ease: "power1.out"
  },
  repeat: -1,
  repeatDelay: 1.9,
  //yoyo:true,
  onRepeat: () => {
    gsap.set(".lv5zi, .stp05, .ch14c3, .rt480, .mk7zi7, l3c6zi", {opacity:0});
    tmStepTc.fromTo(".stp05",{
      scale:0,
      opacity:1
    },{
      scale:1,
      stagger: .22,
      yoyo: true
    });
    tmStepTc2.fromTo(".stp2",{
      top:"-110%",
      opacity:1
    },{
      top:0,
      stagger: 0.9,
      delay: 1.12
    })
  }
});

tmStepTc2.fromTo(".stp2",{
  top:"-110%",
  opacity:1
},{
  top:0,
  stagger: 0.9
})

tmInf.fromTo(".rtInf", {
  opacity:.1,
},{
  opacity:.5,
},"<20%")
.to(".rtInf", {
  opacity:1,
})
.to(".rtInf", {
  opacity:0.8,
})
.to(".rtInf", {
  opacity:0.2,
})
dfTm.fromTo(".fl1bjg",{
  scale:0
},{
  scale:1,
},"<80%")
.fromTo(".fl3bjg",{
  scale:0,
  onComplete: () => {
    tmStepTc.fromTo(".stp05",{
      scale:0
    },{
      scale:1,
      stagger: .22,
      yoyo: true
    })
  }
},{
  scale:1,
  onComplete: () => {
    gsap.fromTo(".ch14c3",{
      left:-20,
      scale:0,
      opacity:0
    },{
      left:posXEndCh3,
      scale:1,
      opacity:1
    })
    gsap.fromTo(".rt480",{
      rotate:-780,
      scale:0,
      opacity:0
    },{
      rotate:0,
      scale:1,
      opacity:1
    }, "<80%")
  }
},"<80%")
.fromTo(".rgAndopZ",{
  left: -20,
  scale:0,
  opacity:0
},{
  left:posXEndCh,
  scale:1,
  opacity:1
},"<80%")
.fromTo(".zm3op",{
  width:0,
},{
  width:widthTcLFTP,
  duration:.22,
  onComplete: () => {
    gsap.fromTo(".lv5zi",{
      rotate:-780,
      scale:0,
      opacity:0
    },{
      rotate:0,
      scale:1,
      opacity:1
    })
  }
},"<50%")
.fromTo(".lt9bg",{
  right:"-150%",
},{
  right:0,
},"<50%")
.fromTo(".bn9hzi",{
  bottom:"-150%",
},{
  bottom:0,
  deration:0.5,
},"<50%")
.fromTo(".hw12zi",{
  right:"-110%",
  rotate:"-270deg"
},{
  right:0,
  rotate:"0deg",
  delay:.5,
  deration:0.5,
},"<50%")
.fromTo(".rsh10z",{
  opacity:0
},{
  opacity:1,
  deration:0.5,
},"<15%")
.fromTo(".zr12zib",{
  right:"-110%"
},{
  right:0,
},"<80%")

tmStepTcWord.fromTo(".setpLft", {
  opacity:0,
  x:-70
},{
  opacity:1,
  x:0,
  duration: .64,
  stagger: .5
}, "<1%")
gsap.fromTo(".setpRight", {
  opacity:0,
  x:70
},{
  opacity:1,
  x:0,
  delay:.5,
  duration: .64,
})


