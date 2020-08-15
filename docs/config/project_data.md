# project_data.json
- Type: `{ [project_id: string]: Object }`

Liste des typologies de projets de centrale.
## name
- Type: `string`
- Default: `[project_id]`

Nom du type de projet que l'utilisateur verra dans l'interface.

## drawing_method
- Type: `string`
- Default: `'single'`

Méthode de dessin, 4 valeurs possibles:
- `single`: L'utilisateur dessine un simple trait et les modules se dessinent en dessous, alignés sur le trait
- `fill`: L'utilisateur dessine un polygone, et les modules remplissent la zone définie
- `table`: L'utilisateur dessine un polygone, et des tables de modules remplissent la zone définie
- `building`: Structure prédéfinie (hangar)


## module_angle
- Type: `Integer`
- Default: `0`

Inclinaison du module en °.

## orientation
- Type: `String`
- Default: `"portrait"`

Orientation des modules, valeurs possibles `"portrait"` ou `"landscape"`

## editable_orientation
- Type: `Boolean`
- Default: `false`

Si `true`, l'utilisateur peut modifier l'orientation des panneaux via l'interface (= changer entre portrait et paysage)

## max_width_count
- Type: `Integer`
- Default: `null`

Nombre de modules maximum dans le sens de la largeur.  
Pas de limite si `null` ou `undefined`

## max_height_count
- Type: `Integer`
- Default: `null`

Nombre de modules maximum dans le sens de la longueur.  
Pas de limite si `null` ou `undefined`


## available_angle_orientation_modes
- Type: `Array`
- Default: `["aligned", "azimuth", "value"]`

Mode d'orientation de l'angle d'inclinaison des modules disponibles dans l'interface utilisateur.

Valeurs possibles:
- `aligned`: Aligné premier trait
- `azimuth`: Orienté point cardinal
- `value`: Orienté selon un angle défini en degré (ex: 180° = plein sud)

## default_angle_orientation_mode
- Type: `String`
- default: `available_angle_orientation_modes[0]`

Mode d'orientation de l'angle d'inclinaison des modules (doit être une valeur parmi celles déclarées dans `available_angle_orientation_modes`).

## azimuth
- Type: `String`
- default: `south`

Si le mode d'orientation de l'angle d'inclinaison des modules est "azimuth", point cardinal par défault (valeurs possibles `south` `north` `east` `west`)

## module_spacing
- Type: `{ width: Integer, height: Integer }`
- Default: `{ width: 20, height: 20 }`

Espacement entre les modules, en mm.

## table_spacing
**Seulement si `drawing_method` vaut `"table"`**
- Type: `{ width: Integer, height: Integer}`
- default: none

Espacement entre les tables de modules, en mm.

## table_count
**Seulement si `drawing_method` vaut `"table"`**
- Type: `{ width: Integer, height: Integer}`
- default: `{ width: 1, height: 1 }`

Nombre de modules dans une table.

## modules
- Type: `{ [module_id: string]: Object }`
- default: `None` **required**

Objet qui liste les types de modules disponibles. Les clés sont les `module_id` du fichier [module_data.json](./module_data).

Possibilité de renseigner toutes les même propriétés que `project_data`, pour spécifier une propriété qui ne s'applique qu'a un type de module.

Exemple:
```json
{
  "ombrière": {
    ...
    "orientation": "portrait",
    // orientation paysage par défaut pour tous les modules
    "modules": {
      "standard_module": {},
      // le Module standard est disponible pour ce type de projet,
      // comme orientation n'est pas précisé, orientation vaudra
      // la valeur par défaut du type de projet défini plus haut, 'portrait'
      "large_module": {
        "orientation": "landscape"
        // Le grand module est disponile pour ce type de projet,
        // et l'orientation des modules sera 'landscape' pour les grands modules
      },
    }
  }
}
```

## buildings
**Seulement si `drawing_method` vaut `"building"`**
- Type: `{ [building_id: String]: Object }`
- Default: `None`

Objet qui liste les variantes disponibles pour un type de hangar, avec les propriétés suivantes:

### name
- Type: `String`
- Default: `[building_id]`

Nom de la variante affiché dans l'interface.

### building_size
- Type: `{ width: integer,
          south_roof: integer,
          north_roof: integer,
          spacing: integer }`
- Default: `None` **required**

`width`: Largeur du hangar, en mm  
`south_roof`: Taille du pan sud, en mm  
`north_roof`: Taille du pan nord, en mm  
`spacing`: Marge entre le bord du toit et le premier module, en mm  

### single_pan
- Type: `Boolean`
- Default: `false`

Si true, calepine seulement sur le pan Sud du hangar.

### Toutes les propriétés du type de projet

Permet de préciser des propriétés spécifiques à une variante de hangar (ex: `module_angle`).  
Cascade de la même manière que les propriétés spécifiques définies dans `modules`.

## building_power
**Seulement si `drawing_method` vaut `"building"`**
- Type: `Integer`
- Default: `None`

Si définie, permet de fixer la puissance en Wc du hangar.  
Cette valeur se mettra à place de la puissance calculée en faisant `nombre de modules * puissance du module`
