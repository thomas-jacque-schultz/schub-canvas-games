export type Lang = "fr" | "en";

const textes = {
  fr: {
    titre: "Scribble",
    pseudoInvite: "Ton pseudo pour ce salon",
    rejoindre: "Entrer",
    creer: "Créer un salon",
    connexion: "Connexion au salon…",
    reconnexion: "Connexion perdue, on réessaie…",
    joueurs: "Joueurs",
    meneur: "mène",
    effacer: "Effacer le tableau",
    epaisseur: "Épaisseur",
    copier: "Copier le lien",
    copie: "Lien copié",
    erreur_ROOM_NOT_FOUND: "Ce salon n'existe plus.",
    erreur_ROOM_FULL: "Ce salon est plein (10 joueurs).",
    erreur_TOO_MANY_ROOMS:
      "Trop de salons ouverts en ce moment, réessaie dans quelques minutes.",
    erreur_RATE_LIMITED:
      "Trop de salons créés depuis ta connexion, réessaie plus tard.",
    erreur_ROOM_EXPIRED: "Le salon a fermé après trente minutes sans activité.",
    erreur_REPLACED: "Ce salon est ouvert dans un autre onglet.",
    erreur_INVALID: "Le salon n'a pas compris la demande.",
    nouveau: "Nouveau salon",
  },
  en: {
    titre: "Scribble",
    pseudoInvite: "Your nickname for this room",
    rejoindre: "Join",
    creer: "Create a room",
    connexion: "Joining the room…",
    reconnexion: "Connection lost, retrying…",
    joueurs: "Players",
    meneur: "leads",
    effacer: "Clear the board",
    epaisseur: "Width",
    copier: "Copy link",
    copie: "Link copied",
    erreur_ROOM_NOT_FOUND: "This room no longer exists.",
    erreur_ROOM_FULL: "This room is full (10 players).",
    erreur_TOO_MANY_ROOMS:
      "Too many rooms open right now, try again in a few minutes.",
    erreur_RATE_LIMITED:
      "Too many rooms created from your connection, try again later.",
    erreur_ROOM_EXPIRED:
      "The room closed after thirty minutes without activity.",
    erreur_REPLACED: "This room is open in another tab.",
    erreur_INVALID: "The room did not understand the request.",
    nouveau: "New room",
  },
} as const;

export type Cle = keyof (typeof textes)["fr"];

export const texte = (lang: Lang, cle: Cle): string => textes[lang][cle];

export const langueDuNavigateur = (): Lang =>
  navigator.language?.startsWith("fr") ? "fr" : "en";
