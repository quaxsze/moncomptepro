interface NotificationMessages {
  [key: string]: {
    type: string;
    description: string;
  };
}

const notificationMessages: NotificationMessages = {
  invalid_credentials: {
    type: 'error',
    description: 'Mot de passe incorrect.',
  },
  invalid_email: {
    type: 'error',
    description: 'Adresse email invalide.',
  },
  invalid_siret: {
    type: 'error',
    description: 'SIRET invalide.',
  },
  insee_timeout: {
    type: 'error',
    description:
      'Les données INSEE de l’organisation, nécessaires pour valider le rattachement, sont indisponibles pour le moment. Merci de réessayer ultérieurement.',
  },
  invalid_token: {
    type: 'warning',
    description: `Le lien que vous avez utilisé est invalide ou expiré.

Veuillez cliquer sur « Réinitialiser » pour recevoir un nouveau lien`,
  },
  invalid_magic_link: {
    type: 'warning',
    description: 'Le lien que vous avez utilisé est invalide ou expiré.',
  },
  invalid_magic_link_with_reinit: {
    type: 'warning',
    description: `Le lien que vous avez utilisé est invalide ou expiré.

Cliquez sur le bouton « Envoyer le lien » pour obtenir un nouveau lien.`,
  },
  password_change_success: {
    type: 'success',
    description: `Votre mot de passe a été mis à jour.

Veuillez vous connecter avec votre nouveau mot de passe.`,
  },
  reset_password_email_sent: {
    type: 'info',
    description: 'Vous allez recevoir un lien de réinitialisation par e-mail.',
  },
  user_in_organization_already: {
    type: 'error',
    description: 'Vous appartenez déjà à cette organisation.',
  },
  email_unavailable: {
    type: 'warning',
    description: `Un compte existe déjà avec cet email.

Si vous avez oublié votre mot de passe cliquez sur « Mot de passe oublié ? ».`,
  },
  email_verified_already: {
    type: 'error',
    description: `Votre email a déjà été vérifié.`,
  },
  invalid_verify_email_code: {
    type: 'error',
    description:
      'Le code de vérification que vous avez utilisé est invalide ou expiré.',
  },
  email_verification_renewal: {
    type: 'info',
    description:
      'Pour garantir la sécurité de votre compte, votre adresse email doit être vérifiée régulièrement.',
  },
  weak_password: {
    type: 'error',
    description:
      'Votre mot de passe est trop court. Merci de choisir un mot de passe d’au moins 10 caractères.',
  },
  invalid_personal_informations: {
    type: 'error',
    description: 'Le format des informations personnelles est invalide.',
  },
  quit_organization_success: {
    type: 'success',
    description: 'Vous ne faites désormais plus partie de cette organisation.',
  },
  logout_success: {
    type: 'info',
    description: 'Vous êtes maintenant déconnecté.',
  },
  personal_information_update_success: {
    type: 'success',
    description: 'Vos informations ont été mises à jour',
  },
};

export default notificationMessages;
