"use strict";

/**
 * Mostly taken from https://github.com/abalabahaha/eris/blob/master/lib/rest/Endpoints.js
 *
 * Removed User-only endpoints
 * @private
 */

const Constants = require("./Constants");

module.exports.BASE_URL = "/api/v" + Constants.REST_API_VERSION;
module.exports.BASE_HOST = "https://discordapp.com";
module.exports.CDN_URL = "https://cdn.discordapp.com";

module.exports.CHANNEL = chanID => `/channels/${chanID}`;
module.exports.CHANNEL_BULK_DELETE = chanID =>
  `/channels/${chanID}/messages/bulk-delete`;
module.exports.CHANNEL_INVITES = chanID => `/channels/${chanID}/invites`;
module.exports.CHANNEL_MESSAGE_REACTION = (chanID, msgID, reaction) =>
  `/channels/${chanID}/messages/${msgID}/reactions/${reaction}`;
module.exports.CHANNEL_MESSAGE_REACTION_USER = (
  chanID,
  msgID,
  reaction,
  userID
) => `/channels/${chanID}/messages/${msgID}/reactions/${reaction}/${userID}`;
module.exports.CHANNEL_MESSAGE_REACTIONS = (chanID, msgID) =>
  `/channels/${chanID}/messages/${msgID}/reactions`;
module.exports.CHANNEL_MESSAGE = (chanID, msgID) =>
  `/channels/${chanID}/messages/${msgID}`;
module.exports.CHANNEL_MESSAGES = chanID => `/channels/${chanID}/messages`;
module.exports.CHANNEL_PERMISSION = (chanID, overID) =>
  `/channels/${chanID}/permissions/${overID}`;
module.exports.CHANNEL_PERMISSIONS = chanID =>
  `/channels/${chanID}/permissions`;
module.exports.CHANNEL_PIN = (chanID, msgID) =>
  `/channels/${chanID}/pins/${msgID}`;
module.exports.CHANNEL_PINS = chanID => `/channels/${chanID}/pins`;
module.exports.CHANNEL_RECIPIENT = (groupID, userID) =>
  `/channels/${groupID}/recipients/${userID}`;
module.exports.CHANNEL_TYPING = chanID => `/channels/${chanID}/typing`;
module.exports.CHANNEL_WEBHOOKS = chanID => `/channels/${chanID}/webhooks`;
module.exports.CHANNELS = "/channels";
module.exports.GATEWAY = "/gateway";
module.exports.GATEWAY_BOT = "/gateway/bot";
module.exports.GUILD = guildID => `/guilds/${guildID}`;
module.exports.GUILD_AUDIT_LOGS = guildID => `/guilds/${guildID}/audit-logs`;
module.exports.GUILD_BAN = (guildID, memberID) =>
  `/guilds/${guildID}/bans/${memberID}`;
module.exports.GUILD_BANS = guildID => `/guilds/${guildID}/bans`;
module.exports.GUILD_CHANNELS = guildID => `/guilds/${guildID}/channels`;
module.exports.GUILD_EMBED = guildID => `/guilds/${guildID}/embed`;
module.exports.GUILD_EMOJI = (guildID, emojiID) =>
  `/guilds/${guildID}/emojis/${emojiID}`;
module.exports.GUILD_EMOJIS = guildID => `/guilds/${guildID}/emojis`;
module.exports.GUILD_INVITES = guildID => `/guilds/${guildID}/invites`;
module.exports.GUILD_INTEGRATION = (guildID, integrationID) =>
  `/guilds/${guildID}/integrations/${integrationID}`;
module.exports.GUILD_INTEGRATIONS = guildID =>
  `/guilds/${guildID}/integrations`;
module.exports.GUILD_MEMBER = (guildID, memberID) =>
  `/guilds/${guildID}/members/${memberID}`;
module.exports.GUILD_MEMBER_NICK = (guildID, memberID) =>
  `/guilds/${guildID}/members/${memberID}/nick`;
module.exports.GUILD_MEMBER_ROLE = (guildID, memberID, roleID) =>
  `/guilds/${guildID}/members/${memberID}/roles/${roleID}`;
module.exports.GUILD_MEMBERS = guildID => `/guilds/${guildID}/members`;
module.exports.GUILD_PRUNE = guildID => `/guilds/${guildID}/prune`;
module.exports.GUILD_ROLE = (guildID, roleID) =>
  `/guilds/${guildID}/roles/${roleID}`;
module.exports.GUILD_ROLES = guildID => `/guilds/${guildID}/roles`;
module.exports.GUILD_VOICE_REGIONS = guildID => `/guilds/${guildID}/regions`;
module.exports.GUILD_WEBHOOKS = guildID => `/guilds/${guildID}/webhooks`;
module.exports.GUILDS = "/guilds";
module.exports.INVITE = inviteID => `/invite/${inviteID}`;
module.exports.OAUTH2_APPLICATION = appID => `/oauth2/applications/${appID}`;
module.exports.USER = userID => `/users/${userID}`;
module.exports.USER_CHANNELS = userID => `/users/${userID}/channels`;
module.exports.USER_GUILD = (userID, guildID) =>
  `/users/${userID}/guilds/${guildID}`;
module.exports.USER_GUILDS = userID => `/users/${userID}/guilds`;
module.exports.USERS = "/users";
module.exports.VOICE_REGIONS = "/voice/regions";
module.exports.WEBHOOK = hookID => `/webhooks/${hookID}`;
module.exports.WEBHOOK_SLACK = hookID => `/webhooks/${hookID}/slack`;
module.exports.WEBHOOK_TOKEN = (hookID, token) =>
  `/webhooks/${hookID}/${token}`;
module.exports.WEBHOOK_TOKEN_SLACK = (hookID, token) =>
  `/webhooks/${hookID}/${token}/slack`;
