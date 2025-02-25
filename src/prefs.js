'use strict';

const { GObject, Gtk, Gio } = imports.gi;
const ExtensionUtils = imports.misc.extensionUtils;
const gettext = ExtensionUtils.gettext;

function init() {
    ExtensionUtils.initTranslations();
}

function buildPrefsWidget() {
    const settings = ExtensionUtils.getSettings();

    const prefsWidget = new Gtk.Grid({
        margin_start: 10,
        margin_end: 10,
        margin_top: 10,
        margin_bottom: 10,
        column_spacing: 12,
        row_spacing: 12,
        visible: true
    });

    const label = new Gtk.Label({
        label: gettext('Refresh Rate'),
        halign: Gtk.Align.START,
        visible: true
    });

    const spinButton = new Gtk.SpinButton({
        adjustment: new Gtk.Adjustment({
            lower: 1,
            upper: 60,
            step_increment: 1
        }),
        halign: Gtk.Align.END,
        visible: true
    });

    settings.bind(
        'refreshrate',
        spinButton,
        'value',
        Gio.SettingsBindFlags.DEFAULT
    );

    prefsWidget.attach(label, 0, 0, 1, 1);
    prefsWidget.attach(spinButton, 1, 0, 1, 1);

    return prefsWidget;
}