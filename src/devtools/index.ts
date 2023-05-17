import browser from 'webextension-polyfill'

browser.devtools.panels.create(
  'Devtools from rspack-browser-extension-template',
  'logo.png',
  'devtools-panel.html',
)
