import { RAW } from "../online/raw.js";
import { CORE } from "./core.js";

export function MASTER(){
  const core = CORE();

  const verdict = (status) => {
    if(status === "green")  return "OK";
    if(status === "yellow") return "Übergang blockiert";
    if(status === "red")    return "FAIL / STOP";
    if(status === "blue")   return "MASTER";
  };

  let out = "RESPO 99 :: 3hit90 MASTER\n--------------------------------\n";

  Object.keys(RAW).forEach(key => {
    const r = RAW[key];
    out += `${key.padEnd(10)} → ${verdict(r.status)}  tmp:${r.tmp}\n`;
  });

  out += "\n--------------------------------\nCORE-Werte\n";
  out += `CPU → ${core.CPU}\n`;
  out += `RAM → ${core.RAM}\n`;
  out += `GPU → ${core.GPU}\n`;
  out += `ROM → ${core.ROM}\n`;

  out += "--------------------------------\nMASTER aktiv\n";

  return out;
}

