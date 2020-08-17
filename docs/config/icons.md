# icons.json
- Type: `{ [icon_id: string]: Object }`

Liste des icônes à placer sur la map.
## path
- Type: `string`
- Default: `none`
- Required

Chemin de l'image de l'icône, peut être une url on un chemin local.

Exemples:
```json
// chemin local
{
  "path": "assets/icons/citerne.png"
  ...
}
// Url image externe
{
  "path": "https://developers.google.com/maps/documentation/javascript/examples/full/images/parking_lot_maps.png",
  ...
}
```
## name
- Type: `string`
- Default: `[icon_id]`

Nom de l'icône que l'utilisateur verra dans l'interface.

## size
- Type: `{ x: integer, y: integer }`
- Default: `{ x: 48, y: 30 }`

Taille de l'icône en pixels.
