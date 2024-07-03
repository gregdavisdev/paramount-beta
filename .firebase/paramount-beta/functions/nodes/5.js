import * as server from '../entries/pages/_username_/bio/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_username_/bio/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[username]/bio/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.BJ9RX7Ir.js","_app/immutable/chunks/scheduler.BEXlFcv1.js","_app/immutable/chunks/index.7KKCNSNY.js"];
export const stylesheets = [];
export const fonts = [];
