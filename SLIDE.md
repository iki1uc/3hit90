# SLIDE · Resolver-Dokumentation
CLOSED · NO-CLONE · BUSINESS

SLIDE ist der erste Hauptbefehl des Resolver-Systems.
Er verarbeitet Bewegungs-Impulse aus Matrix, SYN-Engine und RAW-Daten.

---

## 1. Zweck
SLIDE erzeugt eine lineare Verschiebung im Engine-Kontext:

- TMP-Pfad wird gelesen
- Bewegung wird berechnet
- AIR6D-Impulse werden aktiviert
- SYN-Partikel reagieren
- COACH aktualisiert Mobilität

SLIDE ist der "Bewegungsbefehl" der Engine.

---

## 2. Auslöser
SLIDE wird ausgelöst durch:

- Tastatur: Taste **1**
- Matrix-Klicks (d1–w9)
- Auto-Modus

---

## 3. Ablauf
1. TMP-Pfad wird geladen  
2. AIR6D_MOVE.js berechnet die Verschiebung  
3. SYN-Engine erzeugt Partikel-Flow  
4. WRAIGHT-Kernel prüft Allowed  
5. COACH aktualisiert Mobilität  
6. Live-Log zeigt den Schritt

---

## 4. Verbindung zu Modulen
- AIR6D_MOVE.js → Bewegung  
- SYN-Engine → Visualisierung  
- RAW → TMP-Daten  
- WRAIGHT-Kernel → Prüfung  
- COACH → Mobilität  

---

## 5. CLOSED · NO-CLONE · BUSINESS
Keine Weitergabe, kein Fork, kein Clone.
Nutzung nur mit Genehmigung von iki1uc.
Branding "iki1uc wieimmer" bleibt bestehen.
