function THREE_HIT_90_IMPORT(file) {

    // nur tmp / user / use erlaubt
    if (!file.type.match(/tmp|user|use/)) return false;

    // RESPO-Hardware-Hilfe
    syn.start();
    sync.stabilize();
    arg.sync.route(file);

    // direkt in 3hit90 eintragen
    THREE_HIT_90.add(file);

    return true;
}
