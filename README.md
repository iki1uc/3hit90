# 3hit90 MASTER System

Das 3hit90‑System rendert in Echtzeit den MASTER‑Status aus drei Quellen:

- **RAW** (Status‑Objekte)
- **CORE** (Systemwerte CPU/RAM/GPU/ROM)
- **MASTER** (Renderer)

Die Ausgabe wird jede Sekunde aktualisiert.

---

## MASTER‑Renderer

Der MASTER‑Renderer erzeugt die Ausgabe:

- liest alle RAW‑Einträge
- bewertet Status (green/yellow/red/blue)
- zeigt temporäre Werte (tmp)
- zeigt CORE‑Werte (CPU/RAM/GPU/ROM)
- markiert MASTER als aktiv

---

## CORE‑Modul

Das CORE‑Modul liefert zufällige Systemwerte:

- CPU  
- RAM  
- GPU  
- ROM  

Diese Werte werden bei jedem Render‑Zyklus neu generiert.

---

## RAW‑Modul

RAW enthält Status‑Objekte:

- `green`  → OK  
- `yellow` → Übergang blockiert  
- `red`    → FAIL / STOP  
- `blue`   → MASTER  

Jeder RAW‑Eintrag besitzt:

- `status`
- `tmp` (temporärer Wert)

---

## HTML‑Integration

Die README zeigt die MASTER‑Ausgabe:

```html
<pre id="master"></pre>

<script type="module">
  import { MASTER } from "./master.js";

  function render(){
    document.getElementById("master").textContent = MASTER();
  }

  setInterval(render, 1000);
  render();
</script>

