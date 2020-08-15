# Introduction

Tous les fichiers sont au format JSON.

Toutes les distances sont en **millimètres (mm)**
## Liste des fichiers
### icons.json
Liste des icônes à placer sur la map. [Voir réference](/config/icons)
### project_data.json
Liste des typologies de projets de centrale. [Voir réference](/config/project_data)

## Déploiement

Ils sont chargés au moment de l'initialisation du module de Calepinage.
Donc pour qu'un changement soit effectif, par exemple ajoût d'icone:
 - Déployer le fichier modifié config/icons.json en prod.
 - L'utilisateur vera les nouveaux icônes au prochain chargement de la page.
