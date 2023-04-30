import { defineConfig, Options } from 'tsup';

export default defineConfig((options: Options) => ({
  treeshake: true,
  splitting: true,
  entry    : ['src/**/*.tsx', 'src/*.css'],
  format   : ['esm', 'cjs'],
  dts      : true,
  minify   : true,
  clean    : false,
  external : ['react'],
  ...options,
}));
