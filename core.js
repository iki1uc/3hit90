export function CORE(){
  return {
    CPU:  Math.floor(Math.random()*100),
    RAM:  Math.floor(Math.random()*100),
    GPU:  Math.floor(Math.random()*100),
    ROM:  Math.floor(Math.random()*100)
  };
}
