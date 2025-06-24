
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 25093, hash: 'e35b3e1d732e59518d464e57e62154e80665ec40778996b8b6b158efe7289a1e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17227, hash: 'f2c822331b4003fb488abcc522c651dd67be7a5deb04f46ab7a35ac27ee7bc90', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 108307, hash: '96fb369051ed0846c9a539de22a46727dfd3552eb2cfe5c6766ea140c20518bd', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-U2ZWOCFX.css': {size: 17352, hash: 'WI73c7l5BoE', text: () => import('./assets-chunks/styles-U2ZWOCFX_css.mjs').then(m => m.default)}
  },
};
