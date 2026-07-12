export async function loadRESPO(name){
  const res = await fetch(`./${name}.html`);
  const txt = await res.text();
  return { name, raw: txt, status: "OK" };
}
