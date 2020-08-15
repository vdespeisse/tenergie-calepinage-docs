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
- type `Integer`
- default `0`

Inclinaison du module en °.

## orientation
- type `String`
- default `"portrait"`

Orientation des modules, valeurs possibles `"portrait"` ou `"landscape"`

## editable_orientation
- type `Boolean`
- default `false`

Si `true`, l'utilisateur peut modifier l'orientation des panneaux via l'interface (= changer entre portrait et paysage)

## max_width_count
- type `Integer`
- default `null`

Nombre de modules maximum dans le sens de la largeur.
Pas de limite si `null` ou `undefined`

## max_height_count
- type `Integer`
- default `null`

Nombre de modules maximum dans le sens de la longueur.
Pas de limite si `null` ou `undefined`


## available_angle_orientation_modes
- type: `Array`
- Default: `["aligned", "azimuth", "value"]`

Mode d'orientation de l'angle d'inclinaison des modules disponibles dans l'interface utilisateur.

Valeurs possibles:
- `aligned`: Aligné premier trait
- `azimuth`: Orienté point cardinal
- `value`: Orienté selon un angle défini en degré (ex: 180° = plein sud)

## default_angle_orientation_mode
- type: `String`
- default: `available_angle_orientation_modes[0]`

Mode d'orientation de l'angle d'inclinaison des modules (doit être une valeur parmi celles déclarées dans `available_angle_orientation_modes`).

## azimuth
- type: `String`
- default: `south`

Si le mode d'orientation de l'angle d'inclinaison des modules est "azimuth", point cardinal par défault (valeurs possibles `south` `north` `east` `west`)

## module_spacing
- type `{ width: Integer, height: Integer }`
- default `{ width: 20, height: 20 }`

Espacement entre les modules en mm.
