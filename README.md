Looking for the essence

### Initial Setup

```shell
bunx sv create --template minimal --types ts --install bun .
bunx sv add eslint prettier tailwindcss="plugins:none" --install bun
bunx sv add mdsvex sveltekit-adapter="adapter:static" --install bun
```

- mdsvex: markdown 활용을 위해 임시 도입, 커스터마이징 가능 여부 확인 필요
- sveltekit-adapter="adapter:static": SSG 적용

### Run Dev

```shell
bun install
bun run dev
```
