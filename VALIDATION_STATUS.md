# Estado de validación

La validación final no pudo completarse dentro del entorno de generación por una restricción de red del contenedor, no por un error detectado en el código del proyecto.

Intento realizado:

```text
CI=1 corepack pnpm install
Corepack: request to https://registry.npmjs.org/pnpm/-/pnpm-12.3.4.tgz failed
cause: getaddrinfo EAI_AGAIN registry.npmjs.org
```

También se probó conexión HTTPS directa al IP público de `registry.npmjs.org` y el contenedor no permite salida a Internet. Por esa razón no fue posible:

1. generar un `pnpm-lock.yaml` sincronizado mediante pnpm;
2. ejecutar `pnpm install --frozen-lockfile`;
3. ejecutar `pnpm check` y `pnpm build` con dependencias instaladas;
4. descargar las fotografías remotas para convertirlas en assets locales.

Sí se realizó validación estática del árbol fuente y búsqueda de las cadenas prohibidas indicadas en los requisitos; no aparecen en el código del sitio.

No se incluye un lockfile inventado ni se declara falsamente que los checks pasaron.
