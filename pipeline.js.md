# pipeline.js · Engine-Pipeline Dokumentation
CLOSED · NO-CLONE · BUSINESS

pipeline.js ist der zentrale Flow-Controller der Engine.
Es steuert die Reihenfolge aller Aktionen und verbindet
Matrix, Sense, SYN, RAW und Resolver.

---

## 1. Zweck
pipeline.js übernimmt:

- Verarbeitung von TMP-Pfaden
- Routing der Resolver-Befehle
- Synchronisation der Engine-Schritte
- Übergabe an SYN-Engine
- Übergabe an COACH

Damit ist pipeline.js der "Flow-Kern" der Engine.

---

## 2. Hauptfunktionen

### TMP-Verarbeitung
Liest TMP-Pfade aus RAW.

### Resolver-Routing
Steuert:
- #SLIDE
- #HDFRESPO
- #ID

### Engine-Schritte
Verarbeitet:
- Step (Leertaste)
- Auto-Modus

### SYN-Übergabe
Aktiviert Partikel und Energiefluss.

### COACH-Übergabe
Aktualisiert Ordner:
- Mobilität
- Wohnen
- Arbeit
- Persönlichkeit

---

## 3. Ablauf
1. TMP-Pfad wird geladen  
2. Resolver-Befehl wird ausgeführt  
3. SYN-Engine wird aktualisiert  
4. COACH wird aktualisiert  
5. Live-Log zeigt den Schritt  

---

## 4. Verbindung zu Modulen
- **[RAW](ca://s?q=Erklaere_RAW_Module)**  
- **[syn.core.js](ca://s?q=Dokumentiere_syn_core_js)**  
- **[AIR6D_MOVE.js](ca://s?q=Dokumentiere_AIR6D_MOVE_js)**  
- **[Resolver](ca://s?q=Erklaere_RESOLVER)**  

---

## 5. CLOSED · NO-CLONE · BUSINESS
Keine Weitergabe, kein Fork, kein Clone.
Nutzung nur mit Genehmigung von iki1uc.
Branding "iki1uc wieimmer" bleibt bestehen.
