

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.774ca80c.js","_app/immutable/chunks/scheduler.7c4769d9.js","_app/immutable/chunks/index.710e41fa.js","_app/immutable/chunks/singletons.1ccabf9e.js"];
export const stylesheets = [];
export const fonts = [];
