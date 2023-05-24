# ERRORES AL UTILIZAR SVELTE

## Comunicación entre componentes

Existen múltiples maneras de realizar comunicación entre componentes en Svelte.

### createEventDispatcher

    Al igual que en Angular, Svelte dispone de una herramienta para comunicar eventos desde componentes hijos a componentes padres.



### Ten cuidado con lo que deseas añadir

```
    import CreatePage from "../Create-page-modal/Create-page.svelte";

    const createPageComponent = () => new CreatePage({
        target: document.getElementsByTagName('main')[0]
    })
```

Si deseas que un elemento aparezca o desaparezca, lo ideal no es utilizar la solución de arriba. Esto lo único que hará será
crear de manera recurrente el componente (podemos verlo en el navegador):

(Create page ilimitado)[./docs/create-page-inifite.png]# svotion
