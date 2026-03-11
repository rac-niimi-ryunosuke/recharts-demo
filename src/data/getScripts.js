let scripts = {};

try {
  const mod = await import('./scripts.js');
  scripts = mod.default;
} catch {
  // scripts.js が存在しない場合（gitignore済み）はスクリプト非表示
}

export default scripts;
