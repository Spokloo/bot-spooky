class Command {
  constructor(
    client,
    {
      name = null,
      description = "Aucune description indiquée.",
      category = "Utilisateur",
      usage = "Aucune utilisation indiquée.",
      enabled = true,
      guildOnly = false,
      aliases = new Array(),
      permLevel = "Member",
      clientPermissions = new Array(),
    }
  ) {
    this.client = client;
    this.conf = { enabled, guildOnly, aliases, permLevel, clientPermissions };
    this.help = { name, description, category, usage };
  }
}

module.exports = Command;
