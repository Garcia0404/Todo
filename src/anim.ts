

export const add = {
  initial:{
    opacity:0,
  },
  enter:(i:number) => ({
    opacity:1,
    transition:{
      duration:0.3,
      delay:0.2*i
    }
  }),
  exit:{
    opacity:0,
    transition:{
      duration:0.3
    }
  }
}