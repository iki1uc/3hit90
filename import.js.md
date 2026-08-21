# import.js · Loader-Dokumentation
CLOSED · NO-CLONE · BUSINESS

import.js ist der zentrale Loader deiner Engine.
Es lädt alle Module, verbindet sie und stellt sicher,
dass RAW, SYN, Pipeline und Resolver korrekt initialisiert werden.

---

## 1. Zweck
import.js übernimmt:

- Laden der RAW-Daten
- Laden der SYN-Module
- Laden der Pipeline
- Laden der AIR6D-Bewegungslogik
- Bereitstellung globaler Engine-Variablen

Damit ist import.js der "Start-Layer" der Engine.

---

## 2. Hauptfunktionen

### RAW-Loader
Lädt TMP-Daten und Basiswerte aus:
- ROOT/RAW
- suite.see
- r.md

### SYN-Loader
Bindet:
- syn.core.js
- syn/
- syn1.html

### Pipeline-Loader
Initialisiert:
- pipeline.js
- Resolver-Befehle (#SLIDE, #HDFRESPO, #ID)

### AIR6D-Loader
Aktiviert:
- AIR6D_MOVE.js

---

## 3. Ablauf
1. RAW-Daten werden geladen  
2. SYN-Module werden verbunden  
3. Pipeline wird initialisiert  
4. Resolver wird aktiviert  
5. Engine-Variablen werden gesetzt  

---

## 4. Verbindung zu Modulen
- **[RAW](ca://s?q=Erklaere_RAW_Module)**  
- **[syn.core.js](ca://s?q=Dokumentiere_syn_core_js)**  
- **[pipeline.js](ca://s?q=Dokumentiere_pipeline_js)**  
- **[AIR6D_MOVE.js](ca://s?q=Dokumentiere_AIR6D_MOVE_js)**  

---

## 5. CLOSED · NO-CLONE · BUSINESS
Keine Weitergabe, kein Fork, kein Clone.
Nutzung nur mit Genehmigung von iki1uc.
Branding "iki1uc wieimmer" bleibt bestehen.
