# syn.core.js · SYN-Kernel Dokumentation
CLOSED · NO-CLONE · BUSINESS

syn.core.js ist der Kern der SYN-Engine.
Es steuert Triangle, Sink, Source, Partikel und Energiefluss.

---

## 1. Zweck
syn.core.js erzeugt die grafische und logische Basis der Engine:

- Triangle (Kern)
- Sink (Aufnahme)
- Source (Ausgabe)
- Partikel
- Energiefluss

Damit ist syn.core.js der "Visual-Kernel" der Engine.

---

## 2. Hauptfunktionen

### Triangle
Zentraler Punkt der Engine.
Reagiert auf:
- Matrix
- Sense
- Resolver

### Sink
Nimmt Energie auf.
Reagiert auf:
- #SLIDE
- #HDFRESPO

### Source
Gibt Energie aus.
Reagiert auf:
- #ID
- Auto-Modus

### Partikel
Zeigen Bewegungsimpulse.

### Energiefluss
Zeigt Systemaktivität.

---

## 3. Ablauf
1. Triangle wird gezeichnet  
2. Sink/Source werden aktiviert  
3. Partikel werden erzeugt  
4. Energiefluss wird berechnet  
5. Visualisierung wird aktualisiert  

---

## 4. Verbindung zu Modulen
- **[AIR6D_MOVE.js](ca://s?q=Dokumentiere_AIR6D_MOVE_js)**  
- **[pipeline.js](ca://s?q=Dokumentiere_pipeline_js)**  
- **[7SENSE](ca://s?q=Erklaere_7SENSE)**  
- **[Resolver](ca://s?q=Erklaere_RESOLVER)**  

---

## 5. CLOSED · NO-CLONE · BUSINESS
Keine Weitergabe, kein Fork, kein Clone.
Nutzung nur mit Genehmigung von iki1uc.
Branding "iki1uc wieimmer" bleibt bestehen.
