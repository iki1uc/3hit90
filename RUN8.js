export function RUN8(mode){
  return {
    engine: "RUN8",
    mode,
    pulse: Date.now(),
    status: "ACTIVE"
  };
}
