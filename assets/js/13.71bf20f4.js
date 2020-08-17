(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{215:function(e,t,a){"use strict";a.r(t);var s=a(0),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"project-data-json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#project-data-json"}},[e._v("#")]),e._v(" project_data.json")]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("{ [project_id: string]: Object }")])])]),e._v(" "),a("p",[e._v("Liste des typologies de projets de centrale.")]),e._v(" "),a("h2",{attrs:{id:"name"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[e._v("#")]),e._v(" name")]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("string")])]),e._v(" "),a("li",[e._v("Default: "),a("code",[e._v("[project_id]")])])]),e._v(" "),a("p",[e._v("Nom du type de projet que l'utilisateur verra dans l'interface.")]),e._v(" "),a("h2",{attrs:{id:"drawing-method"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#drawing-method"}},[e._v("#")]),e._v(" drawing_method")]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("string")])]),e._v(" "),a("li",[e._v("Default: "),a("code",[e._v("'single'")])])]),e._v(" "),a("p",[e._v("Méthode de dessin, 4 valeurs possibles:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("single")]),e._v(": L'utilisateur dessine un simple trait et les modules se dessinent en dessous, alignés sur le trait")]),e._v(" "),a("li",[a("code",[e._v("fill")]),e._v(": L'utilisateur dessine un polygone, et les modules remplissent la zone définie")]),e._v(" "),a("li",[a("code",[e._v("table")]),e._v(": L'utilisateur dessine un polygone, et des tables de modules remplissent la zone définie")]),e._v(" "),a("li",[a("code",[e._v("building")]),e._v(": Structure prédéfinie (hangar)")])]),e._v(" "),a("h2",{attrs:{id:"module-angle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#module-angle"}},[e._v("#")]),e._v(" module_angle")]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("Integer")])]),e._v(" "),a("li",[e._v("Default: "),a("code",[e._v("0")])])]),e._v(" "),a("p",[e._v("Inclinaison du module en °.")]),e._v(" "),a("h2",{attrs:{id:"orientation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#orientation"}},[e._v("#")]),e._v(" orientation")]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("String")])]),e._v(" "),a("li",[e._v("Default: "),a("code",[e._v('"portrait"')])])]),e._v(" "),a("p",[e._v("Orientation des modules, valeurs possibles "),a("code",[e._v('"portrait"')]),e._v(" ou "),a("code",[e._v('"landscape"')])]),e._v(" "),a("h2",{attrs:{id:"editable-orientation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#editable-orientation"}},[e._v("#")]),e._v(" editable_orientation")]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("Boolean")])]),e._v(" "),a("li",[e._v("Default: "),a("code",[e._v("false")])])]),e._v(" "),a("p",[e._v("Si "),a("code",[e._v("true")]),e._v(", l'utilisateur peut modifier l'orientation des panneaux via l'interface (= changer entre portrait et paysage)")]),e._v(" "),a("h2",{attrs:{id:"max-width-count"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#max-width-count"}},[e._v("#")]),e._v(" max_width_count")]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("Integer")])]),e._v(" "),a("li",[e._v("Default: "),a("code",[e._v("null")])])]),e._v(" "),a("p",[e._v("Nombre de modules maximum dans le sens de la largeur."),a("br"),e._v("\nPas de limite si "),a("code",[e._v("null")]),e._v(" ou "),a("code",[e._v("undefined")])]),e._v(" "),a("h2",{attrs:{id:"max-height-count"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#max-height-count"}},[e._v("#")]),e._v(" max_height_count")]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("Integer")])]),e._v(" "),a("li",[e._v("Default: "),a("code",[e._v("null")])])]),e._v(" "),a("p",[e._v("Nombre de modules maximum dans le sens de la longueur."),a("br"),e._v("\nPas de limite si "),a("code",[e._v("null")]),e._v(" ou "),a("code",[e._v("undefined")])]),e._v(" "),a("h2",{attrs:{id:"available-angle-orientation-modes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#available-angle-orientation-modes"}},[e._v("#")]),e._v(" available_angle_orientation_modes")]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("Array")])]),e._v(" "),a("li",[e._v("Default: "),a("code",[e._v('["aligned", "azimuth", "value"]')])])]),e._v(" "),a("p",[e._v("Mode d'orientation de l'angle d'inclinaison des modules disponibles dans l'interface utilisateur.")]),e._v(" "),a("p",[e._v("Valeurs possibles:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("aligned")]),e._v(": Aligné premier trait")]),e._v(" "),a("li",[a("code",[e._v("azimuth")]),e._v(": Orienté point cardinal")]),e._v(" "),a("li",[a("code",[e._v("value")]),e._v(": Orienté selon un angle défini en degré (ex: 180° = plein sud)")])]),e._v(" "),a("h2",{attrs:{id:"default-angle-orientation-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#default-angle-orientation-mode"}},[e._v("#")]),e._v(" default_angle_orientation_mode")]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("String")])]),e._v(" "),a("li",[e._v("default: "),a("code",[e._v("available_angle_orientation_modes[0]")])])]),e._v(" "),a("p",[e._v("Mode d'orientation de l'angle d'inclinaison des modules (doit être une valeur parmi celles déclarées dans "),a("code",[e._v("available_angle_orientation_modes")]),e._v(").")]),e._v(" "),a("h2",{attrs:{id:"azimuth"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#azimuth"}},[e._v("#")]),e._v(" azimuth")]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("String")])]),e._v(" "),a("li",[e._v("default: "),a("code",[e._v("south")])])]),e._v(" "),a("p",[e._v("Si le mode d'orientation de l'angle d'inclinaison des modules est \"azimuth\", point cardinal par défault (valeurs possibles "),a("code",[e._v("south")]),e._v(" "),a("code",[e._v("north")]),e._v(" "),a("code",[e._v("east")]),e._v(" "),a("code",[e._v("west")]),e._v(")")]),e._v(" "),a("h2",{attrs:{id:"module-spacing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#module-spacing"}},[e._v("#")]),e._v(" module_spacing")]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("{ width: Integer, height: Integer }")])]),e._v(" "),a("li",[e._v("Default: "),a("code",[e._v("{ width: 20, height: 20 }")])])]),e._v(" "),a("p",[e._v("Espacement entre les modules, en mm.")]),e._v(" "),a("h2",{attrs:{id:"table-spacing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#table-spacing"}},[e._v("#")]),e._v(" table_spacing")]),e._v(" "),a("p",[a("strong",[e._v("Seulement si "),a("code",[e._v("drawing_method")]),e._v(" vaut "),a("code",[e._v('"table"')])])]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("{ width: Integer, height: Integer}")])]),e._v(" "),a("li",[e._v("default: none")])]),e._v(" "),a("p",[e._v("Espacement entre les tables de modules, en mm.")]),e._v(" "),a("h2",{attrs:{id:"table-count"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#table-count"}},[e._v("#")]),e._v(" table_count")]),e._v(" "),a("p",[a("strong",[e._v("Seulement si "),a("code",[e._v("drawing_method")]),e._v(" vaut "),a("code",[e._v('"table"')])])]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("{ width: Integer, height: Integer}")])]),e._v(" "),a("li",[e._v("default: "),a("code",[e._v("{ width: 1, height: 1 }")])])]),e._v(" "),a("p",[e._v("Nombre de modules dans une table.")]),e._v(" "),a("h2",{attrs:{id:"modules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#modules"}},[e._v("#")]),e._v(" modules")]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("{ [module_id: string]: Object }")])]),e._v(" "),a("li",[e._v("default: "),a("code",[e._v("None")]),e._v(" "),a("strong",[e._v("required")])])]),e._v(" "),a("p",[e._v("Objet qui liste les types de modules disponibles. Les clés sont les "),a("code",[e._v("module_id")]),e._v(" du fichier "),a("a",{attrs:{href:"./module_data"}},[e._v("module_data.json")]),e._v(".")]),e._v(" "),a("p",[e._v("Possibilité de renseigner toutes les même propriétés que "),a("code",[e._v("project_data")]),e._v(", pour spécifier une propriété qui ne s'applique qu'a un type de module.")]),e._v(" "),a("p",[e._v("Exemple:")]),e._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"ombrière"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    ...\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"orientation"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"portrait"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// orientation paysage par défaut pour tous les modules")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"modules"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"standard_module"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// le Module standard est disponible pour ce type de projet,")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// comme orientation n'est pas précisé, orientation vaudra")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// la valeur par défaut du type de projet défini plus haut, 'portrait'")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"large_module"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"orientation"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"landscape"')]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Le grand module est disponile pour ce type de projet,")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// et l'orientation des modules sera 'landscape' pour les grands modules")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("h2",{attrs:{id:"buildings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#buildings"}},[e._v("#")]),e._v(" buildings")]),e._v(" "),a("p",[a("strong",[e._v("Seulement si "),a("code",[e._v("drawing_method")]),e._v(" vaut "),a("code",[e._v('"building"')])])]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("{ [building_id: String]: Object }")])]),e._v(" "),a("li",[e._v("Default: "),a("code",[e._v("None")])])]),e._v(" "),a("p",[e._v("Objet qui liste les variantes disponibles pour un type de hangar, avec les propriétés suivantes:")]),e._v(" "),a("h3",{attrs:{id:"name-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#name-2"}},[e._v("#")]),e._v(" name")]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("String")])]),e._v(" "),a("li",[e._v("Default: "),a("code",[e._v("[building_id]")])])]),e._v(" "),a("p",[e._v("Nom de la variante affiché dans l'interface.")]),e._v(" "),a("h3",{attrs:{id:"building-size"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#building-size"}},[e._v("#")]),e._v(" building_size")]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("{ width: integer, south_roof: integer, north_roof: integer, spacing: integer }")])]),e._v(" "),a("li",[e._v("Default: "),a("code",[e._v("None")]),e._v(" "),a("strong",[e._v("required")])])]),e._v(" "),a("p",[a("code",[e._v("width")]),e._v(": Largeur du hangar, en mm"),a("br"),e._v(" "),a("code",[e._v("south_roof")]),e._v(": Taille du pan sud, en mm"),a("br"),e._v(" "),a("code",[e._v("north_roof")]),e._v(": Taille du pan nord, en mm"),a("br"),e._v(" "),a("code",[e._v("spacing")]),e._v(": Marge entre le bord du toit et le premier module, en mm")]),e._v(" "),a("h3",{attrs:{id:"single-pan"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#single-pan"}},[e._v("#")]),e._v(" single_pan")]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("Boolean")])]),e._v(" "),a("li",[e._v("Default: "),a("code",[e._v("false")])])]),e._v(" "),a("p",[e._v("Si true, calepine seulement sur le pan Sud du hangar.")]),e._v(" "),a("h3",{attrs:{id:"toutes-les-proprietes-du-type-de-projet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#toutes-les-proprietes-du-type-de-projet"}},[e._v("#")]),e._v(" Toutes les propriétés du type de projet")]),e._v(" "),a("p",[e._v("Permet de préciser des propriétés spécifiques à une variante de hangar (ex: "),a("code",[e._v("module_angle")]),e._v(")."),a("br"),e._v("\nCascade de la même manière que les propriétés spécifiques définies dans "),a("code",[e._v("modules")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"building-power"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#building-power"}},[e._v("#")]),e._v(" building_power")]),e._v(" "),a("p",[a("strong",[e._v("Seulement si "),a("code",[e._v("drawing_method")]),e._v(" vaut "),a("code",[e._v('"building"')])])]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("Integer")])]),e._v(" "),a("li",[e._v("Default: "),a("code",[e._v("None")])])]),e._v(" "),a("p",[e._v("Si définie, permet de fixer la puissance en Wc du hangar."),a("br"),e._v("\nCette valeur se mettra à place de la puissance calculée en faisant "),a("code",[e._v("nombre de modules * puissance du module")])])])}),[],!1,null,null,null);t.default=n.exports}}]);