const app = document.getElementById("datos");
var template = Handlebars.compile(
    `{{#each celulares}}
<h3>Nombre:{{this.nombre}}</h3>
{{#if this.envioGratis}}
<p>Con envio gratis</p>
{{else}}
<p>Sin envio gratis</p>
{{/if}}
{{#unless hayStock}}
<p>Sin Stock</p>
{{/unless}}
{{/each}}`
)
app.innerHTML = template({
  celulares: [
    { nombre: "Motorola E32", envioGratis: true, hayStock: false, },
    { nombre: "Samsungung A03", envioGratis: false, hayStock: true, },
    { nombre: "Ipad 13", envioGratis: true, hayStock: false },
  ],
});      